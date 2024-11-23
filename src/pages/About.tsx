import AOS from 'aos';
import 'aos/dist/aos.css';
import { faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface AboutType {
  id: number;
  name: string;
  image: string;
  description: string;
}

const About = () => {
  const [about, setAbout] = useState<AboutType>({
    id: 0,
    name: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/aboutus');
        const data = await response.json();
        console.log('Fetched Data:', data); // Debug fetched data
        setAbout(data);
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    };

    fetchAbout();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-green-100 mb-3"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={about.image}
          alt={about.name}
          className="w-full h-auto object-cover"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
            {about.name}
          </h2>
          <p className="text-lg text-center mb-4" data-aos="fade-up" data-aos-duration="1500" data-aos-once="false">
            {about.description}
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

