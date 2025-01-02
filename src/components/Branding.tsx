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
              
      <section className="bg-gray-50 py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:flex md:justify-between" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500">
    <div className="flex flex-col justify-center md:w-1/2" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1500">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Exclusive Offer!<br /><span className="text-gray-800">Save up to 50%!</span></h1>
      <p className="text-gray-600 text-lg mb-8" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1500">Seize the moment - unbeatable prices for a limited time only!</p>
      <a href="#" className="self-start bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500">Create a Resume</a>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1500">
      <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg" alt="shopping illustration" className="hidden dark:block" />
      <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg" alt="shopping illustration" className="dark:hidden" />
    </div>
  </div>
  <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {branding.slice(0, 4).map((brand) => (
      <div key={brand.id} className="flex flex-col items-center ">
        <img src={brand.logo} alt={brand.name} className="w-25 h-24 mb-4 object-fit object-cover" />
        <h2 className="text-2xl font-semibold text-center text-gray-600 hover:text-blue-600">{brand.name}</h2>
        {/* <h4 className="text-center text-gray-600 justify-center text-ellipsis text-justify ">{brand.subtitle}</h4> */}
      </div>
    ))}
  </div>
</section>
    )
}

export default Branding