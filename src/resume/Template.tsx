import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

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
                const response = await axios.get<ResumeTemplate[]>('http://127.0.0.1:8000/api/template');
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

    return (
        <>
        <div className='bg-[#0b1320] min-h-screen flex flex-col justify-center items-center p-4' data-aos="fade-down" data-aos-duration="1500" data-aos-once="false">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-4" data-aos="zoom-in">
          <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
            <p className="mt-2 text-4xl font-medium tracking-tight text-[#d5420b] sm:text-5xl">
              <span className="text-white">Choose your </span>template
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" data-aos="fade-up">
            {resumeTemplates.map((resumeTemplate) => (
              <div key={resumeTemplate.id} className="group relative" data-aos="zoom-in">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-[#d5420b] shadow-lg transition duration-150 ease-in-out hover:shadow-2xl">
                  <img
                    src= {resumeTemplate.image}
                    alt={resumeTemplate.name}
                    className="h-auto w-full group-hover:opacity-75 transition-opacity duration-150 ease-in-out"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-in-out group-hover:border-2 group-hover:border-white group-hover:border-dashed">
                    <p className="text-3xl font-bold text-white">{resumeTemplate.name}</p>
                  </div>
                </div>
              
              <Link to={`/resume/${resumeTemplate.id}`}>

                <button className="mt-4 block w-full text-white bg-[#d5420b] font-bold py-2 rounded-lg hover:bg-red-600 transition duration-150 ease-in-out" data-aos="zoom-in">
                   Use Template
                </button>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}

export default Template

