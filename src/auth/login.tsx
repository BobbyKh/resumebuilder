import AOS from "aos";
import "aos/dist/aos.css";
import { faGoogle, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const handleFacebookLogin = () => {
    // Redirect to Facebook's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/facebook/login/";
  }
  const handleGoogleLogin = () => {
    // Redirect to Google's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/google/login/";
  };
  
  const handleLinkedInLogin = () => {
    // Redirect to LinkedIn's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/linkedin/login/";
  };

  const handleGithubLogin = () => {
    // Redirect to GitHub's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/github/login/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="bg-white shadow-lg rounded-lg p-8 m-4 max-w-md w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login Options</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2 w-full transition duration-500 transform hover:scale-105"
          style={{ backgroundColor: "#4285F4" }}
          data-aos="zoom-in"
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Continue with Google
        </button>

        <button onClick={handleLinkedInLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2 w-full transition duration-500 transform hover:scale-105"
          style={{ backgroundColor: "#2867B2" }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          Continue with LinkedIn
        </button>
        <button onClick={handleGithubLogin}
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full my-2 w-full transition duration-500 transform hover:scale-105"
          style={{ backgroundColor: "#333" }}
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Continue with GitHub
        </button>
        <button onClick={handleFacebookLogin}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full my-2 w-full transition duration-500 transform hover:scale-105"
          style={{ backgroundColor: "#4267B2" }}
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;

