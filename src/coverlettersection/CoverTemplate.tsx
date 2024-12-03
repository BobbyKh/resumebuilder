import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <section className="bg-white rounded-lg shadow-lg p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">Templates</h1>
        <p className="text-xl text-gray-500 mt-2">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            className="template-card bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
            key={template.id}
          >
            <a
              data-fancybox="gallery"
              href={template.image}
              data-id={template.id}
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-auto mb-4 rounded"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-700">{template.name}</h2>
            <Link
              to={`/resume/editor/${template.id}`}
              className="btn block w-full text-center bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
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
