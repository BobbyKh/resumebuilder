import * as AOS from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import { skills } from "../data/skill";
import { hobbies } from '../data/Hobbies';
import Select from "react-select";
import { languages } from "../data/Language";
// @ts-ignore
import html2pdf from "html2pdf.js";
import axios from 'axios';
import { faUserCircle, faBriefcase, faEnvelope, faPhone, faGlobe, faMapMarkerAlt, faInfoCircle, faLightbulb, faLanguage, faHeart, faTrophy, faPlusCircle, faGraduationCap, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConnectdevelop, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

AOS.init();


interface Resume {

  name: string;
  email: string;
  phone: string;
  position: string;
  description: string;
  address: string;
  skill: string[];
  education: [
    { college: string; degree: string; university: string; from_date: string; to_date: string; }[]
    //format: "YYYY-MM-DD"

  ];
  work_experience: string;
  work_job_title: string;
  work_company_name: string;
  work_from_date: string;
  work_to_date: string;
  work_description: string;
  work_achievements: string;
  achievement: string;
  hobbies: string[];
  reference: string;
  certification: string;

}
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
    education:[
      { 
        college : "",
        degree: "",
        university: "",
        from_date: "",
        to_date: "",
        
      }
    ],
    work_experience: "",
    work_job_title: "",
    work_company_name: "",
    work_from_date: "",
    work_to_date: "",
    work_description: "",
    work_achievements: "",
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
  const [error, setError] = useState<string>("");
  const [, setresumeData] = useState<Resume | null>(null);
  const [, setTemplate] = useState<Template | null>(null);




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
        console.log(data);
      } catch (error) {
        console.error("Error fetching template:", error);
      }
    };

    const fetchTemplate = async () => {
      try {
        setError("");

      

        const response = await fetch(`http://127.0.0.1:8000/api/template/${templateId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch template.");
        }

        const data = await response.json();
        setHtml(data.html || "");
      } catch (err: any) {
        setError(err.message || "An error occurred.");
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
      skill: formData.skill.map((option: any) => `
        <span class="border p-1 rounded">${option.value}</span>
      `).join(''),
      language: formData.language.map((option: any) => `
        <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${option.value}</span>
      `).join(''),
      hobbies: formData.hobbies.map((option: any) => `
        <div class="p-2 border rounded shadow-sm mb-2">
          <span class="font-medium">${option.value}</span>
        </div>
      `).join(''),
      education: `<ul>${formData.education.map((option: any) => `
        <section class="mb-6">
  <div class="p-4 border rounded shadow-sm mb-4">
    <ul>
      <li class="flex items-center mb-2">
        <i class="fas fa-university text-gray-500 mr-2"></i>
        <strong class="font-medium">College:</strong> ${option.college}
      </li>
      <li class="flex items-center mb-2">
        <i class="fas fa-graduation-cap text-gray-500 mr-2"></i>
        <strong class="font-medium">Degree:</strong> ${option.degree}
      </li>
      <li class="flex items-center mb-2">
        <i class="fas fa-calendar-alt text-gray-500 mr-2"></i>
        <strong class="font-medium">From Date:</strong> ${option.from_date}
      </li>
      <li class="flex items-center mb-2">
        <i class="fas fa-calendar-alt text-gray-500 mr-2"></i>
        <strong class="font-medium">To Date:</strong> ${option.to_date}
      </li>
      <li class="flex items-center">
        <i class="fas fa-university text-gray-500 mr-2"></i>
        <strong class="font-medium">University:</strong> ${option.university}
      </li>
    </ul>
  </div>
</section>

      `).join('')}</ul>`
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

const [isGenerating, setIsGenerating] = useState(false);
const handleDownloadPdf = async () => {
  setIsGenerating(true);
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } finally {
    setIsGenerating(false);
  }


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
              .map((item) => `<li>${item}</li>`)
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
        <div className="container mx-auto px-4 mb-8 bg-white rounded-lg shadow-lg ">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="text-xl mr-2" />
            <h1 className="text-2xl font-bold">Personal Information</h1>
            
          </div>
        </div>
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
                    value={formData.description}
                    onChange={handleChange}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  ></textarea>
                </div>
              );
            }
            if (key == "education") {
              return (
                <div key={key} className=" mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  {formData.education.map((edu: any, index: number) => (
                    <div key={index} className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="block text-sm font-medium text-white">
                          College
                        </span>
                        <input
                          type="text"
                          value={edu.college}
                          onChange={(e) =>
                            setFormData((prevData: any) => ({
                              ...prevData,
                              education: prevData.education.map((edu2: any, i: number) =>
                                i === index ? { ...edu2, college: e.target.value } : edu2
                              ),
                            }))
                          }
                          name={`${key}[${index}].college`}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="College"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="block text-sm font-medium text-white">
                          Degree
                        </span>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) =>
                            setFormData((prevData: any) => ({
                              ...prevData,
                              education: prevData.education.map((edu2: any, i: number) =>
                                i === index ? { ...edu2, degree: e.target.value } : edu2
                              ),
                            }))
                          }
                          name={`${key}[${index}].degree`}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Degree"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="block text-sm font-medium text-white">
                          University
                        </span>
                        <input
                          type="text"
                          value={edu.university}
                          onChange={(e) =>
                            setFormData((prevData: any) => ({
                              ...prevData,
                              education: prevData.education.map((edu2: any, i: number) =>
                                i === index ? { ...edu2, university: e.target.value } : edu2
                              ),
                            }))
                          }
                          name={`${key}[${index}].university`}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="University"
                        />
                      </div>
                      <div className="mb-4">
                        <span className="block text-sm font-medium text-white">
                          From Date
                        </span>
                        <input
                          type="date"
                          value={edu.from_date}
                          onChange={(e) =>
                            setFormData((prevData: any) => ({
                              ...prevData,
                              education: prevData.education.map((edu2: any, i: number) =>
                                i === index ? { ...edu2, from_date: e.target.value } : edu2
                              ),
                            }))
                          }
                          name={`${key}[${index}].from_date`}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="From Date"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="block text-sm font-medium text-white">
                          To Date
                        </span>
                        <input
                          type="date"
                          value={edu.to_date}
                          onChange={(e) =>
                            setFormData((prevData: any) => ({
                              ...prevData,
                              education: prevData.education.map((edu2: any, i: number) =>
                                i === index ? { ...edu2, to_date: e.target.value } : edu2
                              ),
                            }))
                          }
                          name={`${key}[${index}].to_date`}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="To Date"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        education: [
                          ...prevData.education,
                          {
                            college: "",
                            degree: "",
                            university: "",
                            from_date: "",
                            to_date: "",
                          },
                        ],
                      }))
                    }
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Add
                  </button>
                </div>
              );
            }
            if (key === "work_from_date") {
              return (
                <div key={key} className="mb-6 col-span-2" >
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  <input
                    type="date"
                    value={formData.work_from_date}
                    onChange={handleChange}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  />
                </div>
              );
            }
            if (key === "work_to_date") {
              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  <input
                    type="date"
                    value={formData.work_to_date}
                    onChange={handleChange}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  />
                </div>
              );
            }
            if (key === "image") {

              return (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    {key.toUpperCase()}
                  </label>
                  <input
                    type="file"
                    onChange={handleChange}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  />
                </div>
              );
            }

            const isFileInput = key === "image";
            const inputType = isFileInput ? "file" : key === "email" ? "email" : key === "phone" ? "number" : "text";
            const Component = key === "description" ? "textarea" : isFileInput ? "input" : "input" 

            return (
              <div key={key} className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">{key.toUpperCase()}</label>
                {Component === "textarea" ? (
                  <textarea
                    value={formData[key as keyof typeof formData] as string}
                    onChange={(e) => handleChange(e)}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  ></textarea>
                ) : (
                  <input
                    {...(isFileInput && { accept: ".jpg, .jpeg, .png" })}
                    value={formData[key as keyof typeof formData] as string}
                    onChange={(e) => handleChange(e)}
                    type={inputType}
                    name={key}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  />
                )}
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
            <p className='text-black b-2'></p>
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
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" />
                Generating...
              </div>
            ) : (
              'Generate Now'
            )}
          </button>
        </div>
      </div>
    </div>
  )
};                            

export default BuildForm;

