import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      </div>
    )
  }
  
  export default Contact
  

