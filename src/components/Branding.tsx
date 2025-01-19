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

  return (
    <section className="bg-blue-800 py-12">
      <div className="mx-auto max-w-screen-xl px-4 flex flex-col-reverse md:flex-row md:justify-between">
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive Offer!<br />
            <span className="text-white">Save up to 50%!</span>
          </h1>
          <p className="text-white text-lg sm:text-xl mb-8">
            Seize the moment - unbeatable prices for a limited time only!
          </p>
          <a
            href="#"
            className="self-start bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Create a Resume
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
            alt="shopping illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Branding Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {branding.slice(0, 4).map((brand) => (
          <div key={brand.id} className="flex flex-col items-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 object-cover transition duration-300 hover:scale-105"
            />
            <h2 className="text-sm sm:text-lg font-semibold text-center text-white hover:text-blue-600">
              {brand.name}
            </h2>
            {/* <h4 className="text-center text-gray-600 text-xs sm:text-sm">{brand.subtitle}</h4> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branding;
