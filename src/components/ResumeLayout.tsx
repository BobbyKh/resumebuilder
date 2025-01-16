import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";

interface ResumeLayout {
  image_3: string | undefined;
  id: number;
  title: string;
  description: string;
  image_1: string;
  image_2: string;
}
const ResumeLayout = () => {
  const [resumeLayout, setResumeLayout] = useState<ResumeLayout[]>([]);

  useEffect(() => {
    const fetchResumeLayout = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/resumelayout`);
        setResumeLayout(response.data);
      } catch (error) {
        console.error('Error fetching ResumeLayout:', error);
      }
    };
    fetchResumeLayout();
  }, []);


  return (
    <div className="overflow-hidden bg-blue-800 p-8">
      <section className="mx-auto max-w-7xl">
        {resumeLayout.map((resume) => (
          <div
            key={resume.id}
            className="mb-8 flex flex-col justify-between md:mb-16 lg:flex-row lg:justify-between lg:items-center lg:space-x-8"
          >
            <div className="flex w-full flex-col justify-center text-center md:w-1/2 lg:w-2/5">
              <h1 className="font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                {resume.title}
              </h1>
              <p className="max-w-md mx-auto  text-white text-center md:text-left md:mx-0">
                {resume.description}
              </p>
            </div>

            <div className="flex w-full md:w-1/2 lg:w-3/5 lg:flex-row lg:space-x-4 lg:mt-0 mt-8 md:mt-0">
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full lg:w-1/2">
                <img
                  src={resume.image_1}
                  loading="lazy"
                  alt="Resume Image 1"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full lg:w-1/2">
                <img
                  src={resume.image_2}
                  loading="lazy"
                  alt="Resume Image 2"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
};


export default ResumeLayout