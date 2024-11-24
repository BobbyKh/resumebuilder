import {
  faQuoteLeft,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-white to-gray-100 p-10 md:p-20 rounded-xl shadow-lg relative"
    >
      <div
        className="flex items-center justify-center mb-6"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-gray-800 text-6xl md:text-8xl mr-6"
        />
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Customer Reviews
        </h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        data-aos="fade-in"
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <div className="flex items-center p-6">
              <img
                className="w-12 h-12 rounded-full mr-3"
                src="https://via.placeholder.com/150"
                alt="User avatar"
              />
              <div>
                <p className="text-xl font-bold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Jan 15, 2023</p>
              </div>
            </div>
            <div className="flex items-center mb-4 p-6">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-xl mr-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-xl mr-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-xl mr-1"
              />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="text-yellow-400 text-xl mr-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-gray-300 text-xl mr-1"
              />
            </div>
            <p className="text-gray-700 mb-4 p-6">
              This is a great product! It has exceeded my expectations and I
              would highly recommend it to anyone.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline p-6"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

