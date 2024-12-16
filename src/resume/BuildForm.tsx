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
import { faPlusCircle, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API_URL from '../api/Api';

AOS.init();


interface Resume {
  imae: string;
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
  experience: [
    { job_title: string; company_name: string; from_date: string; to_date: string; description: string; achievements: string; }[]
    //format: "YYYY-MM-DD"
  ];
  achievement: [
    { title: string; description: string; }[]
  ];
  hobbies: string[];
  reference: string;
  certification: [
    { title:string , description:string , issued_date:string }[]
  ];
  project : [
    { title: string; description: string; link: string; }[]
  ]

}
const BuildForm = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image : "",
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
    experience: [
      {
        job_title: "",
        company_name: "",
        from_date: "",
        to_date: "",
        description: "",
        achievements: "",
      }
    ],
    achievement:[
      {
        title: "",
        description: "",
      
      }

    ],
    certification:[
      {
        title: "",
        description: "",
        issued_date: "",
      }
    ],
    project:[
      {
        title: "",
        description: "",
        link: "",
      }
    ],
    hobbies: [],
    reference: "",
   
    language: [],
    linkedin: "",
    github: "",
    website: "",
   
    extra: "",
    
  });

  interface Template {
    id: number;
    name: string;
    description: string;
    image : string;
    html: string;
    doc_cat: number
    template: string;
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
        const response = await fetch(`${API_URL}/api/documentfield/${templateId}`);  
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
        setTemplate(data);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      } 
    };

    fetchDocumentData();
    fetchTemplate();
  }, [templateId]);

  useEffect(() => {
    axios.get(`${API_URL}/api/template/${templateId}`).then((response) => {
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
    if (e.target.name === "image" && "files" in e.target) {
      const file = (e.target as HTMLInputElement).files![0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: base64String,
        }));
      };
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
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
      project: formData.project.map((option: any) => `
        <div class="mt-4">
          <h3 class="text-gray-800 font-bold">${option.title}</h3>
          <p class="text-gray-600">${option.description}</p>
          <p class="text-gray-600 mt-1">
            GitHub: <a href="${option.link}" class="text-blue-500" target="_blank" rel="noopener noreferrer">${option.link}</a>
          </p>
        </div>
      `).join(''),

      experience: formData.experience.map((option: any) => `
        <section class="mb-6">
  <div class="p-4 border rounded shadow-sm mb-4">
    <ul>
      <li class="flex items-center mb-2">
        <i class="fas fa-briefcase text-gray-500 mr-2"></i>
        <strong class="font-medium">Job Title:</strong> ${option.job_title}
      </li>
      <li class="flex items-center mb-2">
        <i class="fas fa-building text-gray-500 mr-2"></i>
        <strong class="font-medium">Company Name:</strong> ${option.company_name}
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
        <i class="fas fa-briefcase text-gray-500 mr-2"></i>
        <strong class="font-medium">Description:</strong> ${option.description}
      </li>
    </ul>

  </div>
</section>

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

      `).join('')}</ul>`,
    


    certification: formData.certification.map((option: any) => `
      <section class="mb-6">
        <div class="p-4 border rounded shadow-sm mb-4">
          <ul>
            <li class="flex items-center mb-2">
              <i class="fas fa-graduation-cap text-gray-500 mr-2"></i>
              <strong class="font-medium">Certification:</strong> ${option.title}
            </li>
            <li class="flex items-center mb-2">
              <i class="fas fa-calendar-alt text-gray-500 mr-2"></i>
              <strong class="font-medium">Description:</strong> ${option.description}
            </li>
            <li class="flex items-center mb-2">
              <i class="fas fa-calendar-alt text-gray-500 mr-2"></i>
              <strong class="font-medium">Issued Date:</strong> ${option.issued_date}
            </li>
          </ul>
        </div>
      </section>
    `).join(''),

    achievement: formData.achievement.map((option: any) => `
      <section class="mb-6">
        <div class="p-4 border rounded shadow-sm mb-4">
          <ul>
            <li class="flex items-center mb-2">
              <i class="fas fa-trophy text-gray-500 mr-2"></i>
              <strong class="font-medium">Achievement:</strong> ${option.title}
            </li>
            <li class="flex items-center mb-2">
              <i class="fas fa-calendar-alt text-gray-500 mr-2"></i>
              <strong class="font-medium">Description:</strong> ${option.description}
            </li>
          </ul>
        </div>
      </section>
    `).join(''),
      }


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
      const response = await fetch(`${API_URL}/api/documentfield`, {
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
      <div className="w-full p-6 lg:p-8">
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
                <div key={key} className="mb-8">
  <label className="block text-lg font-semibold text-gray-100 mb-4">
    {key.toUpperCase()}
  </label>
  <div className="space-y-6">
    {formData.education.map((edu: any, index: number) => (
      <div
        key={index}
        className="p-4 bg-gray-800 rounded-lg shadow-md space-y-4 border border-gray-700"
      >
         {/* Remove Education Button */}
         <div className="text-right">
          <button
            type="button"
            onClick={() =>
              setFormData((prevData: any) => ({
                ...prevData,
                education: prevData.education.filter(( _: any, i: number) => i !== index),
              }))
            }
            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* College */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              College
            </label>
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
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize"
              placeholder="Enter college name"
            />
          </div>

          {/* Degree */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Degree
            </label>
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
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize "
              placeholder="Enter degree name"
            />
          </div>

          {/* University */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              University
            </label>
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
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize"
              placeholder="Enter university name"
            />
          </div>

          {/* From Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 capitalize">
              From Date
            </label>
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
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* To Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              To Date
            </label>
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
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

       
      </div>
    ))}

    {/* Add Education Button */}
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
      className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <FontAwesomeIcon icon={faPlusCircle} className="w-5 h-5" />
    </button>
  </div>
</div>

              );
            } if (key == "experience") {
              return (
                <div key={key} className="mb-6">
  <label className="block text-lg font-semibold text-white mb-4">
    {key.toUpperCase()}
  </label>
  {formData.experience.map((exp: any, index: number) => (
    <div
      key={index}
      className="p-4 bg-gray-800 rounded-lg shadow-md mb-4 space-y-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">
        </h3>
        <button
          type="button"
          onClick={() =>
            setFormData((prevData: any) => ({
              ...prevData,
              experience: prevData.experience.filter((_: any, i: number) => i !== index),
            }))
          
        
          }
          className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Company Name
          </label>
          <input
            type="text"
            value={exp.company_name}
            onChange={(e) =>
              setFormData((prevData: any) => ({
                ...prevData,
                experience: prevData.experience.map((exp2: any, i: number) =>
                  i === index ? { ...exp2, company_name: e.target.value } : exp2
                ),
              }))
            }
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Job Title
          </label>
          <input
            type="text"
            value={exp.job_title}
            onChange={(e) =>
              setFormData((prevData: any) => ({
                ...prevData,
                experience: prevData.experience.map((exp2: any, i: number) =>
                  i === index ? { ...exp2, job_title: e.target.value } : exp2
                ),
              }))
            }
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job title"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Description
        </label>
        <textarea
          value={exp.description}
          onChange={(e) =>
            setFormData((prevData: any) => ({
              ...prevData,
              experience: prevData.experience.map((exp2: any, i: number) =>
                i === index ? { ...exp2, description: e.target.value } : exp2
              ),
            }))
          }
          className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a brief description of your role"
          rows={3}
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            From Date
          </label>
          <input
            type="date"
            value={exp.from_date}
            onChange={(e) =>
              setFormData((prevData: any) => ({
                ...prevData,
                experience: prevData.experience.map((exp2: any, i: number) =>
                  i === index ? { ...exp2, from_date: e.target.value } : exp2
                ),
              }))
            }
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            To Date
          </label>
          <input
            type="date"
            value={exp.to_date}
            onChange={(e) =>
              setFormData((prevData: any) => ({
                ...prevData,
                experience: prevData.experience.map((exp2: any, i: number) =>
                  i === index ? { ...exp2, to_date: e.target.value } : exp2
                ),
              }))
            }
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  ))}
  <button
    type="button"
    onClick={() =>
      setFormData((prevData: any) => ({
        ...prevData,
        experience: [
          ...prevData.experience,
          {
            company_name: "",
            job_title: "",
            from_date: "",
            to_date: "",
            description: "",
          },
        ],
      }))
    }
    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
  >
    <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
  </button>
</div>

              );
            }
            if (key === 'project') {
              return (
                <div key={key} className="mb-8">
                  <label className="block text-lg font-semibold text-gray-100 mb-4">
                    {key.toUpperCase()}
                  </label>
                  <div className="space-y-6">
                    {formData.project.map((project: any, index: number) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800 rounded-lg shadow-md space-y-4 border border-gray-700"
                      >
                        {/* Remove Project Button */}
                        <div className="text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                project: prevData.project.filter((_: any, i: number) => i !== index),
                              }))
                            }
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Title */}
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Title
                            </label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  project: prevData.project.map((proj: any, i: number) =>
                                    i === index ? { ...proj, title: e.target.value } : proj
                                  ),
                                }))
                              }
                              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter project title"
                            />
                          </div>

                          {/* Description */}
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Description
                            </label>
                            <textarea
                              value={project.description}
                              onChange={(e) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  project: prevData.project.map((proj: any, i: number) =>
                                    i === index ? { ...proj, description: e.target.value } : proj
                                  ),
                                }))
                              }
                              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter project description"
                              rows={3}
                            />
                          </div>

                          {/* Link */}
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Link
                            </label>
                            <input
                              type="text"
                              value={project.link}
                              onChange={(e) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  project: prevData.project.map((proj: any, i: number) =>
                                    i === index ? { ...proj, link: e.target.value } : proj
                                  ),
                                }))
                              }
                              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Project link"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add Project Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          project: [
                            ...prevData.project,
                            {
                              title: "",
                              description: "",
                              link: "",
                            },
                          ],
                        }))
                      }
                      className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <FontAwesomeIcon icon={faPlusCircle} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            }
 if (key === "certification") {
              return (
                <div key={key} className="mb-8">
                  <label className="block text-lg font-semibold text-gray-100 mb-4">
                    {key.toUpperCase()}
                  </label>

                  <div className="space-y-6">
                    {formData.certification.map((cert: any, index: number) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800 rounded-lg shadow-md space-y-4 border border-gray-700"
                      >
                        {/* Remove Certification Button */}
                        <div className="text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                certification: prevData.certification.filter((_: any, i: number) => i !== index),
                              }))
                            }
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            Title 
                            </label>
                            <input
                            type='text'
                            value={cert.title}
                            placeholder='Enter certification title'
                            onChange={(e) =>
                              setFormData((prevData: any) => ({
                                
                                ...prevData,
                                certification: prevData.certification.map((cert: any, i: number) =>
                                  i === index ? { ...cert, title: e.target.value } : cert
                                ),
                              }))
                            }
                            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Certification
                                <textarea 
                                value={cert.description}
                                placeholder='Enter certification description'
                                onChange={(e) =>
                                  setFormData((prevData: any) => ({
                                    ...prevData,
                                    certification: prevData.certification.map((cert: any, i: number) =>
                                      i === index ? { ...cert, description: e.target.value } : cert
                                    ),
                                  }))
                                }
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                            </label>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Issued Date
                            </label>
                            <input
                              type="date"
                              value={cert.issuedDate}
                              onChange={(e) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  certification: prevData.certification.map((cert: any, i: number) =>
                                    i === index ? { ...cert, issuedDate: e.target.value } : cert
                                  ),
                                }))
                              }
                              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                      </div>
                    ))}

                    {/* Add Certification Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          certification: [
                            ...prevData.certification,
                            {
                              title: "",
                              description: "",
                              issued_date: "",
                            },
                          ],
                        }))
                      }
                      className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <FontAwesomeIcon icon={faPlusCircle} className="w-5 h-5" />
                    </button>   
                  </div>
                </div>
              );
            }
             
            if (key === "achievement") {
              return (
                <div key={key} className="mb-8">
                  <label className="block text-lg font-semibold text-gray-100 mb-4">
                    {key.toUpperCase()}
                  </label>

                  <div className="space-y-6">
                    {formData.achievement.map((cert: any, index: number) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800 rounded-lg shadow-md space-y-4 border border-gray-700"
                      >
                        {/* Remove achievement Button */}
                        <div className="text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                achievement: prevData.achievement.filter((_: any, i: number) => i !== index),
                              }))
                            }
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            Title 
                            </label>
                            <input
                            type='text'
                            value={cert.title}
                            placeholder='Enter achievement title'
                            onChange={(e) =>
                              setFormData((prevData: any) => ({
                                
                                ...prevData,
                                achievement: prevData.achievement.map((cert: any, i: number) =>
                                  i === index ? { ...cert, title: e.target.value } : cert
                                ),
                              }))
                            }
                            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Description
                                <textarea 
                                value={cert.description}
                                placeholder='Enter achievement description'
                                onChange={(e) =>
                                  setFormData((prevData: any) => ({
                                    ...prevData,
                                    achievement: prevData.achievement.map((cert: any, i: number) =>
                                      i === index ? { ...cert, description: e.target.value } : cert
                                    ),
                                  }))
                                }
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                            </label>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Issued Date
                            </label>
                            <input
                              type="date"
                              value={cert.issuedDate}
                              onChange={(e) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  achievement: prevData.achievement.map((cert: any, i: number) =>
                                    i === index ? { ...cert, issuedDate: e.target.value } : cert
                                  ),
                                }))
                              }
                              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                      </div>
                    ))}

                    {/* Add achievement Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          achievement: [
                            ...prevData.achievement,
                            {
                              title: "",
                              description: "",
                            },
                          ],
                        }))
                      }
                      className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <FontAwesomeIcon icon={faPlusCircle} className="w-5 h-5" />
                    </button>   
                  </div>
                </div>
              );
            }
                
  
            if (key === "image") {

              return (
                <div key={key} className="mb-6 flex flex-col items-center">
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
                  {formData[key as keyof typeof formData] && (
                    <img
                      src={formData[key as keyof typeof formData] as string}
                      alt="Preview"
                      className="mt-4 max-w-xs"
                    />
                  )}
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
            GenerateResume
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
      {/* <div className="w-full bg-gradient-to-r from-blue-50 to-gray-100 shadow-md shadow-lg p-6 lg:p-8 mt-6 lg:mt-0 rounded-lg">
        
          

      </div> */}
    </div>
  )
};                            

export default BuildForm;

