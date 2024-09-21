import React, { useState } from 'react';
import ToastIcon from './assets/toast.png';
import './Navbar.css';

const navData = {
    navbardata: [
        {
            title: "Toast Community Hub",
            url: "/Toast Community Hub",
            subnav: [
                { title: "Toast Community Hub", url: "/Toast Community Hub" }
            ]
        },
        {
            title: "Advocacy",
            url: "/Advocacy",
            subnav: [
                { title: "Customer Advisory Board", url: "/Customer Advisory Board" },
                { title: "Community Ambassador", url: "/Community Ambassador" }
            ]
        },
        {
            title: "Product Hub",
            url: "/Product Hub",
            subnav: [
                { title: "Product Updates *NEW*", url: "/Product Updates *NEW*" },
                { title: "Test Kitchen Beta Discussions", url: "/Test Kitchen Beta Discussions" }
            ]
        },
        {
            title: "iTalent Test",
            url: "/iTalent Test",
            subnav: [
                { title: "iTalent Forum", url: "/iTalent Forum" }
            ]
        }
    ]
};

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [moreIndex, setMoreIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const handleMoreMouseEnter = (index) => {
        setMoreIndex(index);
    };

    const handleMoreMouseLeave = () => {
        setMoreIndex(null);
    };

    // Split the navigation items into first two items and remaining items for "More"
    const visibleNavItems = navData.navbardata.slice(0, 2);
    const moreNavItems = navData.navbardata.slice(2);

    return (
        <nav className="navbar toast-container">
            <div className='navbar-left'>
                <div className="custom-community-header-logo">
                    <img src={ToastIcon} alt="Toast Icon" className="toast-icon" />
                </div>
                <ul className="custom-community-header-navigation-v3">
                    {visibleNavItems.map((navItem, index) => (
                        <li
                            key={index}
                            className="nav-item"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>{navItem.title}</span>
                            {navItem.subnav && (
                                <span className="dropdown-icon">▼</span>
                            )}
                            {activeIndex === index && navItem.subnav && (
                                <ul className="subnav">
                                    {navItem.subnav.map((subItem, subIndex) => (
                                        <li key={subIndex} className="subnav-item">
                                            <a href={subItem.url}>{subItem.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    {/* More Option */}
                    {moreNavItems.length > 0 && (
                        <li
                            className="nav-item"
                            onMouseEnter={() => handleMoreMouseEnter('more')}
                            onMouseLeave={handleMoreMouseLeave}
                        >
                            <span>More</span>
                            <span className="dropdown-icon">▼</span>
                            {moreIndex === 'more' && (
                                <ul className="subnav more-nav">
                                    {moreNavItems.map((navItem, index) => (
                                        <li
                                            key={index}
                                            className="more-nav-item"
                                            onMouseEnter={() => handleMouseEnter(index + 2)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <span>{navItem.title}</span>
                                            {navItem.subnav && (
                                                <span className="dropdown-icon">▶</span>
                                            )}
                                            {activeIndex === index + 2 && navItem.subnav && (
                                                <ul className="subnav">
                                                    {navItem.subnav.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="subnav-item">
                                                            <a href={subItem.url}>{subItem.title}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )}
                </ul>
            </div>
            <div className='navbar-right'>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." />
                </div>
                <button className='login-button'>Login via Toast account</button>
            </div>
        </nav>
    );
};

export default Navbar;
