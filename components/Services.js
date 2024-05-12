import SectionHead from "./SectionHead";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaTags } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import Production from "../images/production.jpg"
import Production2 from "../images/production2.jpg"
import Production3 from "../images/production3.jpg"
import Production4 from "../images/production4.jpg"

export default function Product() {
    return (
        <section id="service">
            <div className="container mx-auto">
                <div className="w-11/12 mx-auto">
                    <SectionHead subTitle="Services" titleFirst="O" titleLast="ur Services" />

                    <div className="aboutWrap sm:block md:block lg:grid grid-cols-2 gap-x-12">

                        <div className="aboutTxt text-white glassEfl customShadow rounded-3xl">


                            <div className="text-justify  p-5 mt-2 rounded-3xl">
                                <p>We provide Business development services which are crucial to ensuring sourcing ability with different suppliers as well as order placement negotiation.</p>
                                <div class="badge badge-outline navLogo csBorder m-2">- Factories </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Lace Motifs  </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Fabric </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Accessories  </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Trim </div>

                                <p>Ensured good relationships with all the supply chain for smooth Product development. Key Services of product</p>
                                <div class="badge badge-outline navLogo csBorder m-2">- merchandising   </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- compliance audit </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- follow up production </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Inspection </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- including delivery shipment  </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- logistics   </div>
                                <p>Our New & modernized Fabric sources are also key solutions to develop new product development opportunities.</p>

                                <p>We are maintaining quality standard AQL 1.5~2.5 by controlling from: </p>

                                <div class="badge badge-outline navLogo csBorder m-2">- Yarn </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Fabricating </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Pattern </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Cutting </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Sewing </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Finishing </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Checking Accessories</div>

                                <p>Packing up to cartons and to loading into containers, all these activities are managed & supervised by a number of well-trained merchandisers followed by teams of Q.C Quality Inspectors.</p>
                                <div class="badge badge-outline navLogo csBorder m-2">- Well known better costing </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Fabric Consumption </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Manage Quality Production</div>
                                <div class="badge badge-outline navLogo csBorder m-2">- With Quantity</div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Inspection & Delivery</div>
                                <p> To manage buyers all different services:</p>

                                <div class="badge badge-outline navLogo csBorder m-2">- orders merchandising </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- communication</div>
                                <div class="badge badge-outline navLogo csBorder m-2">- support idea and expertise</div>
                                <p>follow up buyer product development approval of all merchandising works: </p>




                                <div class="badge badge-outline navLogo csBorder m-2">- orders merchandising </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Pattern </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Fabric </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Consumption </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Costing </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Packing </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Accessories </div>
                                <div class="badge badge-outline navLogo csBorder m-2">- Final inspection</div>
                                <div class="badge badge-outline navLogo csBorder m-2">- issued Inspection Certificate</div><br/>

                               <p> We have established a variety of solutions & services for overseas Buyers, Retailers, and Wholesalers with new creations & innovations with sustainable compliance.</p>

 












                            </div>



                        </div>
                        <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                            <div className="new sm:block md:grid lg:grid grid-cols-2 text-white">
                                <div className="glassEfl customShadow p-3 m-2 rounded-2xl customShadow">
                                    <Image
                                        src={Production2}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl mb-4"
                                    />
                                    <h1 className="navLogo font-bold my-2 text-lg ml-1">Design</h1>
                                    <p className="text-justify ml-1"> Our innovative design team analyze market trends and share new ideas, materials and embellishments by working closely with customers to enhance their product while keeping true to meet their brand identity. </p>
                                </div>
                                <div className="glassEfl customShadow p-3 m-2 rounded-2xl customShadow">
                                    <Image
                                        src={Production}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl mb-4"
                                    />
                                    <h1 className="navLogo font-bold my-2 text-lg ml-1">Development</h1>
                                    <p className="text-justify ml-1"> Our dedicated technical product development team work together with inhouse sample section to ensure that quality samples are created & developed according to customers’ specification sheet. </p>
                                </div>
                                <div className="glassEfl customShadow p-3 m-2 rounded-2xl customShadow">
                                    <Image
                                        src={Production3}
                                        quality="100"
                                        alt="Picture of the author"
                                        className=" object-cover mx-auto rounded-2xl mb-4"
                                    />
                                    <h1 className="navLogo font-bold my-2 text-lg ml-1">Sourcing</h1>
                                    <p className="text-justify ml-1">  Our strong merchandising team works with quality suppliers around the world which enables us to provide comprehensive sourcing solutions for raw materials, fabrics, trims and accessories. </p>
                                </div>
                                <div className="glassEfl customShadow p-3 m-2 rounded-2xl customShadow">
                                    <Image
                                        src={Production4}
                                        quality="100"
                                        alt="Picture of the author"
                                        className=" object-cover mx-auto rounded-2xl mb-4"
                                    />
                                    <h1 className="navLogo font-bold my-2 text-lg ml-1">Production</h1>
                                    <p className="text-justify ml-1">   Our experienced production team ensure best products are shipped on time by monitoring & controlling the quality of a wide range within our 25+ fully compliant manufacturing partners across Bangladesh.  </p>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
