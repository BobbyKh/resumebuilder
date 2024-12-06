import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface CoverTemplate {
  id: number;
  name: string;
  description: string;
  image: string;
}

const CoverTemplate = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop(); 
  const [templates, setTemplates] = useState<CoverTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fakeDataFetch = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fakeDataFetch() ;
  }, []);
  useEffect(() => {
    // Set the page title dynamically
    document.title = `${id} Templates - Resume Builder`;

    // Reset state on category change
    setLoading(true);
    setError("");

    // Fetch templates from the API
    axios
      .get(`http://127.0.0.1:8000/api/category/${id}/templates`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          // Update templates if data is valid
          setTemplates(
            response.data.map((template) => ({
              ...template,
              image: `http://127.0.0.1:8000${template.image}`,
               // Ensure full URL for images
            }))
          );
        } else {
          console.error("Unexpected response data:", response.data);
          setError("Failed to load templates. Please try again later.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching templates:", error);
        setError("Failed to load templates. Please try again later.");
        setLoading(false);
      });
  }, [id, pathname]); // Re-fetch when the ID or pathname changes

  return (
    
    <section className="bg-[#0b1320] rounded-lg shadow-lg p-6 md:p-10">
      {isLoading && <Loader />}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#d5420b]">Templates</h1>
        <p className="text-xl text-white mt-2">
          Choose a template that best suits your needs
        </p>
      </header>

      {/* Loading State */}
      {loading && <p className="text-center text-lg text-gray-600">Loading...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-600 text-lg">{error}</p>}

      {/* Empty State */}
      {!loading && templates.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No templates available for this category.
        </p>
      )}

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            className="template-card bg-[#0b1320] rounded-lg shadow-md border border-[#d5420b] p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-[#d5420b] hover:text-[#d5420b]"
          >
            <a
              data-fancybox="gallery"
              href={template.image}
              data-id={template.id}
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-40 sm:h-48 lg:h-56 object-cover mb-4 rounded"
              />
            </a>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-center font-semibold text-[#d5420b]">{template.name}</h2>
            <Link
              to={`/resume/editor/${template.id}`}
              className="btn block w-full text-center bg-[#d5420b] text-white py-2 mt-4 rounded-lg hover:bg-[#d5420b] hover:text-white"
            >
              Use Template
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverTemplate;
