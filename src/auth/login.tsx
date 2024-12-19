import AOS from "aos";
import "aos/dist/aos.css";
import { faGoogle, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const [loading] = useState(false);

  const handleFacebookLogin = () => {
    // Redirect to Facebook's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/facebook/login/";
  };
  const handleGoogleLogin = () => {
    // Get the session ID
    const sessionId = localStorage.getItem("sessionId");

    // Redirect to Google's login page via Django's auth route
    window.location.href = `http://127.0.0.1:8000/accounts/google/login/?session_id=${sessionId}`;
  };


  const handleLinkedInLogin = () => {
    // Redirect to LinkedIn's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/linkedin/login/";
  };

  const handleGithubLogin = () => {
    // Redirect to GitHub's login page via Django's auth route
    window.location.href = "http://127.0.0.1:8000/accounts/github/login/";
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
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full my-2 transition duration-500 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
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

