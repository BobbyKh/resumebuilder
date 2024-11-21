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
      className="bg-gradient-to-r from-white to-gray-100 p-10 rounded-xl shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-center mb-6" data-aos="zoom-in">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-gray-800 text-6xl mr-6"
        />
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Customer Reviews
        </h2>
      </div>
      <div className="flex items-center justify-center" data-aos="fade-in">
        <div className="flex items-center" data-aos="zoom-in">
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
        <div className="ml-6 text-gray-700" data-aos="fade-left">
          <p className="font-bold text-lg">4.5/5</p>
          <p className="text-sm">Based on 200+ reviews</p>
        </div>
      </div>
      <div
        className="flex flex-wrap max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
        data-aos="fade-up"
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-3"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
            <div>
              <p className="text-xl font-bold text-gray-800">Jane Doe</p>
              <p className="text-sm text-gray-500">Jan 15, 2023</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
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
          <p className="text-gray-700 mb-4">
            This is a great product! It has exceeded my expectations and I would
            highly recommend it to anyone.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
