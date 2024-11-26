import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDollarSign, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Dropdown } from "flowbite-react";


interface Organization {
  name: string;
  logo: string;
}
const Navbar = () => {
  const [organization, setOrganization] = useState<Organization>({
    
    name: "",
    logo: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/organization')
      .then(response => {
        setOrganization(response.data);
      })
      .catch(error => {
        console.error("Error fetching organizations", error);
      });
      
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <><header className="bg-black dark:bg-[#d5420b] flex justify-between items-center py-6 px-10 shadow-sm">
      <div className="flex items-center">
        <Link to="/">
        <img src={organization.logo} alt="ResuMaster Logo" className="w-10 h-10 md:w-12 md:h-12 mr-2" />      </Link>

        <h1 className="text-2xl font-bold text-[#d5420b]">Resu<span className="text-white">master</span></h1>
    </div><button onClick={toggleMenu} className="text-white md:hidden flex items-center justify-center w-10 h-10 md:w-auto md:h-auto">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" className="ml-2 md:ml-0" />
      </button><nav className={`md:flex justify-center ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 md:justify-center text-white md:items-center">
        <div className="flex items-center gap-4">
      <Dropdown label="Tools" size="sm" color="black">
        <Dropdown.Item>
          <Link to="/resume">Resume</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/cv">CV</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/biodata">Bio Data</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/cover-letter">Cover Letter</Link>
        </Dropdown.Item>
      </Dropdown>
  
    </div>
          <li className="md:w-1/3 md:mx-auto">
            <Link to="/pricing" className="hover:text-[rgb(213,66,11)] flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Pricing
            </Link>
          </li>
          <li className="md:w-1/3 md:mx-auto">
            <Link to="/faq" className="hover:text-[#d5420b] flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Navbar;

