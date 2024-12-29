import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import API_URL from '../api/Api';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  interface About {
    id: string;
    title: string;
    name: string;
    description: string;
    image: string;
  }

  const [about, setAbout] = useState<About[]>([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/aboutus`);
        setAbout(response.data);
      } catch (error) {
        console.error('Error fetching About:', error);
      }
    };
    fetchAbout();
  }, []);

  return (

    <section className="text-gray-600 body-font bg-no-repeat bg-right-top bg-contain" style={{ backgroundImage: 'url(bg.png)' }} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1500">
      {about.map((about) => (
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-lg shadow-lg">
        <img className="object-cover object-center rounded-t-lg" alt="hero" src={about.image} />
        <div className="bg-white rounded-b-lg p-4">
            <h2 className="text-2xl font-bold mb-2">{about.name}</h2>
            <p className="text-gray-600">{about.title}</p>
        </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="text-3xl font-bold mb-4">{about.title}</h1>
        <h2 className="text-3xl font-bold mb-4">{about.name}</h2>
        <p className="mb-8 leading-relaxed">{about.description}</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book an Appointment</button>
        </div>
        </div>
      </div>
      ))}
    </section>
  );
};

export default About;
