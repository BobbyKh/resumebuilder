import AOS from "aos";
import "aos/dist/aos.css";
import Review from "../resume/Review";
import Template from "../resume/Template";
import Pricing from "./Pricing";
import Faq from "./Faq";
import About from "./About";
import Testimonial from "./Testimonial";
import Experience from "../resume/Experience";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
const API_URL = 'https://resumebuilder-1-6ea6.onrender.com';
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
    AOS.init();
  }, []);


  return (
    <>
      <div className="text-center py-20 px-6 bg-gradient-to-t from-gray-900 via-gray-800 to-black bg-no-repeat bg-center bg-cover bg-clip-border" style={{ backgroundImage: `url(${heroSection.image})` }} data-aos="fade-in">
        <h2 className="text-4xl font-bold re mb-6">
          <span className="block font-serif text-[#d5420b] text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">{heroSection.name}</span>
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1500">
          {heroSection.description}
        </p>
        <Link to="/documentcategory">
        <button data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="bg-[#f56c3a] text-[white] text-lg py-3 px-6 rounded hover:bg-red-700">{heroSection.button_text}</button>
        </Link>
      </div>

      <Template/>
      <Experience/>
      <Review/>
      <Pricing/>
      <Faq/>
      <Testimonial/>
      <About/>
    </>
  );
}

export default Landing;

