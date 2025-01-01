import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";

interface ResumeLayout {
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

  


    return <div className="min-h-screen " >

             
  <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {resumeLayout.map((resume) => (
      
      <div key={resume.id} className="mb-8 flex flex-wrap justify-between md:mb-16" data-aos="fade-right" data-aos-duration="1000">
        
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48" data-aos="fade-left" data-aos-duration="1000">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">{resume.title}</h1>

        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">{resume.description}</p>
      </div>

      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3" data-aos="fade-right" data-aos-duration="1000">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src={resume.image_1} loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-fit object-center" />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src={resume.image_2} loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-fit object-center" />
        </div>
      </div>
    </div> 
      
    ))}
       
  </section>



    </div>
};


export default ResumeLayout