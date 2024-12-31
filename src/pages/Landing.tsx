import AOS from "aos";
import "aos/dist/aos.css";
import Review from "../resume/Review";
import Pricing from "./Pricing";
import Faq from "./Faq";
import About from "./About";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_URL from '../api/Api';
import Tutorial from "../tutorial/Tutorial";
import Template from "../resume/Template";
import Branding from "../components/Branding";
import MobileApp from "../components/Mobileapp";


interface HeroSection {
  image : string;
  name: string;
  description: string;
  button_text: string;
}

const Landing = () => {
  const [heroSection, setHeroSection] = useState<HeroSection>({
    image: '',
    name: '',
    description: '',
    button_text : '',
  });

  useEffect(() => {
    axios.get(`${API_URL}/api/hero`)
      .then(response => {
        const heroData = response.data[0]; // Extract the first item
        setHeroSection({
          image: heroData.image || '',
          name: heroData.name || '',
          description: heroData.description || '',
          button_text:heroData.button_text || '',
        });
        console.log("Hero Section:", heroData);
      })
      .catch(error => {
        console.error("Error fetching hero section", error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="relative p-8">
        <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('https://static.vietcv.io/top-page/dot-bg-top.svg')` }}></div>
        <div className="relative flex flex-col md:flex-row items-center text-center md:text-left py-20 px-6 bg-no-repeat bg-right bg-clip-border text-white" style={{ backgroundImage: `url('https://resume.io/assets/landing/home/hero/texture-889feac6724c2636f78564dabaf59a3f49d2376258b3250ae2d5e14c332ee0e2.webp')` }}>
          <div className="md:w-1/2 lg:w-2/5 px-8 py-4" >
        <h2 className="text-4xl font-bold re mb-6">
          <span className="block font-serif text-[#1e2532] text-5xl font-bold">{heroSection.name}</span>
        </h2>
        <p className="text-[#1e2532] text-lg mb-8 max-w-2xl mx-auto text-justify">
          {heroSection.description}
        </p>
        <Link to="/documentcategory">
          <button data-aos="fade-up" className="bg-[#1a91f0] text-white text-lg py-3 px-6 rounded hover:bg-blue-700">{heroSection.button_text}</button>
        </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0 justify-items-center" data-aos="fade-left">
        <img src={heroSection.image} alt={heroSection.name} className="rounded shadow-lg w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>

    

      {/* <Template/> */}
      {/* <Experience/> */}
      <Template/>
      <Review/>
      <Branding/>
      <Pricing/>
      <Faq/>
     
  <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />Best Resume online</h1>

        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">Finding the perfect online resume involves identifying a template or tool that best reflects your skills, experience, and career goals.</p>
      </div>

      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="https://d.novoresume.com/images/doc/minimalist-resume-template.png" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-fit object-center" />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-fit object-center" />
        </div>
      </div>
    </div>    
  </section>

  
      <Tutorial/>
      <MobileApp/>
      <About/>
    </>
  );
}

export default Landing;



