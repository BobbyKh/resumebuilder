import { Key } from 'react';
interface BioDataTemplateProps {
  marital_status: string;

  nationality: string;
  declaration: string;
  signature: string;
  religion: string;
  image: string;
  fullname: string;
  position: string;
  email: string;
  date_of_birth: string;
  father_name: string;
  phone: string;
  address: string;
  headline: string;
  website: string;
  summary: string;
  skills: string[];
  education: Array<{ degree: string; university: string; from_date: string; to_date: string }>;
  hobbies: string[];
  experience: Array<{
    company: string;
    position: string;
    from_date: string;
    to_date: string;
    description: string;
  }>;
  projects: Array<{ name: string; description: string; link: string }>;
  language: string[];
}



const BioDataTemplate1 = (formData: BioDataTemplateProps) => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200">
      {/* Header Section */}
      <div className="text-center mb-8">
        <img
          src={formData.image}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-900">{formData.fullname}</h1>
        <p className="text-lg text-gray-500">{formData.position}</p>
      </div>

      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
          Personal Information
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-700">
              <strong>Full Name:</strong> {formData.fullname}
            </p>
            <p className="text-gray-700">
              <strong>Date of Birth:</strong> {formData.date_of_birth}
            </p>
            <p className="text-gray-700">
              <strong>Nationality:</strong> {formData.nationality}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> {formData.address}
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
          Education
        </h2>
        <ul className="mt-4 space-y-4">
          {formData.education.map((education: any, index: Key | null | undefined) => (
            <li key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <p className="text-gray-700">
                <strong>Degree:</strong> {education.degree}
              </p>
              <p className="text-gray-700">
                <strong>University:</strong> {education.university}
              </p>
              <p className="text-gray-700">
                <strong>Year of Graduation:</strong> {education.to_date}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
          Experience
        </h2>
        <ul className="mt-4 space-y-4">
          {formData.experience.map((experience: any, index: Key | null | undefined) => (
            <li key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <p className="text-gray-700">
                <strong>Job Title:</strong> {experience.position}
              </p>
              <p className="text-gray-700">
                <strong>Company:</strong> {experience.company}
              </p>
              <p className="text-gray-700">
                <strong>Years:</strong>{" "}
                {`${new Date(experience.to_date).getFullYear() - new Date(experience.from_date).getFullYear()}`}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {formData.skills.map((skill: any, index: Key | null | undefined) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};



const BioDataTemplate2 = (formData: BioDataTemplateProps) => (
  <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg border border-gray-300">
    {/* Header Section */}
    <div className="text-center mb-8">
      {formData.image && (
        <img
          src={formData.image}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-blue-500" />
      )}
      <h1 className="text-3xl font-bold text-gray-800">{formData.fullname || "Name not provided"}</h1>
      {formData.position && (
        <p className="text-lg text-gray-500 mt-1">{formData.position}</p>
      )}
    </div>

    {/* Personal Information */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p>
          <strong className="font-medium text-gray-700">Father's Name:</strong> {formData.father_name || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Email:</strong> {formData.email || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Phone:</strong> {formData.phone || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Address:</strong> {formData.address || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Nationality:</strong> {formData.nationality || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Religion:</strong> {formData.religion || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Marital Status:</strong> {formData.marital_status || "Not provided"}
        </p>
        <p>
          <strong className="font-medium text-gray-700">Date of Birth:</strong> {formData.date_of_birth || "Not provided"}
        </p>
      </div>
    </div>

    {/* Summary Section */}
    {formData.summary && (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
          Summary
        </h2>
        <p className="text-gray-700 text-base leading-6">{formData.summary}</p>
      </div>
    )}

    {/* Experience Section */}
    {formData.experience && formData.experience.length > 0 && (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
          Experience
        </h2>
        <ul className="space-y-4">
          {formData.experience.map((item: any, index: Key) => (
            <li
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-800">{item.company}</h3>
              <p className="text-gray-600">{item.position}</p>
              <p className="mb-1 text-sm">
                {item.from_date} - {item.to_date} ({parseInt(item.to_date) - parseInt(item.from_date)} years)
              </p>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Education Section */}
    {formData.education && formData.education.length > 0 && (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
          Education
        </h2>
        <ul className="space-y-4">
          {formData.education.map((item: any, index: Key) => (
            <li
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-bold text-gray-800">{item.degree}</p>
              <p className="text-gray-600">{item.university}</p>
              <p className="text-sm text-gray-500">
                {item.from_date} - {item.to_date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Skills Section */}
    {formData.skills && formData.skills.length > 0 && (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
          Skills
        </h2>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
          {formData.skills.map((skill: string, index: number) => (
            <li key={index} className="text-base font-medium">
              {skill || "Skill not provided"}
            </li>
          ))}
        </ol>
      </div>
    )}

    {/* Declaration Section */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
        Declaration
      </h2>
      <p className="text-gray-700 text-base leading-6">
        I hereby declare that all the information provided above is true to the best of my knowledge and belief.
      </p>
    </div>

    {/* Signature Section */}
    {formData.signature && (
      <div className="text-right">
        <p className="text-gray-700 text-base">Signature:</p>
        <img
          src={formData.signature}
          alt="Signature"
          className="h-12 mt-2 mx-auto border-t border-gray-400"
        />
      </div>
    )}
  </div>
);


const BioDataTemplate3 = (formData: BioDataTemplateProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg border border-gray-300">
      {/* Header Section */}
      <div className="text-center mb-12">
        {formData.image && (
          <img
            src={formData.image}
            alt="Profile Picture"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-md border-2 border-gray-300"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-800">{formData.fullname || "Name not provided"}</h1>
        {formData.position && <p className="text-lg text-gray-500">{formData.position}</p>}
      </div>

      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><strong>Father's Name:</strong> {formData.father_name || "Not provided"}</p>
          <p><strong>Email:</strong> {formData.email || "Not provided"}</p>
          <p><strong>Phone:</strong> {formData.phone || "Not provided"}</p>
          <p><strong>Address:</strong> {formData.address || "Not provided"}</p>
          <p><strong>Nationality:</strong> {formData.nationality || "Not provided"}</p>
          <p><strong>Religion:</strong> {formData.religion || "Not provided"}</p>
          <p><strong>Marital Status:</strong> {formData.marital_status || "Not provided"}</p>
          <p><strong>Date of Birth:</strong> {formData.date_of_birth || "Not provided"}</p>
        </div>
      </div>

      {/* Summary Section */}
      {formData.summary && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Summary</h2>
          <p className="text-gray-700 leading-6">{formData.summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {formData.experience && formData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Experience</h2>
          <ul className="space-y-4">
            {formData.experience.map((item, index) => (
              <li key={index} className="border rounded p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-800">{item.position} at {item.company}</p>
                <p className="text-sm text-gray-600">{item.from_date} - {item.to_date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Education Section */}
      {formData.education && formData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Education</h2>
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Degree</th>
                <th className="border border-gray-300 p-2">Institution</th>
                <th className="border border-gray-300 p-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {formData.education.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{item.degree}</td>
                  <td className="border border-gray-300 p-2">{item.university}</td>
                  <td className="border border-gray-300 p-2">{item.from_date} - {item.to_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Skills Section */}
      {formData.skills && formData.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            {formData.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Declaration Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Declaration</h2>
        <p className="text-gray-700 leading-6">
          I hereby declare that all the information provided above is true to the best of my knowledge and belief.
        </p>
      </div>

      {/* Signature Section */}
      <div className="text-right">
        <p className="text-gray-700">Signature:</p>
        <div className="h-12 border-t border-gray-400 w-40 mt-2"></div>
      </div>
    </div>
  );
};

const BioDataTemplate4 = (formData: any): JSX.Element => {
  return (
    <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-lg p-10 mt-12 font-sans">
      {/* Header Section */}
      <div className="header flex items-center mb-10 border-b pb-6">
        {formData.image && (
          <img
            src={formData.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-blue-500 mr-6"
          />
        )}
        <div>
          <h1 className="text-4xl font-bold uppercase text-gray-800">{formData.fullname || "John Doe"}</h1>
          <p className="text-lg text-gray-600">{formData.position || "Position not provided"}</p>
          <div className="contact-info mt-2 text-sm text-gray-500">
            <span>Email: {formData.email || "Email not provided"}</span>
            <span className="mx-4">|</span>
            <span>Phone: {formData.phone || "Phone not provided"}</span>
          </div>
          {formData.website && (
            <a
              href={formData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              {formData.website}
            </a>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="about mb-10">
        <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">About Me</h2>
        <p className="text-gray-700 mt-4">{formData.summary || "Summary not provided"}</p>
      </div>

      {/* Experience Section */}
      {formData.experience?.length > 0 && (
        <div className="experience mb-10">
          <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">Experience</h2>
          {formData.experience.map((exp: any, index: number) => (
            <div key={index} className="mt-4">
              <h3 className="font-bold text-lg text-gray-800">{exp.position || "Position not provided"}</h3>
              <p className="text-sm text-gray-500">{exp.company || "Company not provided"}</p>
              <p className="text-sm text-gray-500">
                {exp.from_date || "Start Date"} - {exp.to_date || "End Date"}
              </p>
              <p className="text-gray-700 mt-2">{exp.description || "Description not provided"}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {formData.education?.length > 0 && (
        <div className="education mb-10">
          <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">Education</h2>
          {formData.education.map((edu: any, index: number) => (
            <div key={index} className="mt-4">
              <h3 className="font-bold text-lg text-gray-800">{edu.degree || "Degree not provided"}</h3>
              <p className="text-sm text-gray-500">{edu.university || "University not provided"}</p>
              <p className="text-sm text-gray-500">
                {edu.from_date || "Start Date"} - {edu.to_date || "End Date"}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {formData.skills?.length > 0 && (
        <div className="skills mb-10">
          <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">Skills</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            {formData.skills.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Hobbies Section */}
      {formData.hobbies?.length > 0 && (
        <div className="hobbies mb-10">
          <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">Hobbies</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            {formData.hobbies.map((hobby: string, index: number) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages Section */}
      {formData.language?.length > 0 && (
        <div className="languages mb-10">
          <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">Languages</h2>
          <p className="mt-4 text-gray-700">{formData.language.join(", ")}</p>
        </div>
      )}

      {/* Declaration Section */}
      {formData.declaration && (
        <div className="declaration mb-10">
          <h2 className="text-xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">Declaration</h2>
          <p className="text-gray-700 mt-4">{formData.declaration}</p>
        </div>
      )}

      {/* Signature Section */}
      {formData.signature && (
        <div className="signature text-right">
          <h2 className="text-sm text-gray-700">Signature:</h2>
          <img
            src={formData.signature}
            alt="Signature"
            className="inline-block mt-2 w-32 h-auto border border-gray-400"
          />
        </div>
      )}
    </div>
  );
};


const BioDataTemplate5 = (formData: any): JSX.Element => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-start border-b pb-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{formData.fullname || "Your Name"}</h1>
          <p className="text-lg text-gray-600 mt-2">{formData.position || "Your Position"}</p>
        </div>
        <div>
          {formData.image && (
            <img
              src={formData.image}
              alt="Profile Picture"
              className="w-32 h-32 rounded-full object-cover border-2 border-blue-500"
            />
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p><strong>Father's Name:</strong> {formData.father_name || "Not provided"}</p>
          <p><strong>Email:</strong> {formData.email || "Not provided"}</p>
          <p><strong>Phone:</strong> {formData.phone || "Not provided"}</p>
          <p><strong>Address:</strong> {formData.address || "Not provided"}</p>
          <p><strong>Nationality:</strong> {formData.nationality || "Not provided"}</p>
          <p><strong>Religion:</strong> {formData.religion || "Not provided"}</p>
          <p><strong>Marital Status:</strong> {formData.marital_status || "Not provided"}</p>
          <p><strong>Date of Birth:</strong> {formData.date_of_birth || "Not provided"}</p>
        </div>
      </div>

      {/* Summary Section */}
      {formData.summary && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Summary</h2>
          <p className="text-gray-700 leading-6">{formData.summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {formData.experience?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Experience</h2>
          <ul className="space-y-4">
            {formData.experience.map((item: any, index: number) => (
              <li key={index} className="border rounded p-4 shadow-sm">
                <p className="font-bold text-gray-800">{item.position} at {item.company}</p>
                <p className="text-gray-600">{item.from_date} - {item.to_date}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Education Section */}
      {formData.education?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Education</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Degree</th>
                <th className="border border-gray-300 px-4 py-2">Institution</th>
                <th className="border border-gray-300 px-4 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {formData.education.map((edu: any, index: number) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{edu.degree}</td>
                  <td className="border border-gray-300 px-4 py-2">{edu.university}</td>
                  <td className="border border-gray-300 px-4 py-2">{edu.from_date} - {edu.to_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Skills Section */}
      {formData.skills?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            {formData.skills.map((skill: string, index: number) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects Section */}
      {formData.projects?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Projects</h2>
          {formData.projects.map((project: any, index: number) => (
            <div key={index} className="border rounded p-4 shadow-sm mb-4">
              <p className="font-bold text-gray-800">{project.name}</p>
              <p className="text-gray-600">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 block">
                  {project.link}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Languages Section */}
      {formData.language?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Languages</h2>
          <ul className="list-none pl-0">
            {formData.language.map((lang: string, index: number) => (
              <li key={index} className="text-gray-700">{lang}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Declaration Section */}
      {formData.declaration && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Declaration</h2>
          <p className="text-gray-700">{formData.declaration}</p>
        </div>
      )}

      {/* Signature */}
      {formData.signature && (
        <div className="text-right mt-8">
          <p className="text-sm text-gray-700">Signature:</p>
          <img src={formData.signature} alt="Signature" className="w-32 mt-2 inline-block border border-gray-300" />
        </div>
      )}
    </div>
  );
};




export { BioDataTemplate1, BioDataTemplate2, BioDataTemplate3, BioDataTemplate4, BioDataTemplate5 };

