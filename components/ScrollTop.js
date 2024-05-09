"use client";

import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="customShadow" style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000'}}>
            <button onClick={scrollToTop} style={{ backgroundColor: '#98EC65', color: '#0E1E25', border: 'none', borderRadius: '15%', width: '40px', height: '40px', fontSize: '24px', cursor: 'pointer' }}>
                <FaArrowCircleUp className="ml-2"/>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
