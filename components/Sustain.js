import SectionHead from "./SectionHead";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaTags } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import Tree from "../images/tree.png"
import Reimg from "../images/re.png"


export default function Product() {
    return (
        <section id="sustain">
            <div className="container mx-auto">
                <div className="w-11/12 mx-auto">
                    <SectionHead subTitle="Product & Samples" titleFirst="O" titleLast="ur Products & Samples" />

                    <div className="w-3/4 mx-auto text-justify mb-12">
                        <p>Sustainability is in the heart of <strong className="navLogo">Extend Fashion </strong>
                            From the begining we are committed to develop a sustainable approach in every aspect of our operations and supply chain management. We work with well managed suppliers around the world who can meet our customer requirements for sustainability-sourced materials and products with reduced environmental impact.</p>
                    </div>

                    <div className="aboutWrap sm:block md:block lg:grid grid-cols-2 gap-x-12 ">
                        
                        <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-48">
                            <div className="dos w-fit  p-2 m-2 rounded-2xl customShadow">
                                <Image
                                    src={Tree}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" treeimg object-cover mx-auto rounded-2xl"
                                />
                            </div>
                        </div>

                        <div className="aboutTxt text-white text-justify  p-5 mt-2 abttxtP customShadow rounded-3xl">

                            <div className="rediv grid grid-cols-2 mb-4">
                                <div className="reTxt text-5xl">
                                    <p><strong className="navLogo">RE</strong>USE</p>
                                    <p><strong className="navLogo">RE</strong>CYCLE</p>
                                    <p><strong className="navLogo">RE</strong>DUCE</p>
                                    
                                </div>
                                <div className="reImg">
                                    <Image
                                        src={Reimg}
                                        quality="100"
                                        alt="Picture of the author"
                                        className=" reimg object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                
                            </div>
                            <hr className="csHr mb-2" />


                            <div className="">
                                <p>
                                    <strong className='navLogo mb-2'>
                                        “Be a part of the solution, not a part of the pollution.” -
                                    </strong><br/>
                                    is our environmental ethics and responsibility to create a sustainable lifestyle for our future generations. We want to inspire and enable as many people as possible to live more sustainably in harmony with nature.
                                    </p>
                                <p className="navLogo mt-2">Let's work together to protect our only living planet - Earth...</p>

                            </div>



                        </div>



                    </div>

                </div>
            </div>
        </section>
    )
}
