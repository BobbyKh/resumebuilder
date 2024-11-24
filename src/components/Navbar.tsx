import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTools, faDollarSign, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black dark:bg-[#d5420b] flex justify-between items-center py-6 px-10 shadow-sm">
      <div className="flex items-center">
        <img src={logo} alt="ResuMaster Logo" className="w-10 h-10 md:w-12 md:h-12 mr-2" />
        <h1 className="text-2xl font-bold text-white">Resu<span className="text-white">master</span></h1>
      </div>
      <button onClick={toggleMenu} className="text-white md:hidden flex items-center justify-center w-10 h-10 md:w-auto md:h-auto">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" className="ml-2 md:ml-0" />
      </button>
      <nav className={`${isOpen ? "block" : "hidden"} md:flex md:flex-row md:space-x-6 md:mt-0 mt-4 flex flex-col space-y-4`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-white md:items-center">
          <li className="md:w-1/3">
            <a href="#" className="hover:text-[#d5420b] flex items-center">
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              Tools
            </a>
          </li>
          <li className="md:w-1/3">
            <a href="#" className="hover:text-[rgb(213,66,11)] flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Pricing
            </a>
          </li>
          <li className="md:w-1/3">
            <a href="#" className="hover:text-[#d5420b] flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

