import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem('token'));

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/login');
    };

    return (
        <div>
            <div
                className={`container flex justify-around p-5 text-[13px] items-center fixed top-0 w-full z-20 transition-colors duration-300  
                ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-indigo-600 text-white border-b border-white'}
                `}
            >
                <div className='nav-logo'>
                    {
                        isScrolled ? <img src="/dark-logo.png" alt="" className='h-[20px] mt-1' /> : <img src="/logo.png" alt="" className={`h-[20px] mt-1`} />
                    }
                    
                </div>
                <div className='flex gap-10 items-center cursor-pointer'>
                    <Link to="hero" smooth={true} duration={500}>Home</Link>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                    <Link to="service" smooth={true} duration={500}>Services</Link>
                    <Link to="faq" smooth={true} duration={500}>FAQ</Link>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    <Link to="terms" smooth={true} duration={500}>Terms</Link>
                    <Link to="privacy" smooth={true} duration={500}>Policy</Link>

                    {token ? (
                        <>
                            <NavLink to={'/dashboard'}>
                                <button className={`px-4 border rounded-sm h-[35px] cursor-pointer font-bold ${isScrolled ? 'border-green-600 text-green-600' : 'border-green-600 text-white'}`}>
                                    Dashboard
                                </button>
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className='px-4 border border-red-600 rounded-sm h-[35px] cursor-pointer text-white font-bold'
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to={'/login'}>
                                <button className={`px-4 border rounded-sm h-[35px] cursor-pointer font-bold ${isScrolled ? 'border-green-600 text-green-600' : 'border-green-600 text-white'}`}>
                                    Login
                                </button>
                            </NavLink>
                            <NavLink to={'/register'}>
                                <button className={`px-4 border rounded-sm h-[35px] cursor-pointer font-bold ${isScrolled ? 'border-green-600 text-green-600' : 'border-green-600 text-white'}`}>
                                    Register
                                </button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
