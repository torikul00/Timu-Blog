import React from 'react';
import './Navbar.css'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest, BsFillPeopleFill } from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
const Navbar = () => {
    return (
        <nav>
            <div className="topbar-container">
                <div className="topbar-links">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="topbar-socials">
                    <a href=""><BsFacebook /></a>
                    <a href=""><BsTwitter /></a>
                    <a href=""><BsYoutube /></a>
                    <a href=""><BsPinterest /></a>
                </div>
            </div>


            <div className="navbar-container">
                <div className="navlinks">
                    <a className='logo' href="">TIMU</a>
                    <div className="dropdown-container">
                        <div className='btn-arrow'><button className="dropdown-btn">BLOGS</button> <IoIosArrowDown className='drop-icon' /></div>
                        <div className="dropdown-content">
                            <a href="">Technology</a>
                            <a href="">Sports</a>
                            <a href="">Food</a>
                            <a href="">Health</a>
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className='btn-arrow'><button className="dropdown-btn">SHOP</button> <IoIosArrowDown className='drop-icon' /></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content">
                                <a href="">Technology</a>
                                <a href="">Sports</a>
                                <a href="">Food</a>
                                <a href="">Health</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className='btn-arrow'><button className="dropdown-btn">NEWS</button> <IoIosArrowDown className='drop-icon' /></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content">
                                <a href="">Technology</a>
                                <a href="">Sports</a>
                                <a href="">Food</a>
                                <a href="">Health</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className='btn-arrow'><button className="dropdown-btn">FEATURES</button> <IoIosArrowDown className='drop-icon' /></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content">
                                <a href="">Technology</a>
                                <a href="">Sports</a>
                                <a href="">Food</a>
                                <a href="">Health</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-container">
                   <BiSearchAlt2 className='search-icon' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;