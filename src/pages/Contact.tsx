import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
      <div
        className="min-h-screen flex flex-col justify-center items-center"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        <h1
          className="text-4xl sm:text-7xl font-bold text-gray-800"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="false"
        >
          Contact Us
        </h1>
        <p
          className="text-xl sm:text-3xl text-gray-600 mt-4 sm:mt-0"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
          data-aos-once="false"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2" />
          Get in touch with us
        </p>
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500" data-aos-once="false">
          <form
            className=""
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
            data-aos-once="false"
          >
            <div className="">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-600" />
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-gray-600" />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faComment} className="w-6 h-6 text-gray-600" />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-2 rounded h-32 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact
  

