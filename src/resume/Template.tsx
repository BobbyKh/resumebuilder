import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import API_URL from '../api/Api';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ResumeTemplate {
    id: number;
    name: string;
    image: string;
    template: string;
    html: string;
    
}

const Template = () => {
    const [resumeTemplates, setResumeTemplates] = useState<ResumeTemplate[]>([]);

    useEffect(() => {
        const fetchResumeTemplates = async () => {
            try {
                const response = await axios.get<ResumeTemplate[]>(`${API_URL}/api/template`);
                setResumeTemplates(response.data.map((template) => {
                    return {
                        ...template,
                        image: `${template.image}`
                    }
                }));
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        AOS.init();

        fetchResumeTemplates()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px'
                }
            }
        ],
        // add gap between slide items
        slidesPerRow: 1,
        rowGap: 50
    };

    return (
        <>
            <div className='min-h-screen flex flex-col justify-center items-center p-2 bg-[url("https://cdn.enhancv.com/images/1920/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvc2tpbGxzLWJnLTVhZWMwM2UzZTJjZGY5N2FmYmM1YjkzMGY1OWZlYTAyLndlYnA~.webp")] bg-no-repeat bg-cover justify-items-center ' data-aos="fade-down" data-aos-duration="200" data-aos-once="false">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-4" data-aos="zoom-in">
                    <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
                        <p className="mt-2 text-4xl font-medium tracking-tight text-[#1e3a8a] sm:text-5xl">
                            <span className="text-[#1e3a8a]">Choose your </span>template
                        </p>
                    </div>
                    <Slider {...settings} arrows={true} className="md:px-8 justify-center">
                        {resumeTemplates.map((resumeTemplate) => (
                            <div key={resumeTemplate.id} className="group flex flex-col items-center my-4 mx-2 md:mx-4 gap-4" data-aos="zoom-in">
                                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src={resumeTemplate.image}
                                        alt={resumeTemplate.name}
                                        className="h-full w-full object-cover group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                        <p className="bg-white rounded-lg p-2 text-xl font-semibold text-gray-900">{resumeTemplate.name}</p>
                                    </div>
                                </div>
                                <Link to={`/resume/editor/${resumeTemplate.id}`} className="mt-2 w-full">
                                    <button className="block w-full text-blue-900 bg-white font-bold py-2 rounded-lg hover:bg-blue-200 transition duration-300 ease-in-out" data-aos="zoom-in">
                                        Use Template
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Template

