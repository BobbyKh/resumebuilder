import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/Api";

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

  useEffect(() => {
    // Set the page title dynamically
    document.title = `${id} Templates - Resume Builder`;

    // Reset state on category change
    setLoading(true);
    setError("");

    // Fetch templates from the API
    axios
      .get(`${API_URL}/api/category/${id}/templates`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          // Update templates if data is valid
          setTemplates(
            response.data.map((template) => ({
              ...template,
              image: `${API_URL}${template.image}`,
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
    
    <section className="bg-initial rounded-lg shadow-lg p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-black">Templates</h1>
        <p className="text-xl text-blue-500 mt-2">
          Choose a template that best suits your needs
        </p>
      </header>

      {/* Loading State */}
      {loading && <p className="text-center text-xl text-blue-500">Loading...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-600 text-xl">{error}</p>}

      {/* Empty State */}
      {!loading && templates.length === 0 && (
        <p className="text-center text-blue-500 text-xl">
          No templates available for this category.
        </p>
      )}

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            className="template-card bg-white rounded-lg shadow-md border border-blue-500 p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500 hover:text-blue-500"
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
            <h2 className="text-lg sm:text-xl lg:text-2xl text-center font-semibold text-black">{template.name}</h2>
            <Link
              to={`/generateresume/${template.id}`}
              className="btn block w-full text-center bg-blue-500 text-black py-2 mt-4 rounded-lg hover:bg-blue-500 hover:text-black"
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


