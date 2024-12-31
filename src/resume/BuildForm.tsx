import React, { useState } from "react";
import Select from "react-select";
<<<<<<< HEAD

=======
import { ResumeTemplate1, ResumeTemplate2, ResumeTemplate3, } from "../templatedesign/Design";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faBookReader, faChevronDown, faPalette, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ChevronDownIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
const BuildForm = () => {
  type FormFields = "givenName" | "familyName" | "email" | "phone" | "address" | "headline" | "website" | "summary" | "skills";

  const [formData, setFormData] = useState<Record<FormFields, string | string[]>>({
    givenName: "",
    familyName: "",
    email: "",
    phone: "",
    address: "",
    headline: "",
    website: "",
    summary: "",
    skills: [],
  });

<<<<<<< HEAD
  const [experiences, setExperiences] = useState<string[]>([""]);
  const [educations, setEducations] = useState<string[]>([""]);
=======
  const [experiences, setExperiences] = useState<any[]>([""]);
  const [educations, setEducations] = useState<any[]>([""]);
  // const [awards, setAwards] = useState<any[]>([""]);
  // const [certifications, setCertifications] = useState<any[]>([""]);
  // const [references, setReferences] = useState<any[]>([""]);
  // const [hobbies, setHobbies] = useState<any[]>([""]);
  const [projects, setProjects] = useState<any[]>([""]);
>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200)); // Max zoom level 200%
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 50)); // Min zoom level 50%
  };

<<<<<<< HEAD
=======


  const handleResumeDownload = () => {
      const element = document.getElementById("resume-preview");
      if (element) {
        html2canvas(element, {
          useCORS: true,
          logging: true,
          allowTaint: true,
          scale: 4,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png", 1.0);
          const pdf = new jsPDF("p", "mm", "a4");

          // Calculate dimensions to fit the PDF page
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
          pdf.save("resume.pdf");
        });
      }
    };
    
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };



>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (selectedOptions: any) => {
    const skills = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setFormData((prev) => ({ ...prev, skills }));
  };

<<<<<<< HEAD
  const handleExperienceChange = (index: number, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[index] = value;
    setExperiences(newExperiences);
  };

  const handleEducationChange = (index: number, value: string) => {
=======
  const handleHobbiesChange = (selectedOptions: any) => {
    const hobbies = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setFormData((prev) => ({ ...prev, hobbies }));
  };

  const handleExperienceChange = (index: number, updatedExperience: any) => {
    setExperiences((prev) =>
      prev.map((exp, i) => (i === index ? updatedExperience : exp))
    );
  };


  const handleEducationChange = (index: number, value: any) => {
>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
    const newEducations = [...educations];
    newEducations[index] = value;
    setEducations(newEducations);
  };

  const addExperience = () => setExperiences([...experiences, ""]);
  const removeExperience = (index: number) => setExperiences(experiences.filter((_, i) => i !== index));

  const addEducation = () => setEducations([...educations, ""]);
  const removeEducation = (index: number) => setEducations(educations.filter((_, i) => i !== index));

<<<<<<< HEAD
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-6">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Resume Form</h2>
        {[
          { label: "Given Name", name: "givenName", type: "text" },
          { label: "Family Name", name: "familyName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "tel" },
          { label: "Address", name: "address", type: "text" },
          { label: "Headline", name: "headline", type: "text" },
          { label: "Website", name: "website", type: "url" },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-gray-700">{field.label}</label>
            <input
              value={formData[field.name as FormFields] as string}
              name={field.name}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
=======
  const addProject = () => setProjects([...projects, ""]);
  const removeProject = (index: number) => setProjects(projects.filter((_, i) => i !== index));






  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen  space-y-4 md:space-y-0">
      {/* Form Section */}

      <div className="w-full md:w-1/2 p-6 bg-white shadow-md overflow-y-scroll" style={{ height: "calc(200vh - 12rem)" }} id="resume-form">
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
>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">Skills</label>
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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">Experience</label>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-2 flex items-center">
              <textarea
                value={experience}
                onChange={(e) => handleExperienceChange(index, e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={2}
              />
<<<<<<< HEAD
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="mt-2 text-blue-500"
          >
            Add Experience
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">Education</label>
          {educations.map((education, index) => (
            <div key={index} className="mb-2 flex items-center">
              <textarea
                value={education}
                onChange={(e) => handleEducationChange(index, e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={2}
              />
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addEducation}
            className="mt-2 text-blue-500"
          >
            Add Education
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Resume Preview</h2>
        <div className={`resume-preview ${selectedTemplate} p-4 border rounded bg-gray-50`}>
          {selectedTemplate === "template1" && (
            <div className="template1 canva-style p-6 bg-white shadow-lg rounded-lg">
              {/* Template 1 Design */}
              <div className="header flex items-center mb-4">
                <div className="avatar w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{`${formData.givenName} ${formData.familyName}`}</h1>
                  <p className="text-xl italic text-gray-700">{formData.headline}</p>
                </div>
              </div>
              <div className="contact-info mb-4">
                <p className="text-gray-600"><strong>Email:</strong> {formData.email}</p>
                <p className="text-gray-600"><strong>Phone:</strong> {formData.phone}</p>
                <p className="text-gray-600"><strong>Address:</strong> {formData.address}</p>
                <p className="text-gray-600"><strong>Website:</strong> {formData.website}</p>
              </div>
              <div className="section mb-4">
                <h3 className="text-xl font-bold text-gray-800">Summary</h3>
                <p className="text-gray-700">{formData.summary}</p>
              </div>
              <div className="section mb-4">
                <h3 className="text-xl font-bold text-gray-800">Experience</h3>
                {experiences.map((experience, index) => (
                  <p key={index} className="text-gray-700">{experience}</p>
                ))}
              </div>
              <div className="section mb-4">
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
                {educations.map((education, index) => (
                  <p key={index} className="text-gray-700">{education}</p>
                ))}
              </div>
              <div className="section">
                <h3 className="text-xl font-bold text-gray-800">Skills</h3>
                <p className="text-gray-700">{(formData.skills as string[]).join(", ")}</p>
=======
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
              <button className="p-1 rounded hover:bg-gray-200 border">
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


        {/* Resume Download Button */}
        <button
          type="button"
          className="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          onClick={handleResumeDownload}
        >
          Download Resume
        </button>

      </div>

      {/* Preview Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md p-4 rounded mt-6 md:mt-0 md:ml-6  ">
        <div className="">
        <div className="zoom-controls flex justify-end mb-4">
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 px-2 py-1 rounded mr-2"
                  onClick={handleZoomOut}
                >
                  -
                </button>
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 px-2 py-1 rounded"
                  onClick={handleZoomIn}
                >
                  +
                </button>
              </div>

          {selectedTemplate && (
            <div  id = "resume-preview"
              className={`resume-preview ${selectedTemplate}`}
              style={{
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: "center center",
                transition: "transform 0.2s ease-in-out",
                cursor: "zoom-in",
                overflow: "auto",
                
              }}
            >
              {/* Zoom Controls */}
          
              {/* Render Selected Template */}
              <div >
                {selectedTemplate === "template1" && <ResumeTemplate1 {...formData} />}
                {selectedTemplate === "template2" && <ResumeTemplate2 {...formData} />}
                {selectedTemplate === "template3" && <ResumeTemplate3 {...formData} />}
>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
              </div>
            </div>
          )}
          {/* Other templates... */}
        </div>

        {/* Template Selection */}
<<<<<<< HEAD
        <div className="mt-6">
          <label className="block text-sm font-medium mb-1 text-gray-700">Select Template</label>
          <div className="flex space-x-4 overflow-x-auto">
            <div
              className={`p-4 border rounded cursor-pointer flex-shrink-0 ${selectedTemplate === "template1" ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedTemplate("template1")}
=======
        <div className="templateview flex items-center justify-center">
          <Slider
            {...settings}
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            className="w-full max-h-[500px] overflow-hidden"
          >
            {[1, 2, 3].map((num) => (
              <div
                key={`template${num}`}
                className={`flex items-center justify-center cursor-pointer ${selectedTemplate === `template${num}` ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => setSelectedTemplate(`template${num}`)}
              >
                <div
                  className="w-full max-w-[768px] shadow-md bg-white rounded-md overflow-hidden"
                  style={{
                    aspectRatio: "8.5 / 11", // Maintain an aspect ratio of 8.5x11 inches for templates
                    transform: "scale(0.9)", // Scale down for preview
                    transformOrigin: "center center",
                  }}
                >
                  <h3 className="text-lg font-bold text-center mb-2">{`Template ${num}`}</h3>
                  {num === 1 && <ResumeTemplate1 {...formData} />}
                  {num === 2 && <ResumeTemplate2 {...formData} />}
                  {num === 3 && <ResumeTemplate3 {...formData} />}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full justify-items-center  p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
          <div className="flex space-x-4">
            <button
              className="flex items-center border-2 hover:border-blue-800 rounded-md px-4 py-2"
              onClick={showTemplates}
>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
            >
              <h3 className="text-lg font-bold">Template 1</h3>
              <div className="mt-2">
                <h4 className="text-md font-semibold">John Doe</h4>
                <p className="text-sm italic">Software Engineer</p>
                <p className="text-sm">john.doe@example.com</p>
                <p className="text-sm">123-456-7890</p>
              </div>
            </div>
            <div
              className={`p-4 border rounded cursor-pointer flex-shrink-0 ${selectedTemplate === "template2" ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedTemplate("template2")}
            >
              <h3 className="text-lg font-bold">Template 2</h3>
              <div className="mt-2">
                <h4 className="text-md font-semibold">John Doe</h4>
                <p className="text-sm italic">Software Engineer</p>
                <p className="text-sm">john.doe@example.com</p>
                <p className="text-sm">123-456-7890</p>
              </div>
            </div>
            <div
              className={`p-4 border rounded cursor-pointer flex-shrink-0 ${selectedTemplate === "template3" ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedTemplate("template3")}
            >
              <h3 className="text-lg font-bold">Template 3</h3>
              <div className="mt-2">
                <h4 className="text-md font-semibold">John Doe</h4>
                <p className="text-sm italic">Software Engineer</p>
                <p className="text-sm">john.doe@example.com</p>
                <p className="text-sm">123-456-7890</p>
              </div>
            </div>
            <div
              className={`p-4 border rounded cursor-pointer flex-shrink-0 ${selectedTemplate === "atsFriendly" ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedTemplate("atsFriendly")}
            >
              <h3 className="text-lg font-bold">ATS Friendly</h3>
              <div className="mt-2">
                <h4 className="text-md font-semibold">John Doe</h4>
                <p className="text-sm">Software Engineer</p>
                <p className="text-sm">john.doe@example.com</p>
                <p className="text-sm">123-456-7890</p>
              </div>

            </div>
          </div>
        </div>
        <button
          className="flex items-center border-2 hover:border-blue-800 rounded-md px-4 py-2"
          onClick={() => {
            const resume = document.querySelector('.resume');
            if (resume) {
              const link = document.createElement('a');
              link.setAttribute('href', `data:attachment/pdf,${encodeURIComponent(resume.outerHTML)}`);
              link.setAttribute('download', 'resume.pdf');
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          }}
        >
          <FontAwesomeIcon icon={faUpload} className="h-6 w-6 mr-2" />
          Download
        </button>
      </div>
    </div>
  );
};

export default BuildForm;
<<<<<<< HEAD
=======

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


>>>>>>> 02678a7c864991f3f86885d9ace4e1cfdc823451
