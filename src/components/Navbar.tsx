import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faDollarSign, faQuestionCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {


  useEffect(() => {
    AOS.init();
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        });
        console.log("User data:", response.data);
        response.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);


  return (
    <header className="flex justify-between items-center py-6 px-10 bg-white shadow-sm md:flex-row flex-col" data-aos="fade-down">
      <h1 className="text-2xl font-bold text-purple-600">Resu<span className="text-black">master</span></h1>
      <nav className="md:flex md:flex-row md:space-x-6 md:mt-0 mt-4 flex flex-col space-y-4">
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="#" className="hover:text-purple-600 flex items-center">
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              Tools
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600 flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600 flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 flex items-center">
        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
        Dashboard
      </button>
    </header>
  );
};

export default Navbar;


