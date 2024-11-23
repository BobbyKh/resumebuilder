import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [pricing, setPricing] = useState<any>([]);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/pricing");
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
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen pb-28 sm:pb-0 bg-gray-900">
      <div className="max-w-7xl mx-auto p-4 sm:p-10 lg:py-20">
        <div className="max-w-5xl mx-auto text-center text-white tracking-widest pb-10 lg:pb-20">
          <p className="pb-4 text-xl text-gray-200" data-aos="fade-up">PRICING</p>
          <h1 className="text-3xl sm:text-5xl font-black" data-aos="fade-up" data-aos-duration="1500">
            The right price for you, whoever you are
          </h1>
          <p className="text-xl sm:text-2xl font-light text-gray-200 px-10 py-6" data-aos="fade-up" data-aos-duration="1500">
            Lorem ipsum has been the industry's standard dummy text ever since,
            when an unknown printer took a galley of type and scrambled.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-6 lg:mt-4">
          {pricing.map((plan: any) => (
            <div
              key={plan.id}
              className="flex-1 gap-4 w-full mb-6 bg-white rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="text-center p-12">
                <p className="text-3xl lg:text-2xl xl:text-3xl pb-4">
                  {plan.name}
                </p>
                <div className="flex justify-center items-center">
                  <span className="font-extrabold text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3">
                    ${plan.price}
                  </span>
                  <span className="font-normal text-xl text-gray-500 inline-block align-text-middle">
                    /month
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-b-xl border-t-2 border-gray-200/20 p-10">
                <ul className="space-y-4">
                  {Array.isArray(plan.features) ? plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  )) : null}
                </ul>
                <Link to="/pricing/subscription/1">
                <button
                  type="button"
                  className="w-full text-center bg-white text-lg text-indigo-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-indigo-600"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  Suscribe
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

