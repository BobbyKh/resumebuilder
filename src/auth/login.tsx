import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./Token";

interface LoginProps {
  method: 'login' | 'register';
  setMethod: (method: 'login' | 'register') => void;
  route: string;
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [, setLoading] = useState(false);
  const [method, setMethod] = useState<'login' | 'register'>('login');
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();
  const loginRoute = "http://127.0.0.1:8000/api/token/";
  const registerRoute = "http://127.0.0.1:8000/user/register/";



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
        method === 'login' ? loginRoute : registerRoute,
        {
          username,
          password,
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
    window.location.href = "http://127.0.0.1:8000/accounts/google/login/";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#0b1320] p-4">
      <div className="bg-white rounded-md p-6 max-w-md w-full mx-auto shadow-lg border-2 border-[#1e3a8a] hover:shadow-xl transition duration-300 ease-in-out">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-[#1e3a8a]">{method === 'register' ? 'Register' : 'Login'}</h2>
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
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
            />
          </div>

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
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
            />
          </div>
-
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
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-[#1e3a8a] hover:bg-[#2d4aad] text-white font-bold py-2 px-4 rounded-md w-full shadow-md"
          >
            {method === 'register' ? 'Register' : 'Login'}
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-[#d32f2f] hover:bg-[#f44336] text-white font-bold py-2 px-4 rounded-md w-full shadow-md"
          >
            {method === 'register' ? 'Register with Google' : 'Login with Google'}
          </button>

          {method === 'login' ? (
            <p className="text-center text-gray-700">
              Don't have an account?{' '}
              <span
                onClick={() => setMethod('register')}
                className="cursor-pointer text-[#1e3a8a]"
              >
                Register
              </span>
            </p>
          ) : (
            <p className="text-center text-gray-700">
              Already have an account?{' '}
              <span
                onClick={() => setMethod('login')}
                className="cursor-pointer text-[#1e3a8a]"
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

