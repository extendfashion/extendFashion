import SectionHead from "./SectionHead";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaTags } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import Garments from "../images/gar.jpg"
import Garments2 from "../images/gar2.jpg"
import Garments3 from "../images/gar3.jpg"

export default function Product() {
  return (
      <section id="products">
          <div className="container mx-auto">
              <div className="w-11/12 mx-auto">
                  <SectionHead subTitle="Product & Samples" titleFirst="O" titleLast="ur Products & Samples" />

                  <div className="aboutWrap sm:block md:block lg:grid grid-cols-2 gap-x-12">
                      <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                          <div className="new flex  justify-between">
                              <div className="dos p-2 m-2 rounded-2xl customShadow">
                                  <Image
                                      src={Garments3}
                                quality="100"
                                alt="Picture of the author"
                                className="bbimg1 object-cover mx-auto rounded-2xl"
                            />
                              </div>
                              <div className="dos p-2 m-2 rounded-2xl customShadow">
                                  <Image
                                      src={Garments2}
                                quality="100"
                                alt="Picture of the author"
                                className="bbimg1 object-cover mx-auto rounded-2xl"
                            />
                              </div>
                          </div>
                          <div className="dos p-2 m-2 rounded-2xl customShadow">
                              <Image
                                  src={Garments}
                            quality="100"
                            alt="Picture of the author"
                            className=" object-cover mx-auto rounded-2xl"
                        />
                          </div>
                      </div>

                      <div className="aboutTxt text-white">

                          
                          <div className="abttxtP text-justify customShadow p-5 mt-2 rounded-3xl">
                              <p>
                                  We have own sample house to ensure sustainable new fashion trend with renovation in view of customer demand modern concept. Welcome buyer technical specifications for making any counter samples. Moreover, we have vast experience & knowledge to make sketch with measurements, size grading, trims selections, printing & embroidery design idea, copy samples with alternative style presentation. Through our sample house, we are making correct costing related all works; fabric consumption, pattern, fabric selection, choice trim, accessories, etc. accordingly after received bulk orders smoothly manage quality production and delivery.To manage buyer all different orders merchandising related works before and after order placements & finalize technical specifications for correct sample approval to ensure factory production process smoothly when bulk order is placed. We have available sources of different kind of Apparel Decorations such as Embroidery <br /></p>
                                  <div className="wrapp mt-4 mb-4">
                                      <div class="badge badge-outline navLogo csBorder m-2">- Applique</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Smocking</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Ruffles</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Bias Trimmings</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- 3D Form</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Rie Rac</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Sequins</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Screen Printing</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Sublimation Printing</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Digital Printing</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Photo Printing</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Rhinestones</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Custom Patches</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Faggoting</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Lace Motifs</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Scalloped Edging</div>
                                      <div class="badge badge-outline navLogo csBorder m-2">- Tie Dye</div>
                                    </div> 
                                    <p>and different types of Fashion Trims and accessories for specially Ladies high end fashion Dresses, etc.
                              </p>
                              
                          </div>


                    
                      </div>



                  </div>

              </div>
          </div>
      </section>
  )
}
