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
import Feature from "../components/Feature";
import ResumeLayout from "../components/ResumeLayout";
import Gallery from "../components/Gallery";
import Counter from "../components/Counter";
import HowitWorks from "../components/HowitWorks";
import { ACCESS_TOKEN } from "../auth/Token";

interface HeroSection {
  image: string;
  name: string;
  description: string;
  button_text: string;
}

const Landing = () => {
  const [heroSection, setHeroSection] = useState<HeroSection>({
    image: '',
    name: '',
    description: '',
    button_text: '',
  });

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    axios.get(`${API_URL}/api/hero`)
      .then(response => {
        const heroData = response.data[0]; // Extract the first item
        setHeroSection({
          image: heroData.image || '',
          name: heroData.name || '',
          description: heroData.description || '',
          button_text: heroData.button_text || '',
        });
        console.log("Hero Section:", heroData);
      })
      .catch(error => {
        console.error("Error fetching hero section", error);
      });
  }, []);

  return (
    <>
      <div className="relative p-8 bg-gradient-to-br from-white to-blue-300">
        <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('https://static.vietcv.io/top-page/dot-bg-top.svg')` }}></div>
        <div className="relative flex flex-col md:flex-row items-center text-center md:text-left py-20 px-6 bg-no-repeat bg-right bg-clip-border text-white" style={{ backgroundImage: `url('https://resume.io/assets/landing/home/hero/texture-889feac6724c2636f78564dabaf59a3f49d2376258b3250ae2d5e14c332ee0e2.webp')` }}>
          <div className="md:w-1/2 lg:w-2/5 px-8 py-4" >
            <h2 className="text-4xl font-bold re mb-6">
              <span className="block font-serif text-blue-800 text-5xl font-bold">{heroSection.name}</span>
            </h2>
            <p className="text-[#1e2532] text-lg mb-8 max-w-2xl mx-auto text-justify">
              {heroSection.description}
            </p>
            <Link to="/question">
              <button type="button" className="bg-blue-600 text-white text-lg py-3 px-6 rounded hover:bg-blue-800">{heroSection.button_text}</button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0 justify-items-center">
            <Link to="/resume/editor/">
              <img src={heroSection.image} alt={heroSection.name} className="rounded shadow-lg w-full max-w-md mx-auto mr-8 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out " />
            </Link>
          </div>
        </div>
      </div>

      <Template />
      <Review />
      <Branding />
      <Pricing />
      <Faq />
      <ResumeLayout />
      <Tutorial />
      <Feature />
      <About />
      <Counter />
      <HowitWorks />
      <Gallery />
    </>
  );
}

export default Landing;

