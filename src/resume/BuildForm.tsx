import React, { useState } from "react";
import Select from "react-select";

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

  const [experiences, setExperiences] = useState<string[]>([""]);
  const [educations, setEducations] = useState<string[]>([""]);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (selectedOptions: any) => {
    const skills = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setFormData((prev) => ({ ...prev, skills }));
  };

  const handleExperienceChange = (index: number, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[index] = value;
    setExperiences(newExperiences);
  };

  const handleEducationChange = (index: number, value: string) => {
    const newEducations = [...educations];
    newEducations[index] = value;
    setEducations(newEducations);
  };

  const addExperience = () => setExperiences([...experiences, ""]);
  const removeExperience = (index: number) => setExperiences(experiences.filter((_, i) => i !== index));

  const addEducation = () => setEducations([...educations, ""]);
  const removeEducation = (index: number) => setEducations(educations.filter((_, i) => i !== index));

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
              </div>
            </div>
          )}
          {/* Other templates... */}
        </div>

        {/* Template Selection */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-1 text-gray-700">Select Template</label>
          <div className="flex space-x-4 overflow-x-auto">
            <div
              className={`p-4 border rounded cursor-pointer flex-shrink-0 ${selectedTemplate === "template1" ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedTemplate("template1")}
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
      </div>
    </div>
  );
};

export default BuildForm;
