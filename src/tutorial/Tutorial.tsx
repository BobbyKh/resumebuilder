import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import API_URL from '../api/Api'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tutorial = () => {
  const [, setTutorials] = useState<any[]>([])

  useEffect(() => {
    fetch(`${API_URL}/api/tutorial`)
      .then(response => response.json())
      .then(data => setTutorials(data))
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className="bg-white py-16">
      
  <div className="container mx-auto px-4">
 
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-blue-800">Expert Videos</h2>
      <p className="text-lg text-gray-800 mt-4">Explore insights and expertise from professionals in the field.</p>
    </div>

  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     
      <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative pb-56">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/example1"
            title="Professional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6">
          <h3 className="text-xl text-justify font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
            Expert Insights on Technology
          </h3>
          <p className="text-gray-600 mt-2 text-justify">
            Learn about the latest advancements and strategies in the tech world.
          </p>
        </div>
      </div>

     
      <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative pb-56">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/example2"
            title="Professional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6">
          <h3 className="text-xl text-justify font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
            Leadership Skills for Success
          </h3>
          <p className="text-gray-600 mt-2 text-justify">
            Gain insights into effective leadership techniques and practices.
          </p>
        </div>
      </div>

      <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative pb-56">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/example3"
            title="Professional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Design Thinking in Action
          </h3>
          <p className="text-gray-600 mt-2">
            Discover how design thinking can revolutionize your projects.
          </p>
        </div>
      </div>
    </div>

  
    <div className="text-center mt-12">
      <a
        href="https://www.youtube.com/@managementloop/videos"
        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        View More Videos
      </a>
    </div>
  </div>
</div>
  );
};
export default Tutorial;
