import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";

interface HowitWorks {
  id: number;
  title: string;
  description_1: string;
  description_2: string;
  description_3: string;
  description_4: string;
  video_url: string;
}
const HowitWorks = () => {
  const [howitworks, setHowitworks] = useState<HowitWorks[]>([]);

  useEffect(() => {
    const fetchHowitworks = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/howitworks`);
        setHowitworks(response.data);
      } catch (error) {
        console.error("Error fetching howitworks:", error);
      }
    };
    fetchHowitworks();
  }, []);

  return (
    <section className="text-gray-600 body-font pl-12 bg-blue-50">
  <h1 className="sm:text-4xl text-4xl font-bold text-blue-800 tracking-widest text-center md:text-5xl pt-10">
    How it Works
  </h1>
  <div className="container px-5 py-24 mx-auto">
    {howitworks.map((howitwork) => (
      <div key={howitwork.id} className="flex flex-col lg:flex-row w-full bg-blue-50  mb-8">
        <div className="lg:w-2/5 md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex relative mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="ml-4 text-left">
              <h2 className="font-medium title-font text-lg text-gray-900 mb-1">
                STEP 1
              </h2>
              <p className="leading-relaxed text-gray-800 text-justify">
                {howitwork.description_1}
              </p>
            </div>
          </div>
          <div className="flex relative mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="ml-4 text-left">
              <h2 className="font-medium title-font text-lg text-gray-900 mb-1">
                STEP 2
              </h2>
              <p className="leading-relaxed text-justify text-gray-800">
                {howitwork.description_2}
              </p>
            </div>
          </div>
          <div className="flex relative mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="ml-4 text-left">
              <h2 className="font-medium title-font text-lg text-gray-900 mb-1">
                STEP 3
              </h2>
              <p className="leading-relaxed text-justify text-gray-800">
                {howitwork.description_3}
              </p>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="ml-4 text-left">
              <h2 className="font-medium title-font text-lg text-gray-900 mb-1">
                STEP 4
              </h2>
              <p className="leading-relaxed text-justify text-gray-800">
                {howitwork.description_4}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 md:w-1/2 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={howitwork.video_url}
            title="step"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}
export default HowitWorks