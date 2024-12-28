import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../api/Api";

interface Testimonial {
    id: number;
    name: string;
    image: string;
    description: string;
}

const Testimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [testimonials, setTestimonials] = useState <Testimonial[]>([ ]);

    useEffect(() => {
        axios
            .get(`${API_URL}/api/testimonials`)
            .then((response) => {
                setTestimonials(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-[url('https://static.vietcv.io/top-page/dot-bg-top.svg')] bg-cover py-12">
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-4xl font-bold text-center mb-4 text-[#1e3a8a] hover:text-[#1e3a8a]" data-aos="fade-up" data-aos-duration="1000">Testimonials</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                    {testimonials.slice(0, 3).map((testimonial ) => (
                        <div key={testimonial.id} className="bg-white p-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(30,58,138,0.5)] rounded-lg border border-[#1e3a8a] hover:border-[#1e3a8a]" data-aos="fade-up" data-aos-duration="1000">
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-[#1e3a8a] hover:text-[#1e3a8a]" />
                            <a data-fancybox="gallery" href={testimonial.image} data-aos="fade-up" data-aos-duration="1000">
                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
                            </a>
                            <p className="mt-6 text-gray-500" data-aos="fade-up" data-aos-duration="1000">{testimonial.name}</p>
                            <p className="mt-2 text-[#1e3a8a] hover:text-[#1e3a8a]" data-aos="fade-up" data-aos-duration="1000">{testimonial.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    );
};

export default Testimonial;



