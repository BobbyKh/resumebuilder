import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios"
import { useEffect, useState } from "react"

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
                const response = await axios.get<ResumeTemplate[]>('http://127.0.0.1:8000/api/resume_template');
                setResumeTemplates(response.data.map((template) => {
                    return {
                        ...template,
                        image: `http://127.0.0.1:8000${template.image}`
                    }
                }));
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });

        fetchResumeTemplates()
    }, [])

    return (
        <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="zoom-in">
          <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
            <h2 className="text-base font-semibold text-indigo-600">Templates</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Choose your template
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" data-aos="fade-up">
            {resumeTemplates.map((resumeTemplate) => (
              <div key={resumeTemplate.id} className="group relative" data-aos="zoom-in">
                <div className="relative h-48 w-full rounded-lg bg-white shadow-lg transition duration-150 ease-in-out hover:shadow-2xl">
                  <img
                    src={resumeTemplate.image}
                    alt={resumeTemplate.name}
                    className="absolute inset-0 h-full w-full object-cover group-hover:opacity-75 transition-opacity duration-150 ease-in-out"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl font-bold text-white">{resumeTemplate.name}</p>
                  </div>
                </div>
                <button className="mt-2 w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition duration-150 ease-in-out">
                  Preview
                </button>
              </div>
            ))}
          </div>
        </div>
        </>
    )
}

export default Template

