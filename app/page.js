import About from "@/components/About";
import Chain from "@/components/Chain";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollTop";
import Products from "@/components/Product";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Sustain from "@/components/Sustain";

import { Poppins } from "next/font/google";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});


export default function Home() {
  return (
    <main className={poppins.className}>

    <Navbar/>
    <Hero/>
    <ScrollToTopButton/>
    <About/>
    <Chain/>
    <Products/>
      <Services/>
      <Sustain/>
      <Client/>
    <Contact/>
    <Footer/>

    </main>
  );
}
