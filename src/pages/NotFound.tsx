import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen" data-aos="fade-in">
            <div className="text-center" data-aos="zoom-in">
                <h1 className="text-9xl font-bold tracking-wide text-gray-700" data-aos="fade-up">404</h1>
                <p className="my-4 text-3xl" data-aos="fade-up">Page Not Found</p>
                <p className="text-xl" data-aos="fade-up">It looks like the page you are looking for does not exist.</p>
                <p className="text-xl" data-aos="fade-up">Make sure you typed the address correctly or try searching for the information you need.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 text-2xl font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg" data-aos="fade-up">
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound;

