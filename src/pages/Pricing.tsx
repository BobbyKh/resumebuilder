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
    <div
      className="min-h-screen pb-28 sm:pb-0 bg-gradient-to-b from-blue-900 to-blue-600 shadow-md"
      style={{
        backgroundImage: 'url(https://i.imgur.com/qlmbCA7.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-10 lg:py-20">
        <div className="max-w-5xl mx-auto text-center tracking-wide pb-10 lg:pb-20">
          <p className="pb-4 text-4xl font-extrabold text-blue-800" data-aos="fade-up">
            PRICING
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-blue-600" data-aos="fade-up">
            The right price for you, <span className="text-black">the right plan</span>
          </h1>
          <p className="text-lg sm:text-xl font-light px-6 py-6 text-black" data-aos="fade-up">
            Choose a plan that fits your needs and enjoy premium features at every level.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-6 lg:mt-10">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className="flex-1 gap-4 w-full mb-6 bg-[#1a91f0] rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl hover:translate-y-2"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              data-aos="zoom-in"
            >
              <div
                className="text-center p-10"
                style={{ transform: 'rotateY(0deg)', transition: 'transform 0.6s' }}
              >
                <div className="flex items-center mb-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white mr-2"
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
                  <p className={`text-3xl font-extrabold text-white`}>{plan.name.toUpperCase()}</p>
                </div>
                <div className="flex justify-center items-center">
                  <span className="font-extrabold text-6xl text-black-100">${plan.price}</span>
                  <span className="font-medium text-xl text-gray-100 ml-2">/month</span>
                </div>
              </div>
              <div
                className="bg-white rounded-b-3xl p-8"
                style={{ transform: 'rotateY(0deg)', transition: 'transform 0.6s' }}
              >
                <ul className="space-y-4">
                  {typeof plan.features === 'string'
                    ? plan.features.split(',').map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-lg text-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {feature.trim()}
                        </li>
                      ))
                    : plan.features.map((feature, index) => (
                        <li key={index} className="text-lg text-gray-800">
                          {feature}
                        </li>
                      ))}
                </ul>
                <Link to={`/pricing/subscribe/${plan.id}`}>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    type="button"
                    className="w-full text-lg font-bold text-white bg-[#1a91f0] mt-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
                    data-aos="flip-up"
                  >
                    {plan.name === 'Free' ? 'Get Started' : 'Subscribe'}
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
  