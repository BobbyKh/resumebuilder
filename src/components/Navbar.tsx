import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDollarSign, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Dropdown } from "flowbite-react";

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
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([]);

  const loggedInUserId = 1; // Provide a default or fetched loggedInUserId value

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    axios
      .get<Organization>("http://127.0.0.1:8000/api/organization")
      .then((response) => {
        setOrganization(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organizations:", error);
      });
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>("http://127.0.0.1:8000/api/users");
        const currentUser = response.data.find((u) => u.id === loggedInUserId);
        setUser(currentUser || null);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [loggedInUserId]);

  useEffect(() => {
    const fetchDocumentCategories = async () => {
      try {
        const response = await axios.get<DocumentCategory[]>("http://127.0.0.1:8000/api/documentcategory");
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

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");

    axios.post("http://127.0.0.1:8000/api/logout")
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });

    navigate("/login");
  };

  return (
    <header className="bg-black flex justify-between items-center py-6 px-10 shadow-sm">
      <div className="flex items-center ">
        <Link to="/">
       
          {organization ? (
            <img src={organization.logo} alt="ResuMaster Logo" className="w-10 h-10 md:w-12 md:h-12 mr-2" />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 mr-2 bg-gray-200 flex items-center justify-center">
              <span className="text-xs text-gray-500">Loading...</span>
            </div>
          )}
        </Link>
        <h1 className="text-2xl font-bold text-[#d5420b]">
          Resu<span className="text-white">master</span>
        </h1>
      </div>
      <button
        onClick={toggleMenu}
        className="text-white md:hidden flex items-center justify-center w-10 h-10 md:w-auto md:h-auto"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" className="ml-2 md:ml-0" />
      </button>
      <nav className={`md:flex justify-center flex-grow ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-white md:items-center mx-auto">
          <div className="flex items-center gap-4">
            <Dropdown label="Tools" className="text-lg font-semibold " color="black">
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
        <ul className="flex flex-col md:flex-row md:space-x-6 text-white md:items-center">
          {user ? (
            <li>
              <span className="text-white font-semibold">Hello, {user.username}</span>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="hover:shadow-md hover:animate-pulse hover:text-[#d5420b] flex items-center transition duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
          )}
          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="hover:shadow-md hover:animate-pulse hover:text-[#d5420b] flex items-center transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                to="/signup"
                className="hover:shadow-md hover:animate-pulse hover:text-[#d5420b] flex items-center transition duration-300 ease-in-out"
              >
                Signup
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

