import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faSearch, faEnvelope, faList } from "@fortawesome/free-solid-svg-icons";
import Review from "../resume/Review";
import Template from "../resume/Template";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <div data-aos="fade-up" className="text-center py-20 px-6 bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
        <h2 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up sm:text-6xl">
          Elevate the search <br className="hidden sm:block"></br>
          for your <span className="text-purple-600">next career</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Our tools support you every step of the way—from creating a professional resume and writing cover letters, to finding job listings and keeping track of your applications.
        </p>
        <button className="bg-purple-600 text-white text-lg py-3 px-6 rounded hover:bg-purple-700" data-aos="fade-up">Get started</button>
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
    


      
    </> 
  )
}

AOS.init();
export default Landing

