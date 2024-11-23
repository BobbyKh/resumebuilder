import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-0"
      style={{
        backgroundImage: 'url(https://img.freepik.com/premium-photo/blank-paper-business-desk-table-top-view-flat-lay_33795-89.jpg?semt=ais_hybrid)', // Replace with actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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
      <Link
        to="/login"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 sm:mt-4 transition duration-500 transform hover:scale-105"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1500"
        data-aos-once="false"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Landing;

