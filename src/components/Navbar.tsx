import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfoCircle, faBriefcase, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null); // Simulate user state

  useEffect(() => {
    AOS.init();
    // Simulate fetching user data
    setUser({ username: "JohnDoe" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      AOS.refresh();
    }
  }, [isOpen]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900" data-aos="fade-down">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-6 lg:px-8">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/" className="flex items-center">
            <img src="https://media.istockphoto.com/id/1495913506/vector/professional-innovative-initial-cv-logo-and-vc-logo-letter-cv-or-vc-minimal-elegant-monogram.jpg?s=612x612&w=0&k=20&c=T_CZ7GaNmB6t5mMqgwVv0YitUfwTcQL3XMnhDs94LjU=" alt="ResuMaster" className="w-8 h-8 mr-2" />
            <span className="text-2xl">ResuMaster</span>
          </Link>
          {user ? (
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-gray-900 dark:text-white" />
              <span className="text-gray-900 dark:text-white">{user.username}</span>
            </div>
          ) : (
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="w-5 h-5 p-3" />
            </button>
          )}
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" data-aos={isOpen ? 'fade-right' : ''}>
            <li>
              <Link to="/" className={`block py-2 px-3 md:p-0 ${isOpen ? 'text-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`block py-2 px-3 md:p-0 ${isOpen ? 'text-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5 mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={`block py-2 px-3 md:p-0 ${isOpen ? 'text-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 mr-2" />
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`block py-2 px-3 md:p-0 ${isOpen ? 'text-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

