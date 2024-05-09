import SectionHead from "./SectionHead";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaTags } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import Textile from "../images/textile.jpg"
import Textile2 from "../images/tex2.jpg"
import Textile3 from "../images/tex3.jpg"





export default function About() {
  return (
    <section id="about">
        <div className="container mx-auto">
            <div className="w-11/12 mx-auto">
                  <SectionHead subTitle="Our Intro" titleFirst="A" titleLast="bout Us" />

                  <div className="aboutWrap sm:block md:block lg:grid grid-cols-2 gap-x-12">
                      <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                          <div className="new flex  justify-between">
                              <div className="dos p-2 m-2 rounded-2xl customShadow">
                                  <Image
                                      src={Textile3}
                                      quality="100"
                                      alt="Picture of the author"
                                      className="bbimg1 object-cover mx-auto rounded-2xl"
                                  />
                              </div>
                              <div className="dos p-2 m-2 rounded-2xl customShadow">
                                  <Image
                                      src={Textile2}
                                      quality="100"
                                      alt="Picture of the author"
                                      className="bbimg1 object-cover mx-auto rounded-2xl"
                                  />
                              </div>
                          </div>
                          <div className="dos p-2 m-2 rounded-2xl customShadow">
                              <Image
                                  src={Textile}
                                  quality="100"
                                  alt="Picture of the author"
                                  className=" object-cover mx-auto rounded-2xl"
                              />
                          </div>
                      </div>
                      
                      <div className="aboutTxt text-white">

                          <div className="abtTxtHead text-justify mt-1">
                              <p> <strong className="navLogo">Extend Fashion LTD.</strong> a one-stop solution for sustainable apparel sourcing and supply chain management company that stepped into the world of apparel business in 1995. </p>
                          </div>

                          <div className="abtIco mt-8 grid grid-cols-3 gap-x-4">
                              <div className="abtSingleIco p-6 dos customShadow rounded-2xl">
                                  <div className="ico text-5xl navLogo w-fit mx-auto">
                                      <PiClockCountdownFill />
                                  </div>
                                  <div className="abticoText text-center">
                                      <h1 className="text-white text-2xl mt-1 mb-1">27+</h1>
                                      <h1 className="text-white">Years of Experience</h1>
                                  </div>
                              </div>
                              <div className="abtSingleIco p-6 dos customShadow rounded-2xl">
                                  <div className="ico text-5xl navLogo w-fit mx-auto">
                                      <FaPeopleGroup />
                                  </div>
                                  <div className="abticoText text-center">
                                      <h1 className="text-white text-2xl mt-1 mb-1">150+</h1>
                                      <h1 className="text-white">Valuable Employees</h1>
                                  </div>
                              </div>
                              <div className="abtSingleIco p-6 dos customShadow rounded-2xl">
                                  <div className="ico text-5xl navLogo w-fit mx-auto">
                                      <FaTags />
                                  </div>
                                  <div className="abticoText text-center">
                                      <h1 className="text-white text-2xl mt-1 mb-1">30+</h1>
                                      <h1 className="text-white">Brands & Retails</h1>
                                  </div>
                              </div>
                          </div>

                          <div className="abttxtP text-justify mt-8 mb-6">
                              <p>
                                  With over 27 years of apparel industry experience, <strong className="navLogo">Extend Fashion</strong> has managed to secure complete supply chain resources and built a strong ability to work with any fashion apparel company in the world.<br /><br />
                                  Our solid relationships with partner manufacturers of Bangladesh & quality suppliers around the world ensures that we provide highly competitive product prices, maintain high production standards with best professional services at every stage of the supply chain. This practice enables us to build long-lasting relationships with our clients as well as our manufacturing and sourcing partners.
                              </p>
                          </div>

                        
                          <div className="abtBtn w-fit mx-auto">
                              <button className="smky-btn3 relative hover:text-[#0E1E25] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#98EC65] after:rounded-t-full after:w-full after:bottom-0 after:left-0 navLogo">
                                  <a href="#contact" className="font-bold">Contact Us</a>
                              </button>
                              </div>
                      </div>

                      

                  </div>

            </div>
        </div>
    </section>
  )
}


