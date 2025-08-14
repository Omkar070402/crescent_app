import React, { useEffect, useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();


    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/login');
    };
    return (
        <div >
            <div className='container flex justify-around p-5 bg-indigo-600 text-[13px] items-center text-white'>

                <div className='nav-logo '>
                    <img src="/logo.png" alt="" className='bg- h-[20px] mt-1 ' />
                </div>
                <div className='flex gap-10  items-center cursor-pointer'>
                    {/* <h5>Home</h5> */}
                    {/* <h5>About</h5>
                    <h5>Services</h5>
                    <h5>FAQs</h5>
                    <h5>contact</h5>
                    <h5>Terms</h5>
                    <h5>Policy</h5> */}
                    <Link to="hero" smooth={true} duration={500}>Home</Link>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                    <Link to="service" smooth={true} duration={500}>Services</Link>
                    <Link to="faq" smooth={true} duration={500}>FAQ</Link>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    <Link to="terms" smooth={true} duration={500}>Terms</Link>
                    <Link to="privacy" smooth={true} duration={500}>Policy</Link>

                    {token ? (
                        <>
                            <div>
                                <NavLink to={'/dashboard'}>
                                    <button className='px-4 border border-green-600 rounded-sm h-[35px] cursor-pointer text-green-600 font-bold'>
                                        Dashboard
                                    </button>
                                </NavLink>
                            </div>
                            <div>
                                <button
                                    onClick={handleLogout}
                                    className='px-4 border border-red-600 rounded-sm h-[35px] cursor-pointer text-white font-bold'
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <NavLink to={'/login'}>
                                    <button className='px-4 border border-green-600 rounded-sm h-[35px] cursor-pointer text-green-600 font-bold'>
                                        Login
                                    </button>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to={'/register'}>
                                    <button className='px-4 border border-green-600 rounded-sm h-[35px] cursor-pointer text-green-600 font-bold'>
                                        Register
                                    </button>
                                </NavLink>
                            </div>
                        </>
                    )}

                </div>
            </div>


            <hr className='text-gray-50' />
        </div>
    )
}

export default Navbar
