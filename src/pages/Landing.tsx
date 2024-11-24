import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faSearch, faEnvelope, faList } from "@fortawesome/free-solid-svg-icons";
import Review from "../resume/Review";
import Template from "../resume/Template";
import Pricing from "./Pricing";
import Faq from "./Faq";
import About from "./About";
import Testimonial from "./Testimonial";
import Experience from "../resume/Experience";

const Landing = () => {
  return (
    <>
      <div className="text-center py-20 px-6 bg-gradient-to-t from-blue-100 via-indigo-100 to-pink-100 bg-no-repeat bg-center bg-cover bg-opacity-10" style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/619e1a5dbe4c7972fb461169/7d6c924e-75b3-4edb-88ff-842159afd345/Copy+of+RESUME+COACH+%281%29.png')  "}} data-aos="fade-in">
        <h2 className="text-4xl font-bold text-white mb-6">
          <span className="block font-serif text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000"> Elevate the search</span> 
          <span className="block font-serif text-5xl font-extralight" data-aos = "fade-left" data-aos-duration="1000">for your</span> <span className="text-blue-500 font-serif text-5xl font-bold hover:text-purple-700" data-aos = "fade-up" data-aos-duration="1000" >next career</span>
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto" data-aos = "fade-up" data-aos-duration="1500">
          Our tools support you every step of the way—from creating a professional resume and writing cover letters, to finding job listings and keeping track of your applications.
        </p>
        <button data-aos = "fade-up" data-aos-duration="1500" data-aos-delay="500" className="bg-blue-500 text-white text-lg py-3 px-6 rounded hover:bg-purple-700">Get started</button>
      </div>
      <div className="bg-white py-10">
        <div data-aos="fade-in" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          <div className="text-center bg">
            <FontAwesomeIcon icon={faFileAlt} size="4x" className="text-gray-600 mb-4" data-aos="fade-right"/>
            <h3 className="text-lg font-bold text-gray-900" data-aos="fade-right">1 - Create your resume</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faSearch} size="4x" className="text-gray-600 mb-4" data-aos="fade-up"/>
            <h3 className="text-lg font-bold text-gray-900" data-aos="fade-up">2 - Find relevant jobs</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faEnvelope} size="4x" className="text-gray-600 mb-4" data-aos="fade-left"/>
            <h3 className="text-lg font-bold text-gray-900" data-aos="fade-left">3 - Compose cover letters</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faList} size="4x" className="text-gray-600 mb-4" data-aos="fade-right"/>
            <h3 className="text-lg font-bold text-gray-900" data-aos="fade-right">4 - Track your applications</h3>
          </div>
        </div>
      </div> 
    <Template/>
    <Experience/>
    <Review/>
    <Pricing/>
    <Faq/>
    <Testimonial/>
    <About/>
    


      
    </> 
  )
}

AOS.init();
export default Landing


