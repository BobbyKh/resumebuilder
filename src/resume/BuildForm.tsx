import * as AOS from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import { skills as skillList, skills } from "../data/skill";
import { hobbies } from '../data/Hobbies';
import Select from "react-select";
import { languages } from "../data/Language";
// @ts-ignore
import html2pdf from "html2pdf.js";
import axios from 'axios';
import { faUserCircle, faBriefcase, faEnvelope, faPhone, faGlobe, faMapMarkerAlt, faInfoCircle, faLightbulb, faLanguage, faHeart, faTrophy, faPlusCircle, faGraduationCap, faCertificate, faIdCard, faChair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConnectdevelop, faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';

AOS.init();

const BuildForm = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
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

  interface Template {
    id: number;
    name: string;
    description: string;
    image : string;
    html: string;
  }
  
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [resumeData, setresumeData] = useState<string>("");
  const [template, setTemplate] = useState<Template | null>(null);

  useEffect(() => {
    if (!templateId) {
      setError("Template ID is missing.");
      return;
    }

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

    const fetchTemplate = async () => {
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

    fetchDocumentData();
    fetchTemplate();
  }, [templateId]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/template/${templateId}`).then((response) => {
      setTemplate(response.data);
    });
  }, [templateId]);

  const handleDownload = () => {
    const element = document.createElement('div');
    element.style.width = '210mm';
    element.style.minHeight = '297mm';
    element.style.margin = '0 auto';
    element.innerHTML = html;

    const options = {
      filename: `resume-${templateId}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf(element, options);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
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
      skill: formData.skill.map((option: any) => option.value),
      language: formData.language.map((option: any) => option.value),
      hobbies: formData.hobbies.map((option: any) => option.value),
    };

    try {
      const data = await submitResume(resume, templateId);
      console.log("Resume submitted:", data);
      navigate("/generateresume/" + templateId);
      updateTemplateWithData(data);
    } catch (error) {
      setError("Failed to submit resume.");
    }
  };

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

const handleDownloadPdf = () => {

    const element = document.createElement('div');
    element.style.width = '210mm';
    element.style.minHeight = '297mm';
    element.style.margin = '0 auto';
    element.innerHTML = html;

    const options = {
      filename: `resume-${templateId}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf(element, options).then(() => { 
        const link = document.createElement('a');
        link.href = `${options.filename}.pdf`;
        link.download = options.filename;
        link.click(); 
    }
    );
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

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black">
      <div className="w-full lg:w-2/3 p-6 lg:p-8">
        <h1 className="text-2xl text-[#d5420b] font-bold mb-8 text-center ">Build Your Resume</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => {
            if (key === "skill") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  <Select
                    isMulti
                    options={skills}
                    value={formData.skill}
                    onChange={(selectedOptions: any) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        skill: selectedOptions || [],
                      }))
                    }
                    className="w-full"
                    closeMenuOnSelect={false}
                    placeholder="Select your skills"
                    isClearable
                  />
                </div>
              );
            }
            if (key === "language") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  <Select
                    isMulti
                    options={languages}
                    value={formData.language}
                    onChange={(selectedOptions: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        language: selectedOptions || [],
                      }))
                    }
                    className="w-full"
                    closeMenuOnSelect={false}
                    placeholder="Select your languages"
                    isClearable
                  />
                </div>
              );
            }
            if (key === "hobbies") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  <Select
                    isMulti
                    options={hobbies}
                    value={formData.hobbies}
                    onChange={(selectedOptions: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        hobbies: selectedOptions || [],
                      }))
                    }
                    className="w-full"
                    closeMenuOnSelect={false}
                    placeholder="Select your hobbies"
                    isClearable
                  />
                </div>
              );
            }

            if (key === "description") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
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
                <label className="block text-sm font-medium text-white mb-2">{key.toUpperCase()}</label>
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

      <div className="w-full bg-gradient-to-r from-blue-50 to-gray-100 shadow-md shadow-lg p-6 lg:p-8 mt-6 lg:mt-0 rounded-lg">
        <div className="text-center bg-white border-b pb-4 mb-6 p-4 shadow-md shadow-lg rounded-lg ">
          <h1 className="text-3xl font-bold text-blue-700">
            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
            {formData.name || "Your Name"}
          </h1>
          <p className="text-lg text-black">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            {formData.position || "Your Position"}
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <p className="text-black">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              {formData.email || "you@example.com"}
            </p>
            <p className="text-black">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              {formData.phone || "123-456-7890"}
            </p>
            <p className="text-black">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              {formData.website || "yourwebsite.com"}
            </p>
          </div>
        </div>
        <div className="space-y-6">
          
          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Description
            </h2>
            <p className="text-black">{formData.description || "A brief description about yourself"}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-green-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Location
            </h2>
            <p className="text-black">{formData.address || "Your Address"}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-yellow-600">
              <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
              Skills
            </h2>
            <p className='text-black'>
              {formData.skill.length > 0 ? formData.skill.map((skill: any) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2" key={skill.value}>
                  {skill.label}
                </span>
              )) : "List your skills here"}
            </p>
          </section>
          <section>
            <h2 className='text-xl font-semibold mb-2 text-pink-600'>
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
              Education
            </h2>
            <p className='text-black b-2'>{formData.education || "Your education background"}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              <FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />
              Work Experience
            </h2>
            <p className="text-black">{formData.work_experience || "Your work experience"}</p>
          </section>
          <section>
            <h2 className='text-xl font-semibold mb-2 text-pink-600'>
              <FontAwesomeIcon icon={faIdCard} className="mr-2" />
              Certifications
            </h2>
            <p className='text-black'>{formData.certification || "Your certifications"} </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-teal-600">
              <FontAwesomeIcon icon={faLanguage} className="mr-2" />
              Language
            </h2>
            <p className="text-black">
              <div className="flex flex-wrap gap-2">
                {formData.language.length > 0 ? formData.language.map((lang: any) => (
                  <span className="border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-black" key={lang.value}>
                    {lang.label}
                  </span>
                )) : "List the languages you speak"}
              </div>
              </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-pink-600">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              Hobbies
            </h2>
            <p className='text-black flex flex-wrap gap-2'>
              {formData.hobbies.length > 0 ? formData.hobbies.map((hobby: any) => (
                <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-black" key={hobby.value}>
                  <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                  {hobby.label}
                </span>
              )) : "List your hobbies here"}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-indigo-600">
              <FontAwesomeIcon icon={faTrophy} className="mr-2" />
              Achievements
            </h2>
            <p className="text-black">{formData.achievement || "Your achievements"}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-red-600">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
              Additional Information
            </h2>
            <p className="text-black">{formData.extra || "Any additional information"}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              Social
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href={formData.github || ""} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-900">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Github
              </a>
              <a href={formData.linkedin || ""} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-900">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </section>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleDownloadPdf}
            className="px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  )
};                            

export default BuildForm;

