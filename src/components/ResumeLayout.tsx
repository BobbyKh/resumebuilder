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

  


    return <div className="overflow-hidden min-h-screen bg-blue-800" >

             
  <section className="mx-auto max-w-screen-2xl px-8 md:px-8">
    {resumeLayout.map((resume) => (
      
      <div key={resume.id} className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="flex w-1/2 flex-col justify-center text-center ">
          <h1 className="font-bold text-white sm:text-5xl md:text-6xl text-center ">{resume.title}</h1>

          <p className="max-w-md leading-relaxed text-white text-justify text-center ml-8">{resume.description}</p>
        </div>

        <div className="flex w-1/2">
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-16 mr-8">
            <img src={resume.image_1} loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-fit object-center" />
          </div>
          

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-16">
            <img src={resume.image_2} loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-fit object-center" />
          </div>

      </div>
    </div> 
      
    ))}
       
  </section>



    </div>
};


export default ResumeLayout