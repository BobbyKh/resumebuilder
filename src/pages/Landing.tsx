import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-gray-100 to-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-0"
      data-aos="zoom-out"
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
        Build Your Resume
      </h1>
      <p
        className="text-xl sm:text-3xl text-gray-600 mt-4 sm:mt-0"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1000"
        data-aos-once="false"
      >
        Create a professional resume in minutes.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 sm:mt-4"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1500"
        data-aos-once="false"
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing;

