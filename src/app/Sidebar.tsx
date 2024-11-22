import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile, faEnvelope, faUser, faSignOutAlt, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-0 left-0 z-50 bg-gray-800 text-white p-4"
        onClick={toggleSidebar}
      >
        {isOpen ? <FontAwesomeIcon icon={faSignOutAlt} /> : <FontAwesomeIcon icon={faHome} />}
      </button>
      <div
        className={`w-64 bg-gray-800 text-white p-4 fixed top-0 left-0 h-screen z-40 overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faDashboard} className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#">
              <FontAwesomeIcon icon={faFile} className="mr-2" />
              Resumes
            </a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Cover Letters
            </a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Bio Data
            </a>
          </li>
        </ul>
        <ul>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

