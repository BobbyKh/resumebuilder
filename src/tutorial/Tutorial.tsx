import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import API_URL from '../api/Api'

const Tutorial = () => {
  const [tutorials, setTutorials] = useState<any[]>([])

  useEffect(() => {
    fetch(`${API_URL}/api/tutorial`)
      .then(response => response.json())
      .then(data => setTutorials(data))
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="bg-[#0b1320]">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#d5420b]">
          Tutorials
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="group relative border border-[#d5420b] shadow-sm rounded-md hover:shadow-md transition duration-150 ease-in-out" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
              <div className="w-full overflow-hidden bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <iframe
                  src={tutorial.video_link}
                  title={tutorial.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 px-4 py-2">
                <h3 className="text-lg font-bold text-white">{tutorial.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tutorial

