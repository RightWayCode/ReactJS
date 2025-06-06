// rfce
import React, { useState } from 'react'
// react icons
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from '../assest/icons/logo.svg'

// import link from react scroll : npm i react-scroll
import { Link } from 'react-scroll';


function Header() {
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "About" },
        { link: "Pricing", path: "pricing" }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header>
            <nav className='fixed top-0 left-0 right-0 z-50 p-4 mx-auto text-blue-900 bg-white border-b md:px-14 max-w-screen-2xl'>
                <div className='container flex items-center justify-between mx-auto text-lg font-medium'>
                    <div className='flex items-center space-x-14'>
                        <a href="/" className='flex items-center space-x-3 text-2xl font-semibold text-blue-500'>
                            <img src={logo} alt="" className='items-center inline-block w-10' />
                        </a>
                        {/* Showing navItems using map */}
                        <ul className='hidden space-x-12 md:flex'>
                            {
                                navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block cursor-pointer hover:text-gray-300'>{link}</Link>)
                            }
                        </ul>
                    </div>
                    {/* language and signup */}
                    <div className='items-center hidden space-x-12 md:flex'>
                        <a href="/" className='items-center hidden lg:flex hover:text-blue-500' ><GrLanguage className='mr-2' /> Language</a>
                        <button className='px-4 py-2 duration-300 bg-blue-500 rounded translate-all hover:text-white hover:bg-indigo-600'>Sign up</button>
                    </div>

                    {/* menu btn only display on mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-xl text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-blue-500 ' />) : (<FaBars className='w-6 h-6 text-blue-500 ' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* nav for mobile device  */}
            <div className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-blue-500 text-xl ${isMenuOpen?'block fixed top-0 left-0 right-0':"hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block cursor-pointer hover:text-gray-300'>{link}</Link>)
                }
            </div>
        </header>
    )
}

export default Header
