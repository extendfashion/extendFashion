import Welcome from "./Welcome"

export default function Hero() {
  return (
      <div id="hero">
          <div className="hero min-h-screen ">
              <div className="hero-overlay"></div>
              <div className="hero-content text-right text-neutral-content w-full justify-end">
                  <div className="max-w-2xl text-right">

                      <div className="heroTxt text-white">
                          
                          <div className="welcome navLogo text-xs mb-12 font-bold">
                              <Welcome />
                          </div>
                          
                          <h1 className="sm:text-4xl md:tex-4xl lg:text-6xl font-bold">A ONE-STOP<br /> SOLUTION FOR<br /> APPAREL SOURCING</h1>
                      </div>


                  </div>
              </div>
          </div>
      </div>
  )
}
