import React from 'react';
import './Navbar.css'
import { IoIosArrowDown } from 'react-icons/io'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">Timu Blog</div>
            <div className="navlinks">
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
            <div className="nav-btn">
                login
            </div>
        </nav>
    );
};

export default Navbar;