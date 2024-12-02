import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'tailwindcss/tailwind.css';

AOS.init();

const submitResume = async (resume: Record<string, string>, templateId: string) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/documentfield", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...resume, template: templateId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting resume:", error);
    throw error;
  }
};

const BuildForm = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const [formData, setFormData] = useState({
    image : "",
    name: "",
    email: "",
    phone: "",
    description: "",
    address: "",
    skill: "",
    education: "",
    work_experience: "",
    achievement: "",
    hobbies: "",
    reference: "",
    certification: "",
    language: "",
    linkedin: "",
    github: "",
    website: "",
    position: "",
    project: "",
    extra: "",
  });
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [resumeData, setresumeData] = useState<string[]>([]); // Initialize as an empty array
  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/documentfield/${templateId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch template.");
        }
        console.log('templateId',templateId)
        const data = await response.json();
        setresumeData(data);
      } catch (error) {
        console.error("Error fetching template:", error);
      }
    };

    fetchDocumentData();
  }, [templateId]);

  useEffect(() => {
    const fetchTemplate = async () => {
      if (!templateId) {
        setError("Template ID is missing.");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(`http://127.0.0.1:8000/api/template/${templateId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch template.");
        }

        const data = await response.json();
        setHtml(data.html || "");
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [templateId]);

  

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([html], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "resume.html";
    document.body.appendChild(element);
    element.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, _p0: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!templateId) {
      setError("Template ID is missing.");
      return;
    }

    const resume = {
      ...formData,
      template_id: templateId,
    };

    try {
      const data = await submitResume(resume, templateId);
      console.log("Resume submitted:", data);
      updateTemplateWithData(data); // Update the HTML template with submitted data
    } catch (error) {
      setError("Failed to submit resume.");
    }
  };

  // Replace placeholders in template HTML with form data
  const updateTemplateWithData = (_data: Record<string, any>) => {
    let updatedHtml = html;
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof formData] || "";
      updatedHtml = updatedHtml.replace(new RegExp(`{{${key}}}`, 'g'), value); // Replace placeholders with data
    });
    setHtml(updatedHtml); // Update the HTML content
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-2/3 p-6">
        <h1 className="text-xl font-bold mb-6">Build Your Resume</h1>

        {/* Render input fields dynamically */}
        {Object.keys(formData).map((key) => {
          if (key === "image") {
            return (
              <div key={key} className="mb-6" data-aos="fade-up" >
                <label className="block text-sm font-medium text-gray-700 mb-2">IMAGE</label>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) =>
                    handleChange(e, key, {
                      target: {
                        value: URL.createObjectURL(e.target.files![0]),
                      },
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            );
          } else {
            return (
              <div key={key} className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">{key.toUpperCase()}</label>
                <input
                  type={key === "email" ? "email" : "text"}
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => handleChange(e, key, e)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${key}`}
                />
              </div>
            );
          }
        })}

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit Resume
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={handleDownload}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Download
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      <div className="w-1/3 bg-white shadow-md p-6">
        {loading ? (
          <p className="text-center text-blue-500">Loading Template...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div>
            {resumeData.length > 0 ? (
              resumeData.map((resume: any) => (
                <div key={resume.id} dangerouslySetInnerHTML={{ __html: resume.html }} />
              ))
            ) : (
              <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildForm;

