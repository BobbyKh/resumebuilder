import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";

interface HowitWorks {
  step_number: number;
  title: string;
  description: string;
  icon: string;
}
const HowitWorks = () => {
  const [howitworks, setHowitWorks] = useState<HowitWorks[]>([]);

  useEffect(() => {
    const fetchHowitWorks = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/howitworks`);
        setHowitWorks(response.data);
      } catch (error) {
        console.error('Error fetching HowitWorks:', error);
      }
    };
    fetchHowitWorks();
  }, []);
    
  
  return (
    <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-800">How It Works</h2>
                <p className="mt-4 text-lg text-gray-800">
                    Creating your professional resume has never been easier. Follow these simple steps.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howitworks.map((step) => (
                    <div key={step.step_number} className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                {step.step_number}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 text-center">{step.title}</h3>
                        <p className="mt-2 text-gray-800 text-justify">{step.description}</p>
                    </div>
                    
              
                ))}
            </div>
            
        </div>
        <div className="mt-16">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Watch How It Works</h3>
        <p className="mt-4 text-gray-600">
          See a quick demo of how you can create your resume in just a few minutes.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="relative w-full md:w-2/3 lg:w-1/2 aspect-video bg-gray-200 shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover" 
            src="https://www.youtube.com/embed/fNU4suUlCDA?si=ktWjfZ4ZaO9XUHpj"
            title="How It Works Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>

    
);
};

export default HowitWorks;