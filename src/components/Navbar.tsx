import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTools, faDollarSign, faQuestionCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center py-6 px-10 bg-white shadow-sm">
      <Link to="/">
      <h1 className="text-2xl font-bold text-purple-600">Resu<span className="text-black">master</span></h1></Link>
      <button onClick={toggleMenu} className="text-gray-600 md:hidden flex items-center justify-center w-10 h-10 md:w-auto md:h-auto">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" className="ml-2 md:ml-0" />
      </button>
      <nav className={`${isOpen ? "block" : "hidden"} md:flex md:flex-row md:space-x-6 md:mt-0 mt-4 flex flex-col space-y-4`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-gray-600">
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
      <Link to="/appointment">
      <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 md:flex items-center">
        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
        Book Appointment
      </button>
      </Link>
    </header>
  );
};

export default Navbar;

