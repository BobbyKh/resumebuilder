import AOS from 'aos';
import 'aos/dist/aos.css';
import { faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-70 to-pink-70 mb-3 p-4"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://resumaster.s3.amazonaws.com/video/krishna_bahadur_singh.mp4" type="video/mp4" />
      </video>
      <div className="max-w-md w-full bg-white bg-opacity-50 shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D22AQFACBJycYbx5Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1732080336196?e=1735171200&v=beta&t=3Er7tCa61le9s9ky89gvml9QSFKBH1LGqnuxgWcYjS4"
          alt="Krishna Bhahadur Singh"
          className="w-full h-auto object-cover"
          data-aos="zoom-in"
          data-aos-duration="100"
          data-aos-once="false"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
            Krishna Bhahadur Singh
          </h2>
          <p className="text-lg text-center mb-4" data-aos="fade-up" data-aos-duration="1500"  data-aos-once="false">
            <span className='font-bold border rounded-full px-2 py-1 inline-block mr-2'>13 years of experience</span>
            <span className='border rounded-full px-2 py-1 inline-block mr-2'>Strategic HR Advisor</span>
            <span className='border rounded-full px-2 py-1 inline-block mr-2'>Designed People development Framework</span>
            <span className='border rounded-full px-2 py-1 inline-block mr-2'>People Manager</span>
            <span className='border rounded-full px-2 py-1 inline-block mr-2'>Worked with 3000+ People</span>
            <span className='border rounded-full px-2 py-1 inline-block mr-2'>Directly managed 45+ Team</span>
            <span className='border rounded-full px-2 py-1 inline-block mr-2'>Designed PMS System</span>
            <span className='border rounded-full px-2 py-1 inline-block'>OKR</span>
          </p>
          <div className="flex justify-center space-x-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500" data-aos-once="false">
            <FontAwesomeIcon icon={faReact} className="text-blue-500 text-2xl" />
            <FontAwesomeIcon icon={faCss3Alt} className="text-blue-600 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

