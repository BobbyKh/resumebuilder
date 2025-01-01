import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";

interface Branding {
  id: number;
  name: string;
  subtitle: string;
  logo: string;
}
const Branding = () => {
  const [branding, setBranding] = useState<Branding[]>([]);

  useEffect(() => {
    const fetchBranding = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/branding`);
        setBranding(response.data);
      } catch (error) {
        console.error("Error fetching branding:", error);
      }
    };

    fetchBranding();
  }, []);

    
    return(
              
      <section className="bg-white py-8  md:py-16">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500">
        <div className="content-center justify-self-start md:col-span-7 md:text-start" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1500">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#1a91f0] dark:text-[#1a91f0] md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br /><span className="text-black dark:text-black">Up to 50% OFF!</span></h1>
          <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1500">Don't Wait - Limited Stock at Unbeatable Prices!</p>
          <a href="#" className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500">Shop Now</a>
        </div>
        <div className="hidden md:col-span-5 md:mt-0 md:flex" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1500">
          <img className="dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg" alt="shopping illustration" />
          <img className="hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg" alt="shopping illustration" />
        </div>
      </div>
      <div className="grid grid-cols-2 p-8 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {branding.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
            <img src={brand.logo} alt={brand.name} className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-sans">{brand.name}</h2>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Branding