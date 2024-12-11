import AOS from "aos";
import "aos/dist/aos.css";
import { faGoogle, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'linkedin' | 'github') => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/social-login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: provider, // 'google', 'facebook', etc.
          token: "social_token_here", // yo kaha bata aauxa thabhayena
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to login. Please try again.");
      }
  
      const data = await response.json();
      // Store the token in localStorage or cookies
      localStorage.setItem("authToken", data.token);
  
      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };
  
  const handleGoogleLogin = () => {
    handleSocialLogin("google"); // Pass only the provider
  };
  
  const handleFacebookLogin = () => {
    handleSocialLogin("facebook");
  };
  
  const handleLinkedInLogin = () => {
    handleSocialLogin("linkedin");
  };
  
  const handleGithubLogin = () => {
    handleSocialLogin("github");
  };
  
  const darkMode = {
    backgroundColor: "#1A202C",
    color: "#fff",
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={darkMode}
    >
      <div
        className="bg-[#1A202C] border-2 border-[#d5420b] shadow-lg shadow-[#d5420b] rounded-lg p-8 m-4 max-w-md w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl text-[#d5420b] font-bold mb-6 text-center">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          Login Options
        </h2>
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
