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
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default number of slides
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // For devices below 1024px
            settings: {
              slidesToShow: 2, // Show 2 slides
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600, // For devices below 600px
            settings: {
              slidesToShow: 1, // Show 1 slide
              slidesToScroll: 1,
            },
          },
        ],
      };
      

    return (
        <>
            <div className="flex flex-col justify-center items-center p-2 md:p-8 bg-blue-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-4">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-4xl font-medium tracking-tight text-[#1e3a8a] sm:text-5xl">
                            <span className="text-white font-bold pb-8 mb-3">Choose your template</span>
                        </p>
                    </div>
                    <Slider {...settings}>
                        {resumeTemplates.map((resumeTemplate) => (
                            <div key={resumeTemplate.id} className="flex flex-col items-center mx-2 md:mx-4 gap-12 sm:gap-20 mt-3">
                                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src={resumeTemplate.image}
                                        alt={resumeTemplate.name}
                                        className="h-full w-full object-cover group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                        <p className="bg-blue-100 rounded-lg p-2 text-xl font-semibold text-blue-800 sm:text-2xl">{resumeTemplate.name}</p>
                                    </div>
                                </div>
                                <Link to={"/question"} className="mt-2 w-full">
                                    <button className="block w-full text-blue-900 bg-white font-bold py-2 rounded-lg hover:bg-gray-300 sm:text-lg">
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
