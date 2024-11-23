import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Testimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-4xl font-bold text-center mb-4 hover:text-blue-500" data-aos="fade-up">Testimonial</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-blue-500" />
                        <p className="mt-4 text-gray-600">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                            lectus ac justo ultrices ultricies. Nullam in erat sed justo posuere
                            ultrices."
                        </p>
                        <p className="mt-6 text-gray-500">John Doe</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-blue-500" />
                        <p className="mt-4 text-gray-600">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                            lectus ac justo ultrices ultricies. Nullam in erat sed justo posuere
                            ultrices."
                        </p>
                        <p className="mt-6 text-gray-500">Jane Doe</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-blue-500" />
                        <p className="mt-4 text-gray-600">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                            lectus ac justo ultrices ultricies. Nullam in erat sed justo posuere
                            ultrices."
                        </p>
                        <p className="mt-6 text-gray-500">Bob Smith</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;