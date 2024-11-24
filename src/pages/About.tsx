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
      className="flex flex-col items-center justify-center min-h-screen bg-[rgb(11,19,32)]"
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-[#ffffff] hover:text-[#ffffff]" data-aos="fade-up" data-aos-duration="1000">Meet Our <span className="text-[#d5420b]">Experts</span> </h1>
      <div className="max-w-md w-full shadow-lg rounded-lg overflow-hidden md:max-w-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[#d5420b] border-2 hover:border-[#d5420b] hover:shadow-[0_0_0_2px_rgba(215,66,11,0.5)] transition-shadow duration-500 ease-in-out">
        <div className="flex items-center justify-center mt-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQFACBJycYbx5Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1732080336196?e=1735171200&v=beta&t=3Er7tCa61le9s9ky89gvml9QSFKBH1LGqnuxgWcYjS4"
            alt="Krishna Bhahadur Singh"
            className="rounded-full w-48 h-48 shadow-lg hover:shadow-4xl "
            data-aos="zoom-in"
            data-aos-duration="100"
            data-aos-once="false"
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl text-center text-[#d5420b] font-bold mb-4" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
            Krishna Bhahadur Singh
          </h2>
          <p className="text-lg text-center mb-4 text-[#ffffff]" data-aos="fade-up" data-aos-duration="1500"  data-aos-once="false">
            I am an undergraduate pursuing Computer Science and Information Technology from Tribhuvan University, Nepal. I am a passionate web developer and a fast learner. I am always eager to learn new technologies and implement them in my projects. I have a good understanding of web development concepts and have experience in building responsive web applications using React, Redux, CSS, HTML and JavaScript. I am also familiar with Node.js and MongoDB. I am a team player and have experience in working in a team environment.
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



