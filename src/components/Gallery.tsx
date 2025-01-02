import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";
import { Link } from "react-router-dom";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  image_6: string;
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/galleryimage`);
        setGalleryImages(response.data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };
    fetchGalleryImages();
  }, []);

  return (

    <div className="container mx-auto px-5 lg:px-32 lg:pt-12 bg-blue-100">
        {galleryImages.slice(0, 6).map((image) => (
          <div key={image.id} className="mb-4">
            <div className="relative overflow-hidden">
              <div className="px-6 py-4">
                <h1 className="text-4xl font-bold text-center text-blue-600">{image.title}</h1>
                <p className="mt-2 text-lg text-center text-gray-600 text-justify">{image.description}</p>
              </div>
            </div>
            
  <div  className="-m-1 flex flex-wrap p-8 md:-m-2">
    <div className="flex w-1/3 flex-wrap">
    
      <div className="w-full p-1 md:p-2 hover:scale-105 duration-300">
        <Link to='/login'>
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image.image_1} />
        </Link>
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:scale-105 duration-300">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image.image_2} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:scale-105 duration-300">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image.image_3} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:scale-105 duration-300">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image.image_4} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:scale-105 duration-300">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image.image_5} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:scale-105 duration-300">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image.image_6} />
      </div>
    </div>
  </div>
  </div>
        ))}
</div>
  );
};

export default Gallery;

