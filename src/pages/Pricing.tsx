import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/Api";

interface Plan {
  id: number;
  name: string;
  price: number;
  features: string | string[];
}

const Pricing = () => {
  const [pricing, setPricing] = useState<Plan[]>([]);

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
          <p className="pb-4 text-4xl font-extrabold text-blue-800">
            PRICING
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-blue-800">
            The right price for you, <span className="text-blue-800">the right plan</span>
          </h1>
          <p className="text-lg sm:text-xl font-light px-6 py-6 text-gray-800">
            Choose a plan that fits your needs and enjoy premium features at every level.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 ">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className="flex-1 gap-2 w-full mb-4 bg-blue-400 rounded-2xl shadow-xl">
              
              <div
                className="text-center p-8"
                style={{
                  transform: 'rotateY(0deg)',
                  transition: 'transform 0.5s ease-in-out',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="flex items-center mb-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white mr-2"
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
                  <p className={"text-2xl font-bold text-white"}>{plan.name.toUpperCase()}</p>
                </div>
                <div className="flex justify-center items-center">
                  <span className="font-bold text-3xl text-black-100">${plan.price}</span>
                  <span className="font-medium text-lg text-gray-100 ml-2">/month</span>
                </div>
              </div>
              <div
                className="bg-white rounded-b-2xl p-6"
                style={{ transform: 'rotateY(0deg)', transition: 'transform 0.6s' }}
              >
                <ul className="space-y-3">
                  {typeof plan.features === 'string'
                    ? plan.features.split(',').map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-base text-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500"
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
                        <li key={index} className="text-base text-gray-800">
                          {feature}
                        </li>
                      ))}
                </ul>
                <Link to={`/pricing/subscribe/${plan.id}`}>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    type="button"
                    className="w-full text-base font-bold text-white bg-blue-400 mt-6 py-2 rounded-lg shadow-md hover:bg-blue-900"
                    
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
