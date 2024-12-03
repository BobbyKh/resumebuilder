import * as AOS from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import { skills as skillList, skills } from "../data/skill";
import { hobbies } from '../data/Hobbies';
import Select from "react-select";
import { languages } from "../data/Language";

AOS.init();

const submitResume = async (resume: Record<string, string | string[]>, templateId: string) => {
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
    position: "",
    description: "",
    address: "",
    skill: [],
    education: "",
    work_experience: "",
    achievement: "",
    hobbies: [],
    reference: "",
    certification: "",
    language: [],
    linkedin: "",
    github: "",
    website: "",
    project: "",
    extra: "",
  });
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [resumeData, setresumeData] = useState<string[]>([]);
  


  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/documentfield/${templateId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch template.");
        }
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
  element.download = `resume-${templateId}.html`; // Add templateId for uniqueness
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element); // Cleanup
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

console.log(formData.image)

  const handleSubmit = async () => {
    if (!templateId) {
      setError("Template ID is missing.");
      return;
    }

    const resume  = {
      ...formData,
      template_id: templateId,
      skill: formData.skill.map((option: any) => option.value),
      language: formData.language.map((option: any) => option.value),
      hobbies :formData.hobbies.map((option: any) => option.value),
    };

    try {
      const data = await submitResume(resume, templateId);
      console.log("Resume submitted:", data);
      updateTemplateWithData(data);
    } catch (error) {
      setError("Failed to submit resume.");
    }
  };

  const updateTemplateWithData = (_data: Record<string, string | string[]>) => {
    let updatedHtml = html;
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof formData] || "";
      updatedHtml = updatedHtml.replace(
        new RegExp(`{{${key}}}`, "g"),
        Array.isArray(value)
          ? value
              .map((item: { value: string } | string) => (typeof item === "string" ? item : item.value))
              .join(" ")
          : String(value)
      );
    });
  
    setHtml(updatedHtml);
  };
  

   skillList.map((skill) => skill.value);
   languages.map((language)=>language.value);
   hobbies.map((hobby)=>hobby.value);
   
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <div className="w-full lg:w-2/3 p-6 lg:p-8">
        <h1 className="text-2xl font-bold mb-8 text-center lg:text-left">Build Your Resume</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => {
            if (key === "skill") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key.toUpperCase()}
                  </label>
                  <Select
                    isMulti // Enables multi-select
                    options={skills} // Use your skills array as options
                    value={formData.skill} // Bind to the formData state
                    onChange={(selectedOptions: any) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        skill: selectedOptions || [], // Update selected options or reset to an empty array
                      }))
                    }
                    className="w-full"
                    closeMenuOnSelect={false} // Keep the dropdown open for multiple selections
                    placeholder="Select your skills"
                    isClearable // Allow clearing all selections
                  />
                </div>
              );
            }
            if (key === "language") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key.toUpperCase()}
                  </label>
                  <Select
                    isMulti // Enables multi-select
                    options={languages} // Use your skills array as options
                    value={formData.language} // Bind to the formData state
                    onChange={(selectedOptions: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        language: selectedOptions || [], // Update selected options or reset to an empty array
                      }))
                    }
                    className="w-full"
                    closeMenuOnSelect={false} // Keep the dropdown open for multiple selections
                    placeholder="Select your languages"
                    isClearable // Allow clearing all selections
                  />
                </div>
              );
            }
            if (key === "hobbies") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key.toUpperCase()}
                  </label>
                  <Select
                    isMulti // Enables multi-select
                    options={hobbies} // Use your skills array as options
                    value={formData.hobbies} // Bind to the formData state
                    onChange={(selectedOptions: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        hobbies: selectedOptions || [], // Update selected options or reset to an empty array
                      }))
                    }
                    className="w-full"
                    closeMenuOnSelect={false} // Keep the dropdown open for multiple selections
                    placeholder="Select your hobbies"
                    isClearable // Allow clearing all selections
                  />
                </div>
              );
            }

            if (key === "description") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key.toUpperCase()}
                  </label>
                  <textarea
                    value={formData[key as keyof typeof formData]}
                    onChange={handleChange}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  ></textarea>
                </div>
              );
            }
            

            const isFileInput = key === "image";
            const inputType = isFileInput ? "file" : key === "email" ? "email" : key === "phone" ? "number" : "text";
            const Component = key === "description" ? "textarea" : isFileInput ? "input" : "input";

            return (
              <div key={key} className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">{key.toUpperCase()}</label>
                <Component
                  {...(isFileInput && { accept: ".jpg, .jpeg, .png", onChange: (e) => handleChange(e) })}
                  {...(!isFileInput && { value: formData[key as keyof typeof formData], onChange: (e) => handleChange(e) })}
                  type={inputType}
                  name={key}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${key}`}
                />
              </div>
              
            );
          })}
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-4">
          <button
            onClick={handleSubmit}
            className="w-full lg:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit Resume
          </button>
          <button
            onClick={handleDownload}
            className="w-full lg:w-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Download
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      <div className="w-full lg:w-1/3 bg-white shadow-md p-6 lg:p-8 mt-6 lg:mt-0">
        {loading ? (
          <p className="text-center text-blue-500">Loading Template...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div>
            
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            {resumeData && (
              <div
                dangerouslySetInnerHTML={{ __html: html }}
                className="w-full h-screen overflow-y-scroll"
              />
            )
            }

            
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildForm;

