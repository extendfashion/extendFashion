import React from 'react'
import Image from "next/image"
import Author from "../images/c1.jpg"
import { FaFacebook } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import CopyRight from './CopyRight';





export default function Footer() {
    return (
        <footer id="footer" className="relative">
        <div className="customOverlay2 absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <div className="footerWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
                        <div className="footerPara w-11/12 mt-8">
                            <div className="relative">
                                <h1 className='text-white font-black text-left mb-3'>Extend Fashion :</h1>
                            </div>
                            <div className="glassEfl p-2 relative text-white text-justify rounded-xl">
                               <p>
                                    With over 14 years of apparel industry experience, <strong className="navLogo">Extend Fashion</strong> has managed to secure complete supply chain resources and built a strong ability to work with any fashion apparel company in the world.<br />
                                    Our solid relationships with partner manufacturers of Bangladesh & quality suppliers around the world ensures that we provide highly competitive product prices, maintain high production standards with best professional services at every stage of the supply chain. This practice enables us to build long-lasting relationships with our clients as well as our manufacturing and sourcing partners.
                               </p>
                            </div>
                        </div>
                        <div className="footerLinks w-11/12 relative mt-8">
                            <h1 className='text-white font-black text-left mb-3'>Quick Links :</h1>
                            <ul className='glassEfl rounded-xl p-6 font-bold'>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#hero">HOME</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#about">ABOUT</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#chain">SUPPLY CHAIN</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#products">PRODUCTS</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#service">SERVICES</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#darkM">SAMPLES</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#client">CLIENT</a></li>
                                <li className='text-white mb-5 border-b-2 border-dashed'><a className='cursor-pointer' href="#sustain">SUSTAINABILITY</a></li>
                                <li className='text-white border-b-2 border-dashed'><a className='cursor-pointer' href="#contact">CONTACT</a></li>
                            </ul>
                        </div>

                        <div className="footerAcc mt-8">
                            <h1 className='text-white font-black text-left mb-3 relative'>
                                Frequently Asked Question About Us :
                            </h1>
                            <div className="join join-vertical w-full glassEfl text-white">

                                <div className="collapse collapse-arrow join-item">
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                    <div className="collapse-title text-md font-bold">
                                        01. What sets Extend Fashion LTD apart in the apparel industry ?
                                    </div>
                                    <div className="collapse-content text-justify text-sm">
                                        <p><span className="font-bold">Answer:</span> Extend Fashion LTD stands out for its 14+ years of experience, specializing in sustainable apparel sourcing and supply chain management. We prioritize quality, competitive pricing, and enduring relationships with clients and partners worldwide.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item ">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-md font-bold">
                                        02. How does Extend Fashion ensure sustainability in its operations ?
                                    </div>
                                    <div className="collapse-content text-justify text-sm">
                                        <p><span className="font-bold">Answer:</span> We prioritize sustainability by carefully selecting partner manufacturers in Bangladesh and quality suppliers globally. Our commitment to eco-friendly practices spans every stage of the supply chain, ensuring ethical sourcing, production, and distribution of our apparel products.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item ">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-md font-bold">
                                        03. What benefits can clients expect from partnering with Extend Fashion ?
                                    </div>
                                    <div className="collapse-content text-justify text-sm">
                                        <p><span className="font-bold">Answer:</span> Clients benefit from our extensive industry experience, competitive pricing, and unwavering commitment to maintaining high production standards. Moreover, our focus on fostering long-lasting relationships ensures personalized service and support tailored to their specific needs and goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footerRes w-11/12 relative right sm:ml-0 md:ml-0 lg:ml-8 mt-8">
                            <h1 className='text-white font-black text-left mb-3'>About Us : </h1>
                            <div className="authorWrap glassEfl rounded-xl p-4">
                                <div className="authorImg w-full mx-auto">
                                    <a href="#hero" className="btn btn-ghost csBtn text-3xl font-bold navLogo"><h1>E<span className="text-white cslogo">XTEND FASHION</span></h1></a>
                                </div>
                                <div className="authorTxt text-white mt-4 text-justify">
                                    
                                    <p> <strong className="navLogo">Extend Fashion LTD. </strong>Established in 1995, Extend Fashion LTD specializes in sustainable apparel sourcing and supply chain management. With over 14 years in the industry, we offer competitive pricing, maintain high production standards, and prioritize enduring relationships with clients and manufacturing partners worldwide, ensuring the best professional services at every stage.</p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <CopyRight />
        </footer>
    )
}
