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

interface HeroSection {
  title: string;
  subtitle: string;
}

const Landing = () => {
  const [heroSection, setHeroSection] = useState<HeroSection>({ title: '', subtitle: '' });

  useEffect(() => {
    AOS.init();
    axios.get('http://127.0.0.1:8000/api/hero')
      .then(response => {
        setHeroSection(response.data);
      })
      .catch(error => {
        console.error("Error fetching hero section", error);
      });
  }, []);

  return (
    <>
      <div className="text-center py-20 px-6 bg-gradient-to-t from-gray-900 via-gray-800 to-black bg-no-repeat bg-center bg-cover bg-clip-border" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/619e1a5dbe4c7972fb461169/7d6c924e-75b3-4edb-88ff-842159afd345/Copy+of+RESUME+COACH+%281%29.png')" }} data-aos="fade-in">
        <h2 className="text-4xl font-bold re mb-6">
          <span className="block font-serif  text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">{heroSection.title}</span>
          <span className="block font-serif text-5xl font-extralight" data-aos="fade-left" data-aos-duration="1000">{heroSection.subtitle}</span>
        </h2>
        <p className="text-[#d5420b] text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1500">
          Our tools support you every step of the way—from creating a professional resume and writing cover letters, to finding job listings and keeping track of your applications.
        </p>
        <button data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="bg-[#f56c3a] text-[white] text-lg py-3 px-6 rounded hover:bg-red-700">Get started</button>
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

