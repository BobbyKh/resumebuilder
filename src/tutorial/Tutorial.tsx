import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import API_URL from '../api/Api'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-200 relative">
      {/* <div className="absolute top-0 right-0 w-32 h-32 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://pa1.aminoapps.com/7029/973e6ac7b7e1d99ee0a296863f659302c08efd30r1-600-450_hq.gif)' }}></div> */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-800">
        Experts Videos
        </h2>
        <a href="/all-tutorials" className="text-blue-800 hover:underline">
        View All
        </a>
      </div>

      <Slider {...settings}>
        {tutorials.map((tutorial) => (
        <div key={tutorial.id} style={{ margin: '0 10px' }}>
          <div
          className="border border-blue-800 shadow-sm rounded-md hover:shadow-md cursor-pointer"
          
          style={{ margin: '0 10px', padding: '10px', height: '100%', maxHeight: '450px' }}
          >
          <div
            className="w-full overflow-hidden bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75"
            style={{ height: '250px' }}
          >
            <iframe
            src={tutorial.video_link}
            title={tutorial.title}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            />
          </div>
          <div className="mt-4 px-4 py-2">
            <h3 className="text-lg font-bold text-blue-800">
            {tutorial.title}
            </h3>
            <p className="mt-2 text-sm text-blue-800 truncate">
            {tutorial.description}
            </p>
          </div>
          </div>
        </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Tutorial
