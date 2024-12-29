import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/Api";

const Pricing = () => {
  const [pricing, setPricing] = useState<any>([]);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/pricing`);
        setPricing(response.data);
      } catch (error) {
        console.error("Error fetching pricing data from backend:", error);
      }
    };

    fetchPricing();
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "center-bottom",
    });
  }, []);

  return (
    <div className="min-h-screen pb-28 sm:pb-0 bg-initial hover:bg-#1e3a8a shadow-md bg" style={{ backgroundImage: 'url(https://i.imgur.com/qlmbCA7.png)', backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className="max-w-7xl mx-auto p-4 sm:p-10 lg:py-20">
        <div className="max-w-5xl mx-auto text-center tracking-widest pb-10 lg:pb-20">
          <p className="pb-4 text-xl font-bold text-[#1e3a8a]" data-aos="fade-up">
            PRICING
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-800" data-aos="fade-up">
            The right price for you, <span className="text-[#1e3a8a]">the right plan</span>
          </h1>
          <p className="text-xl sm:text-2xl font-light px-10 py-6 text-black" data-aos="fade-up">
            Lorem ipsum has been the industry's standard dummy text ever since,
            when an unknown printer took a galley of type and scrambled.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-6 lg:mt-10">
          {pricing.map((plan: any) => (
            <div
              key={plan.id}
              className="flex-1 gap-4 w-full mb-6 bg-blue-200 rounded-xl shadow-gray-500 shadow-xl transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
              data-aos="zoom-in"
            >
              <div className="text-center p-12">
                <div className="flex items-center mb-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <p className={`text-2xl font-bold ${plan.name === 'Free' ? 'text-black' : 'text-black'}`}>
                    {plan.name.toUpperCase()}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <span className="font-extrabold text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3 text-black">
                    ${plan.price}
                  </span>
                  <span className="font-normal text-xl inline-block align-text-middle">
                    /month
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-b-xl p-10">
                <ul className="space-y-4">
                  {typeof plan.features === 'string'
                    ? plan.features.split(',').map((feature: string, index: Key | null | undefined) => (
                      <li key={index} className="flex items-center gap-2 list-disc list-inside">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a8a] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-black">{feature.trim()}</span>
                      </li>
                    ))
                    : plan.features.map((feature: string, index: number) => (
                      <li key={index} className="list-disc list-inside text-black">{feature}</li>
                    ))}
                </ul>
                <Link to={`/pricing/subscribe/${plan.id}`}>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    type="button"
                    className="w-full text-center text-lg text-[#1a91f0] mt-8 p-3 rounded-lg shadow-[0_0_10px_#1e3a8a] transition hover:text-[#1e3a8a] hover:shadow-[0_0_15px_#1e3a8a]"
                    data-aos="flip-up"
                  >
                    {plan.name === 'Free' ? (
                      <span className="font-semibold animate-border animate-font">Get Started</span>
                    ) : (
                      <span className="font-semibold animate-border animate-font">Subscribe</span>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
