import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./Token";
import API_URL from "../api/Api";

interface LoginProps {
  method: "login" | "register";
  setMethod: Dispatch<SetStateAction<"login" | "register">>;
  route: string;
}

const Login: React.FC<LoginProps> = ({ method, setMethod, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (method === 'register' && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        route,
        method === 'login'
          ? { username, password }
          : { username, password, email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (method === 'login') {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        navigate('/'); // Redirect to Google callback
        window.location.reload();
      } else {
        setSuccess('Registration successful. Please log in.');
        setTimeout(() => {
          setMethod('login'); // Switch to login after successful registration
        }, 2000);
      }
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setError('Invalid username or password.');
            break;
          case 401:
            setError('Unauthorized.');
            break;
          case 404:
            setError('User not found.');
            break;
          case 500:
            setError('Server error.');
            break;
          default:
            setError('An error occurred.');
        }
      } else {
        setError('Network error, something went wrong.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/accounts/google/login/`;
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#0b1320]">
      <div className="bg-gray-100 rounded-md p-4 max-w-md w-full mx-auto shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center">{method === 'register' ? 'Register' : 'Login'}</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <div className="flex flex-col">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              name="username"
              id="username"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {method === 'register' && (
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                name="email"
                id="email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              id="password"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {method === 'register' && (
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full shadow-md"
          >
            {method === 'register' ? 'Register' : 'Login'}
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-full shadow-md"
          >
            {method === 'register' ? 'Register with Google' : 'Login with Google'}
          </button>

          {method === 'login' ? (
            <p className="text-center">
              Don't have an account?{' '}
              <span
                onClick={() => setMethod('register')}
                className="cursor-pointer text-blue-500"
              >
                Register
              </span>
            </p>
          ) : (
            <p className="text-center">
              Already have an account?{' '}
              <span
                onClick={() => setMethod('login')}
                className="cursor-pointer text-blue-500"
              >
                Login
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
