import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky
                        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Services", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
           <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300git " : ""}`}>
    <div className='flex justify-between items-center text-base gap-8'>
        <a href="/" className='text-2xl font-semibold items-center'><img className='w-64' src={logo} alt="Logo" /></a> 
        <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => 
                <li key={path}>
                    <Link
                        to={path}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className="block text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer"
                        onClick={() => setIsMenuOpen(false)} 
                    >
                        {link}
                    </Link>
                </li>
            )}
        </ul>
        <div className='space-x-12 hidden lg:flex items-center'>
            <a href="/" className='hidden text-brandPrimary lg:flex items-center hover:text-gray-900'>Login</a>
            <button className='bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGray'>Sign up</button>
        </div>
        <div className='md:hidden'>
            <button className='text-neutralDGray focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
            </button>
        </div>
    </div>

    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary list-none ${ isMenuOpen ? "block" : "hidden"} `}>
        {navItems.map(({ link, path }) => 
            <li key={path}>
                <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="block text-base font-medium cursor-pointer text-white"
                    onClick={() => setIsMenuOpen(false)} 
                >
                    {link}
                </Link>
            </li>
        )}
    </div>
</nav>

        </header>
    );
};

export default Navbar;
