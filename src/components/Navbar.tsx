import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDollarSign, faQuestionCircle, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Dropdown } from "flowbite-react";
import API_URL from "../api/Api";

// interface SocialAccount {
//   platform: string;
//   username: string;
//   email: string;
//   avatar: string;
// }
interface Organization {
  name: string;
  logo: string;
}

interface User {
  id: number;
  username: string;
  email: string;
}

interface DocumentCategory {
  name: string;
  path: string;
  id: number;
}

const Navbar = (): JSX.Element => {
  const [] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  useEffect(() => {
    AOS.init();
  }, []);


  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get<Organization[]>(`${API_URL}/organization`);
        setOrganizations(response.data);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };
    fetchOrganizations();
  }, []);



  useEffect(() => {
    const fetchDocumentCategories = async () => {
      try {
        const response = await axios.get<DocumentCategory[]>(`${API_URL}/documentcategory`);
        setDocumentCategories(response.data);
      } catch (error) {
        console.error("Error fetching document categories:", error);
      }
    };
    fetchDocumentCategories();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black flex flex-col md:flex-row justify-between items-center py-6 px-10 shadow-sm">
      <div className="flex items-center justify-between w-full md:w-auto">
        {organizations.map((organization) => (
          <Link to="/" key={organization.name}>
            <h1 className="text-2xl font-bold text-[#d5420b] flex items-center">
              <img src={organization.logo} alt={organization.name} className="w-10 h-10 mr-2" />
              <span className="text-[#d5420b]">{organization.name}</span>
              {/* <span className="text-white">Maven</span> */}
            </h1>
          </Link>
        ))}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden flex items-center justify-center w-10 h-10"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" className="ml-2" />
        </button>
      </div>

      <nav className={`w-full md:flex md:justify-center md:flex-grow ${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-white md:items-center mx-auto mt-4 md:mt-0">
          <div className="flex items-center gap-4">
            <Dropdown label="Tools" className="text-lg font-semibold" color="black">
              {documentCategories.map((category) => (
                <Dropdown.Item key={category.name}>
                  <Link to={`/category/${category.id}`} className="hover:text-[rgb(213,66,11)]">
                    {category.name}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
          <li>
            <Link to="/pricing" className="hover:text-[rgb(213,66,11)] flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-[#d5420b] flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
              FAQ
            </Link>
          </li>
        </ul>
          <ul className="hidden md:flex md:space-x-6 text-white md:items-center">
            <li>
              <Link to="/login" className="hover:text-[rgb(213,66,11)] flex items-center">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-[rgb(213,66,11)] flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Signup
              </Link>
            </li>
          </ul>
       
      </nav>
    </header>
  );
};

export default Navbar;

