import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../resume/Template';
import Steps from '../resume/Steps';
import Review from '../resume/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
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
    
    <Template/>

    <Steps/>

    <Review/>
    <div className="mt-10 flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
      <FontAwesomeIcon icon={faQuestionCircle} className="w-12 h-12 text-gray-600" />
      <h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center">
          <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3V2c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v12.01l-3 3"></path></svg>
          <p className="ml-4 text-lg text-gray-600">What is the best way to create an effective resume?</p>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3V2c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v12.01l-3 3"></path></svg>
          <p className="ml-4 text-lg text-gray-600">What are the most important sections of a resume?</p>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3V2c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v12.01l-3 3"></path></svg>
          <p className="ml-4 text-lg text-gray-600">How do I create a resume that stands out from the crowd?</p>
        </li>
      </ul>
    </div>
    </>

    
    
  );

};



  export default Landing

