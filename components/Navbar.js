"use client";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--poppins-font",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
});

import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            // className={`navbar w-full ${isSticky ? 'sticky' : ''}` }
            className="fixed w-full z-[99999]"
        >
            <div className="glassEfl">
                <div className={poppins.className}>
                    <div className="container mx-auto">
                        <div className="w-11/12 mx-auto">
                            <div className="navbar justify-between">
                                <div className="navbar-start">
                                    <div className="dropdown ">
                                        <div tabIndex={0} role="button" className="btn csBtn btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </div>
                                        <ul tabIndex={0} className="menu glassEfl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navLogo font-medium">
                                            <li><a href="#hero">HOME</a></li>
                                            <li><a href="#about">ABOUT</a></li>
                                            <li><a href="#chain">SUPPLY CHAIN</a></li>
                                            <li><a href="#products">PRODUCTS</a></li>
                                            <li><a href="#service">SERVICES</a></li>
                                            <li>
                                                <a>SAMPLES</a>
                                                <ul className="p-2 ">
                                                    <li><a href="#solarSystem">Kidswear</a></li>
                                                    <li><a href="#sun">Womenswrar</a></li>
                                                    <li><a href="#mercury">Menswear</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#client">CLIENTS</a></li>
                                            <li><a href="#sustain">SUSTAINABILITY</a></li>
                                            <li><a href="#contact">CONTACT</a></li>
                                            
                                        </ul>
                                    </div>
                                    <a href="#hero" className="btn btn-ghost csBtn text-3xl font-bold navLogo"><h1>E<span className="text-white">XTEND FASHION</span></h1></a>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1 navLogo font-medium">
                                        <li><a href="#hero">HOME</a></li>
                                        <li><a href="#about">ABOUT</a></li>
                                        <li><a href="#chain">SUPPLY CHAIN</a></li>
                                        <li><a href="#products">PRODUCTS</a></li>
                                        <li><a href="#service">SERVICES</a></li>
                                        <li>
                                            <details>
                                                <summary>SAMPLES</summary>
                                                <ul className="p-2 glassEfl w-48">
                                                    <li><a href="#solarSystem">Kidswear</a></li>
                                                    <li><a href="#sun">Womenswrar</a></li>
                                                    <li><a href="#mercury">Menswear</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li><a href="#client">CLIENTS</a></li>
                                        <li><a href="#sustain">SUSTAINABILITY</a></li>
                                        <li><a href="#contact">CONTACT</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;