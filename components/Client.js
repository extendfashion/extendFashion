import SectionHead from "./SectionHead"
import Image from "next/image"
import C1 from "../images/c1.jpg"
import C2 from "../images/c2.jpg"
import C3 from "../images/c3.jpg"
import C4 from "../images/c4.jpg"
import C5 from "../images/c5.jpg"
import C6 from "../images/c6.jpg"
import C7 from "../images/c7.jpg"
import C8 from "../images/c8.jpg"
import C9 from "../images/c9.jpg"
import C10 from "../images/c10.png"
import C11 from "../images/c11.jpg"
import C12 from "../images/c12.jpg"

export default function Client() {
  return (
    <section id="client">
        <div className="container mx-auto">
              <div className="hea text-center w-11/12 mx-auto">
                  <SectionHead subTitle="Client" titleFirst="O" titleLast="ur Clients" />
                  <p className="w-8/12 mx-auto">Steady growth & long-sighted visionary thinking has helped <strong className="navLogo">Extend Fashion</strong> catering to the supply chain needs of world's leading apparel retailers & brands across the globe.</p>
              </div>
            <div className="w-2/4 mx-auto">
                  

                  <div className="clientWrap grid grid-cols-4 gap-x-4 gap-y-4 mt-12">
                    <div className="singleclient">
                          <Image
                              src={C1}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                      <div className="singleclient">
                          <Image
                              src={C4}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                      </div>
                      <div className="singleclient">
                          <Image
                              src={C5}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                    <div className="singleclient">
                          <Image
                              src={C6}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
    
                    <div className="singleclient">
                          <Image
                              src={C2}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                      <div className="singleclient">
                          <Image
                              src={C8}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                      </div>
                    <div className="singleclient">
                          <Image
                              src={C7}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                      <div className="singleclient">
                          <Image
                              src={C10}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                      </div>
                    <div className="singleclient">
                          <Image
                              src={C3}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                    
                    
                    
                    
                      
                    <div className="singleclient">
                          <Image
                              src={C9}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                    
                    <div className="singleclient">
                          <Image
                              src={C11}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                    <div className="singleclient">
                          <Image
                              src={C12}
                              quality="100"
                              alt="Picture of the author"
                              className="bbimg1 object-cover mx-auto rounded-2xl"
                          />
                    </div>
                  </div>
            </div>
        </div>
    </section>
  )
}
