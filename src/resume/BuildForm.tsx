import { useState } from 'react';



const BuildForm = () => {
  const [resume, setResume] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    education: '',
    work_experience: '',
    achievements: '',
    hobbies: '',
    references: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setResume((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Left Section: Form */}
      <div className="w-2/3 p-6">
        <h1 className="text-xl font-bold mb-6">Build Your Resume</h1>

        {/* Name and Contact Information */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={resume.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={resume.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., example@mail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={resume.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., +123 456 7890"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <textarea
            name="address"
            value={resume.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your address"
          />
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
          <textarea
            name="skills"
            value={resume.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="List your skills"
          />
        </div>

        {/* Education */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
          <textarea
            name="education"
            value={resume.education}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your educational background"
          />
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience</label>
          <textarea
            name="work_experience"
            value={resume.work_experience}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your work experience"
          />
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
          <textarea
            name="achievements"
            value={resume.achievements}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your achievements"
          />
        </div>

        {/* Hobbies */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Hobbies</label>
          <textarea
            name="hobbies"
            value={resume.hobbies}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your hobbies"
          />
        </div>

        {/* References */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">References</label>
          <textarea
            name="references"
            value={resume.references}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your references"
          />
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Download
          </button>
        </div>
      </div>

      {/* Right Section: Preview */}
      
      {/* <div className="w-1/3 bg-white shadow-md p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">{resume.name || "Your Name"}</h2>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Personal details</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">📧</span>
              <span>{resume.email || "Your email"}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">📞</span>
              <span>{resume.phone || "Your phone number"}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">🏠</span>
              <span>{resume.address || "Your address"}</span>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <p>{resume.skills || "Your skills"}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Education</h3>
          <p>{resume.education || "Your education details"}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Work Experience</h3>
          <p>{resume.work_experience || "Your work experience"}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Achievements</h3>
          <p>{resume.achievements || "Your achievements"}</p>
        </div>

        
      </div> */}
      </div>
  );
}
export default BuildForm;


