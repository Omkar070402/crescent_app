import db from "../configs/db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'



const register = async (req, res) => {
    try {
        const { first_name, last_name, mobile, email, dob, password } = req.body;

        console.log("First Name:", first_name);
        console.log("Last Name:", last_name);
        console.log("Mobile:", mobile);
        console.log("Email:", email);
        console.log("DOB:", dob);
        console.log("Password:", password);

        console.log(req.body);

        if (!first_name || !last_name || !mobile || !email || !dob || !password) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }


        db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
            if (err) return res.status(500).json({ message: "Database error", error: err });

            if (results.length > 0) {
                return res.status(400).json({ message: "Email already registered" });
            }


            const hashedPassword = await bcrypt.hash(password, 10);


            const insertQuery = `
                INSERT INTO users (first_name,last_name, mobile, email, dob, password) 
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            db.query(insertQuery, [first_name, last_name, mobile, email, dob, hashedPassword], (err, result) => {
                if (err) return res.status(500).json({ message: "Error inserting user", error: err });

                res.status(201).json({ message: "User registered successfully", userId: result.insertId });


            });



        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }


        const sql = "SELECT * FROM users WHERE email = ?";
        db.query(sql, [email], async (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const user = results[0];


            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }


            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({
                message: 'Login successful',
                token
            });
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getDetails = async (req, res) => {
    try {
        
        const userId = req.user.id;

        const sql = `SELECT id, first_name, last_name, mobile, email, dob 
                     FROM users 
                     WHERE id = ?`;

        db.query(sql, [userId], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({
                message: 'Data fetched successfully',
                user: result
            });
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { register, login , getDetails };


