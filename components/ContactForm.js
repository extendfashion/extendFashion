"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegPaperPlane } from "react-icons/fa";


export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vbytw7t', 'template_hrccp9w', form.current, 'ERpa9_DDRT5g0tCXO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="conFormwrap w-full mx-auto py-4">
            <form ref={form} onSubmit={sendEmail} className="w-full mx-auto">

                <div className="singleConIn">
                    <div className="conLab"><label>Name</label></div>
                    <input className="p-5 csW conIn rounded-xl w-full  outline-none" type="text" name="user_name" placeholder="Insert Your Name..." />
                </div>
                <div className="singleConIn">
                    <div className="conLab"><label>Email</label></div>
                    <input className="p-5 csW conIn rounded-xl outline-none" type="email" name="user_email" placeholder="Insert Your E-mail..." />
                </div>
                <div className="singleConIn">
                    <div className="conLab"><label>Subject</label></div>
                    <input className="p-5 csW conIn rounded-xl outline-none" type="text" name="user_subject" placeholder="Insert Your Subject..." />
                </div>
                <div className="singleConIn">
                    <div className="conLab"><label>Message</label></div>
                    <textarea rows={5} className="p-5 csW conIn rounded-xl outline-none" name="message" placeholder="Write Us Your Message..." />

                    <div className="abttns w-fit mx-auto">
                        <button className="smky-btn3 relative hover:text-[#0E1E25] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#98EC65] after:rounded-t-full after:w-full after:bottom-0 after:left-0 navLogo" type="submit" value="Send">
                            <a href="#contact" className="font-bold"><span className='float float-left'>Send</span><FaRegPaperPlane className='w-fit mx-auto' /></a>
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};