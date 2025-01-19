import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./Token";
import API_URL from "../api/Api";

const Login: React.FC<{ route: string }> = ({ route }) => {
  const [method, setMethod] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (route.includes("register")) {
      setMethod("register");
    } else {
      setMethod("login");
    }
  }, [route]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (method === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        route,
        method === "login"
          ? { email, password }
          : { email, username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        navigate("/");
        window.location.reload();
      } else {
        setSuccess("Registration successful! You can now log in.");
        setTimeout(() => {
          setMethod("login");
        }, 2000);
      }
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        setError(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        setError("Network error, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/accounts/google/login/`;
  };

  const handleLinkedInLogin = () => {
    window.location.href = `${API_URL}/accounts/linkedin/login/`;
  };

  const handleGitHubLogin = () => {
    window.location.href = `${API_URL}/accounts/github/login/`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-4">
          {method === "login" ? "Login to your account" : "Create an account"}
        </h2>
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-center text-sm mb-4">{success}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {method === "register" && (
            <h1>Kumar vsdk</h1>
            // <div>
            //   <input
            //     type="text"
            //     value={username}
            //     onChange={(e) => setUsername(e.target.value)}
            //     placeholder="Enter your username"
            //     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            //     required
            //   />
            // </div>
          )}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {method === "register" && (
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            {method === "login" && (
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 focus:ring-blue-500" />
                Remember me
              </label>
            )}
            {method === "login" && (
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {method === "login" ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-4 space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            {method === "login" ? "Continue with Google" : "Register with Google"}
          </button>

          <button
            onClick={handleLinkedInLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="LinkedIn Logo"
              className="w-5 h-5 mr-2"
            />
            {method === "login" ? "Continue with LinkedIn" : "Register with LinkedIn"}
          </button>

          <button
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub Logo"
              className="w-5 h-5 mr-2"
            />
            {method === "login" ? "Continue with GitHub" : "Register with GitHub"}
          </button>
        </div>
        <div className="mt-4 text-center">
          {method === "login" ? (
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                onClick={() => setMethod("register")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Create New Account
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => setMethod("login")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;


