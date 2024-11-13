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
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <h2 className="text-5xl font-bold mb-6 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="false">About Section</h2>
      <p className="text-lg text-center mb-4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000" data-aos-once="false">
        This is a simple resume builder built with React and Tailwind CSS. It
        uses the AOS library for animations and uses the FontAwesome icons for
        the icons.
      </p>
      <div className="flex space-x-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500" data-aos-once="false">
        <FontAwesomeIcon icon={faReact} className="text-blue-500 text-3xl" />
        <FontAwesomeIcon icon={faCss3Alt} className="text-blue-600 text-3xl" />
      </div>
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        className="rounded-full mt-6 animate-spin"
        data-aos="flip-left"
        data-aos-duration="1500"
        data-aos-delay="2000"
        data-aos-once="false"
      />
    </div>
  );
};

export default About;

