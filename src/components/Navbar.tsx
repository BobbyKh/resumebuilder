import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faDollarSign,
  faUser,
  faSignOutAlt,
  faBookOpen,
  faPalette,
  faSearch,
  faLaptopCode,
  faBriefcase,
  faFileAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Dropdown } from "flowbite-react";
import API_URL from "../api/Api";
import { useAuthentication } from "../auth/Auth";

// interface SocialAccount {
//   platform: string;
//   username: string;
//   email: string;button in login

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
  const [documentCategories, setDocumentCategories] = useState<
    DocumentCategory[]
  >([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const { isAuthorized, logout } = useAuthentication();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get<Organization[]>(
          `${API_URL}/api/organization`
        );
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
        const response = await axios.get<DocumentCategory[]>(
          `${API_URL}/api/documentcategory`
        );
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
    <header className="bg-white flex flex-col md:flex-row justify-between items-center py-6 px-10 shadow-sm">
      <div className="flex items-center justify-between w-full md:w-auto">
        {organizations.map((organization) => (
          <div className="flex items-center space-x-2 ">
            <img src={organization.logo} alt={`${organization.name} logo`} className="h-10" />
            <Link to="/" key={organization.name} className="text-2xl font-bold text-black">
              <span className="text-blue-800">{organization.name}</span>
            </Link>
          </div>
        ))}
        <button
          onClick={toggleMenu}
          className="text-[#1a91f0] md:hidden flex items-center justify-center w-10 h-10"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="lg"
            className="ml-2"
          />
        </button>
      </div>

      <nav
        className={`w-full md:flex md:justify-center md:flex-grow font-sans ${
          isOpen ? "block" : "hidden"
        } md:block animate__animated animate__fadeInDown animate__faster`}
        style={{ fontFamily: "TT Commons, system-ui, sans-serif" }}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-black md:items-center mx-auto mt-4 md:mt-0">
          <div className="flex items-center gap-4 font-semibold">
            {/* Dropdown for Tools */}
            <Dropdown label="Tools" className="text-lg font-semibold" color="black">
              {documentCategories.map((category) => {
                const categoryMap: { [key: string]: string } = {
                  "resume": "/resume/editor",
                  "coverletter": "/cover/editor",
                  "bio data": "/biodata/editor"
                };

                const path = categoryMap[category.name.toLowerCase()] || "/";

                return (
                  <Dropdown.Item key={category.name}>
                    <Link
                      to={path}
                      className="hover:text-blue-500 font-sans uppercase"
                    >
                      {category.name}
                    </Link>
                  </Dropdown.Item>
                );
              })}
            </Dropdown>
          </div>
          

       <div className="relative group">
        {/* Trigger Button */}
        <Link
          to="/resume-templates"
          className="text-lg font-sans cursor-pointer group-hover:text-blue-500 flex items-center gap-2"
        >
          Resume Templates
        </Link>

        {/* Dropdown Menu */}
        <div className="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white z-50 w-max px- py-0 shadow-lg pointer-events-none group-hover:pointer-events-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Simple Template */}
            <Link
              to="/resume-templates/simple"
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg"
            >
              <FontAwesomeIcon icon={faFileAlt} className="text-3xl text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Simple</h3>
                <p className="text-sm text-gray-600">
                  Clean, timeless templates with a classic balanced structure. A perfect basic canvas.
                </p>
              </div>
            </Link>

            {/* Professional Template */}
            <Link
              to="/resume-templates/professional"
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg"
            >
              <FontAwesomeIcon icon={faBriefcase} className="text-3xl text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Professional</h3>
                <p className="text-sm text-gray-600">
                  Job-winning templates to showcase professionalism, dependability, and expertise.
                </p>
              </div>
            </Link>

            {/* Modern Template */}
            <Link
              to="/resume-templates/modern"
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg"
            >
              <FontAwesomeIcon icon={faLaptopCode} className="text-3xl text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Modern</h3>
                <p className="text-sm text-gray-600">
                  A current and stylish feel for forward-thinking candidates in innovative fields.
                </p>
              </div>
            </Link>

            {/* Creative Template */}
            <Link
              to="/resume-templates/creative"
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg"
            >
              <FontAwesomeIcon icon={faPalette} className="text-3xl text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Creative</h3>
                <p className="text-sm text-gray-600">
                  A bold, original feel perfect for artistic fields and contemporary companies.
                </p>
              </div>
            </Link>

            {/* ATS Template */}
            <Link
              to="/resume-templates/ats"
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg"
            >
              <FontAwesomeIcon icon={faSearch} className="text-3xl text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">ATS</h3>
                <p className="text-sm text-gray-600">
                  Optimize your resume and impress employers with these ATS-friendly designs.
                </p>
              </div>
            </Link>

            {/* Resume Builder */}
            <Link
              to="/resume-builder"
              className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-lg"
            >
              <FontAwesomeIcon icon={faTools} className="text-3xl text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Resume Builder</h3>
                <p className="text-sm text-gray-600">
                  Build powerful resumes in only 5 minutes with our easy-to-use Resume Builder.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>



          <li>
            <Link
              to="/pricing"
              className="hover:text-blue-500 flex items-center font-sans"
            >
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/tutorial"
              className="hover:text-blue-500 flex items-center font-sans"
            >
              <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
              Tutorials
            </Link>
          </li>
        </ul>
        <ul className="hidden md:flex md:space-x-6 text-black md:items-center">
          <li>
            {!isAuthorized ? (
              <Link
                to="/login"
                className="border border-blue-500 text-black bg-white px-4 py-2 rounded-md hover:bg-blue-100 flex items-center font-sans"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="hover:text-blue-500 flex items-center font-sans"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-blue-500 flex items-center font-sans"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
