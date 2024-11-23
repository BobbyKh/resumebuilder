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

const Landing = () => {
  return (
    <>
      <div data-aos="fade-up" className="text-center py-20 px-6 bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(https://www.yealink.com/website-service/attachment/product/image/20240719/202407190945301265617.jpg"}}>
        <h2 className="text-4xl font-bold text-white mb-6" data-aos="fade-up" data-aos-duration="1000">
          <span className="block" data-aos="fade-right" data-aos-delay="500">Elevate the search</span> <br className="hidden sm:block"></br>
          <span className="block" data-aos="fade-left" data-aos-delay="1000">for your</span> <span className="text-blue-500 hover:text-purple-700" data-aos="fade-up" data-aos-delay="1500">next career</span>
        </h2>
        <p className="text-white  text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
          Our tools support you every step of the way—from creating a professional resume and writing cover letters, to finding job listings and keeping track of your applications.
        </p>
        <button className="bg-blue-500 text-white text-lg py-3 px-6 rounded hover:bg-purple-700" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2500">Get started</button>
      </div>
      
      <div className="bg-white py-10">
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
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

