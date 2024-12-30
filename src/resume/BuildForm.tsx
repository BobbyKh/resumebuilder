import React, { useState } from "react";
import Select from "react-select";
import { ResumeTemplate1, ResumeTemplate2, ResumeTemplate3, } from "../templatedesign/Design";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faBookAtlas, faBookJournalWhills, faBookReader, faChevronDown, faList, faListSquares, faMinus, faPalette, faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ChevronDownIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import API_URL from "../api/Api";
import axios from "axios";

const BuildForm = () => {
  type FormFields = "fullname" | "position" | "email" | "phone" | "address" | "headline" | "website" | "summary" | "skills" | "education" | "hobbies";

  const [formData, setFormData] = useState<Record<FormFields, string | string[] | number | boolean | any>>({
    fullname: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    headline: "",
    website: "",
    summary: "",
    skills: [],
    education: [],
    hobbies: [],


  });

  const [experiences, setExperiences] = useState<any[]>([""]);
  const [educations, setEducations] = useState<any[]>([""]);
  const [awards, setAwards] = useState<any[]>([""]);
  const [certifications, setCertifications] = useState<any[]>([""]);
  const [references, setReferences] = useState<any[]>([""]);
  const [hobbies, setHobbies] = useState<any[]>([""]);
  const [projects, setProjects] = useState<any[]>([""]);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (selectedOptions: any) => {
    const skills = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setFormData((prev) => ({ ...prev, skills }));
  };

  const handleHobbiesChange = (selectedOptions: any) => {
    const hobbies = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setFormData((prev) => ({ ...prev, hobbies }));
  };

  const handleExperienceChange = (index: number, value: any) => {
    const newExperiences = [...experiences];
    newExperiences[index] = value;
    setExperiences(newExperiences);
  };

  const handleEducationChange = (index: number, value: any) => {
    const newEducations = [...educations];
    newEducations[index] = value;
    setEducations(newEducations);
  };

  const handleProjectChange = (index: number, value: any) => {
    const newProjects = [...projects];
    newProjects[index] = value;
    setProjects(newProjects);
  };


  const addExperience = () => setExperiences([...experiences, ""]);
  const removeExperience = (index: number) => setExperiences(experiences.filter((_, i) => i !== index));

  const addEducation = () => setEducations([...educations, ""]);
  const removeEducation = (index: number) => setEducations(educations.filter((_, i) => i !== index));

  const addProject = () => setProjects([...projects, ""]);
  const removeProject = (index: number) => setProjects(projects.filter((_, i) => i !== index));






  return ( 
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen  space-y-4 md:space-y-0">
      {/* Form Section */}
     
      <div className="w-full md:w-1/2 p-6 bg-white shadow-md overflow-y-auto ">
        <div className="flex flex-col md:flex-row justify-center md:justify-start p-6 mb-4 bg-white shadow-md rounded-lg gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <label htmlFor="Import Linkedin" className="text-lg flex justify-center items-center px-4 py-3 rounded border cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
              <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-blue-500 text-4xl md:text-6xl" />
              <h1 className="text-blue-500 text-base">Import Linkedin</h1>
            </label>
            <label htmlFor="UploadResume" className="text-lg flex justify-center items-center px-4 py-3 rounded border cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
              <FontAwesomeIcon icon={faUpload} className="mr-3 text-4xl md:text-6xl" />
              <h1 className="text-base">Upload Resume</h1>
            </label>
          </div>
        </div>
        <details className="bg-white shadow-md p-4 rounded" open>
          <summary className="text-xl font-semibold mb-3 border-b pb-2 flex items-center cursor-pointer">
            Personal Information
            <span className="ml-auto">
              <ChevronDownIcon className="h-6 w-6" />
            </span>
          </summary>
          <div className="flex flex-col gap-4 mt-4">
            {[
              { label: "Job Position", name: "position", type: "text", placeholder: "e.g. Software Engineer" },
              { label: "Full Name", name: "fullname", type: "text", placeholder: "e.g. John Doe" },
              { label: "Email", name: "email", type: "email", placeholder: "e.g. johndoe@example.com" },
              { label: "Phone", name: "phone", type: "tel", placeholder: "e.g. 123-456-7890" },
              { label: "Address", name: "address", type: "text", placeholder: "e.g. 123 Main St, Anytown, USA" },
              { label: "Headline", name: "headline", type: "text", placeholder: "e.g. Experienced Software Engineer" },
              { label: "Website", name: "website", type: "url", placeholder: "e.g. https://example.com" },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label className="block text-sm font-medium mb-1 text-gray-700">{field.label}</label>
                <input
                  value={formData[field.name as FormFields] as string}
                  name={field.name}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Summary</label>
              <textarea
                name="summary"
                value={formData.summary as string}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
          </div>
        </details>
        <details className="bg-white shadow-md p-4 rounded mt-4">
          <summary className="flex items-center justify-between text-lg font-semibold border-b pb-2 cursor-pointer">
            Education
            <div className="ml-auto flex space-x-2">
              <button onClick={addEducation} className="p-1 rounded hover:bg-gray-200 border">
                <PlusIcon className="h-6 w-6" />
              </button>
              <span className="p-1 rounded hover:bg-gray-200 border">
                <ChevronDownIcon className="h-6 w-6" />
              </span>
            </div>
          </summary>
          <div className="mt-4 mb-4 ">
            {educations.map((education, index) => (
              <div key={index} className="mb-2 flex flex-col border-2 bg-gray-100 rounded-lg p-4">
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Institution</label>
                  <input
                    value={education.institution}
                    onChange={(e) => handleEducationChange(index, { ...education, institution: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="e.g. University of California, Berkeley"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Degree</label>
                  <input
                    value={education.degree}
                    onChange={(e) => handleEducationChange(index, { ...education, degree: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="e.g. Bachelor of Science in Computer Science"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Start Date</label>
                  <input
                    value={education.startDate}
                    onChange={(e) => handleEducationChange(index, { ...education, startDate: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
                  <input
                    value={education.endDate}
                    onChange={(e) => handleEducationChange(index, { ...education, endDate: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
                  <textarea
                    value={education.description}
                    onChange={(e) => handleEducationChange(index, { ...education, description: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center text-red-500 border-2 border-red-500 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded transition duration-150 ease-in-out"
                    onClick={() => removeEducation(index)}
                  >
                    <TrashIcon className="h-5 w-5 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </details>
        <details className="bg-white shadow-md p-4 rounded mt-4 " open>
          <summary className="text-lg font-bold border-b pb-2 flex items-center">Skills
          <div className="ml-auto flex space-x-2">
              <button  className="p-1 rounded hover:bg-gray-200 border">
                <PlusIcon className="h-6 w-6" />
              </button>
              <span className="p-1 rounded hover:bg-gray-200 border">
                <ChevronDownIcon className="h-6 w-6" />
              </span>
            </div>
          </summary>
          <div className="mt-4">
            <Select
              name="skills"
              isMulti
              value={(formData.skills as string[]).map(skill => ({ value: skill, label: skill }))}
              onChange={handleSkillsChange}
              options={[
                { value: "JavaScript", label: "JavaScript" },
                { value: "React", label: "React" },
                { value: "TypeScript", label: "TypeScript" },
                { value: "Node.js", label: "Node.js" },
                { value: "CSS", label: "CSS" },
                { value: "HTML", label: "HTML" },
              ]}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </details>
        <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
          <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
            Experience
            <div className="ml-auto flex space-x-2">
              <button onClick={addExperience} className="p-1 rounded hover:bg-gray-200 border">
                <PlusIcon className="h-6 w-6" />
              </button>
              <span className="p-1 rounded hover:bg-gray-200 border">
                <ChevronDownIcon className="h-6 w-6" />
              </span>
            </div>
          </summary>
          <div className="mt-4">
            {experiences.map((experience, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-50 shadow-sm animate-fade-in">
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Company</label>
                  <input
                    value={experience.company}
                    onChange={(e) => handleExperienceChange(index, { ...experience, company: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="e.g. Google"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Position</label>
                  <input
                    value={experience.position}
                    onChange={(e) => handleExperienceChange(index, { ...experience, position: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="e.g. Software Engineer"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Start Date</label>
                  <input
                    value={experience.startDate}
                    onChange={(e) => handleExperienceChange(index, { ...experience, startDate: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
                  <input
                    value={experience.endDate}
                    onChange={(e) => handleExperienceChange(index, { ...experience, endDate: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
                  <textarea
                    value={experience.description}
                    onChange={(e) => handleExperienceChange(index, { ...experience, description: e.target.value })}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center text-red-500 border-2 border-red-500 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded transition duration-150 ease-in-out"
                  onClick={() => removeExperience(index)}
                >
                  <TrashIcon className="h-5 w-5 mr-1" />
                </button>
              </div>
            ))}
         
          </div>
        </details>
        <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
          <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
            Projects
            <div className="ml-auto flex space-x-2">
              <button onClick={addProject} className="p-1 rounded hover:bg-gray-200 border">
                <PlusIcon className="h-6 w-6" />
              </button>
              <span className="p-1 rounded hover:bg-gray-200 border">
                <ChevronDownIcon className="h-6 w-6" />
              </span>
            </div>
          </summary>
          <div className="mt-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="mb-4 p-4 border rounded-lg bg-gray-50 shadow-sm animate-fade-in"
              >
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Project Name
                  </label>
                  <input
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, { ...project, name: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="e.g. Build a Personal Website"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, {
                        ...project,
                        description: e.target.value,
                      })
                    }
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="Brief project description"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Link
                  </label>
                  <input
                    value={project.link}
                    onChange={(e) =>
                      handleProjectChange(index, { ...project, link: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="e.g. https://example.com"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center text-red-500 border-2 border-red-500 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded transition duration-150 ease-in-out"
                  onClick={() => removeProject(index)}
                >
                  <TrashIcon className="h-5 w-5 mr-1" />
                  Remove
                </button>
              </div>
            ))}
         
          </div>
        </details>
        <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
          <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
            Hobbies
            <span className="ml-2 text-gray-500">
              <ChevronDownIcon className="h-6 w-6" />
            </span>
          </summary>
          <div className="mt-4">
            <Select
              name="hobbies"
              isMulti
              value={(formData.hobbies as string[]).map((hobby) => ({ value: hobby, label: hobby }))}
              onChange={handleHobbiesChange}
              options={[
                { value: "Reading", label: "Reading" },
                { value: "Writing", label: "Writing" },
                { value: "Photography", label: "Photography" },
                { value: "Traveling", label: "Traveling" },
                { value: "Cooking", label: "Cooking" },
                { value: "Gaming", label: "Gaming" },
              ]}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </details>



      </div>

      {/* Preview Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md p-4 rounded mt-6 md:mt-0 md:ml-6">
        <div className="">
          {selectedTemplate && (
            <div className={`resume-preview ${selectedTemplate}`}>

              {selectedTemplate === "template1" && (
                <ResumeTemplate1 {...formData} />
              )}
              {selectedTemplate === "template2" && (
                <ResumeTemplate2 {...formData} />
              )}
              {selectedTemplate === "template3" && (
                <ResumeTemplate3 {...formData} />
              )}
         
            </div>
          )}
        </div>

        {/* Template Selection */}
        <div className="templateview mt-6 mb-6 text-sm">
          <label className="block font-medium mb-1 text-gray-700">Select Template</label>
          <Slider {...settings}
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            className="template-slider"
          >
            {[1, 2, 3].map((num) => (
              <div
                key={`template${num}`}
                className={`p-1 border rounded cursor-pointer ${selectedTemplate === `template${num}` ? "ring-1 ring-blue-500" : ""}`}
                onClick={() => setSelectedTemplate(`template${num}`)}
              >
                <h3 className="font-bold">{`Template ${num}`}</h3>
                <ResumeTemplate1 formData={formData} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full justify-items-center  p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6 ">
          <div className="flex space-x-4">
            <button
              className="flex items-center border-2 hover:border-blue-800 rounded-md px-4 py-2"
              onClick={showTemplates}
            >
              <FontAwesomeIcon icon={faBookReader} className="h-4 w-4 mr-2" />
              Templates

            </button>
            <div className="relative">
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={selectFonts}

              >
                Select Font
                <option value="Arial">Arial</option>
                <option value="Calibri">Calibri</option>
                <option value="Courier New">Courier New</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </div>
            </div>
            <button
              className="flex items-center border-2 hover:border-green-800 rounded-md px-4 py-2"
            >
              <select
                className="w-full "
                onChange={fontSize}
              >

                <option value="10px">10px</option>
                <option value="12px">12px</option>
                <option value="14px">14px</option>
                <option value="16px">16px</option>
                <option value="18px">18px</option>
                <option value="20px">20px</option>
              </select>

            </button>
            <button
              className="flex items-center border-2 hover:border-red-800 rounded-md px-4 py-2"
              onClick={colorScheme}
            >
              <FontAwesomeIcon icon={faPalette} className="h-6 w-6 mr-2" />

            </button>
            <div className="relative">
              <button
                className="flex items-center border-2 hover:border-yellow-800 rounded-md px-4 py-2"
                onClick={() => {
                  const lineSpaceDropdown = document.querySelector('.line-space-dropdown');
                  if (lineSpaceDropdown) {
                    lineSpaceDropdown.classList.toggle('hidden');
                  }
                }}
              >
                <FontAwesomeIcon icon={faAlignCenter} className="h-6 w-6 mr-2" />
              </button>
              <div className="line-space-dropdown hidden absolute left-0 mb-2 bg-white rounded-md shadow-lg">
                <ul className="m-0 p-0">
                  <li className="px-4 py-2 hover:bg-gray-200" onClick={() => addLineSpace("single")}>1</li>
                  <li className="px-4 py-2 hover:bg-gray-200" onClick={() => addLineSpace("half")}>1.5</li>
                  <li className="px-4 py-2 hover:bg-gray-200" onClick={() => addLineSpace("double")}>2</li>
                </ul>
              </div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
};

export default BuildForm;

const selectFonts = () => {
  alert("Select Font")
}

const addLineSpace = (_lineSpace: string) => {
  alert("Add Line Space")
}
const fontSize = () => {

  alert("Font Size")
}
const showTemplates = () => {
  const templateView = document.querySelector('.templateview');
  if (templateView) {
    templateView.classList.toggle('hidden');
    if (templateView.classList.contains('hidden')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      templateView.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

const colorScheme = () => {
  alert("Color Scheme is coming soon")
}

