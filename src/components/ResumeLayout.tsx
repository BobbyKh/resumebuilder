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
    <div className="relative bg-blue-800 p-8 md:p-12 lg:p-16">
      <div className="absolute inset-0 bg-no-repeat bg-center opacity-10" style={{ backgroundImage: `https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-achievements-improve-the-winter-holiday-background-image_187358.jpg` }}></div>
      <section className="relative container mx-auto p-8">
        {resumeLayout.map((resume) => (
          <div
            key={resume.id}
            className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 p-5"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="max-w-2xl mx-auto text-3xl font-bold text-white mb-3 md:text-4xl lg:text-5xl">
                {resume.title}
              </h1>
              <p className="max-w-md mx-auto text-white text-center md:text-left md:mx-0 mt-2 md:mt-4">
                {resume.description}
              </p>
            </div>

            <div className="flex w-full md:w-1/2 lg:w-3/5 flex-col md:flex-row lg:flex-row lg:space-x-4 lg:mt-0 mt-8 md:mt-0 md:order-1 lg:order-2">
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0">
                <img
                  src={resume.image_1}
                  loading="lazy"
                  alt="Resume Image 1"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full md:w-1/2 lg:w-1/2">
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