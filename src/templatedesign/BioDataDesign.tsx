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



const BioDataTemplate2 = (formData: BioDataTemplateProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg border border-gray-300">
      {/* Header Section */}
      <div className="text-center mb-12">
        {formData.image && (
          <img
            src={formData.image}
            alt="Profile Picture"
            className="w-36 h-36 rounded-full mx-auto mb-6 object-cover shadow-md border-4 border-blue-500"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-800">{formData.fullname || "Name not provided"}</h1>
        {formData.position && (
          <p className="text-xl text-gray-500 mt-2">{formData.position}</p>
        )}
      </div>

      {/* Personal Information */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <strong className="font-medium text-gray-700">Religion</strong> {formData.religion || "Not provided"}
          </p>
          <p>
            <strong className="font-medium text-gray-700">Marital Status:</strong>{" "}
            {formData.marital_status || "Not provided"}
          </p>
          <p>
            <strong className="font-medium text-gray-700">Date of Birth:</strong>{" "}
            {formData.date_of_birth || "Not provided"}
          </p>
        </div>
      </div>

      {/* Summary Section */}
      {formData.summary && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Summary
          </h2>
          <p className="text-gray-700 text-lg leading-7">{formData.summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {formData.experience && formData.experience.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Experience
          </h2>
          <ul className="space-y-6">
            {formData.experience.map((item: any, index: Key) => (
              <li
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800">{item.company}</h3>
                <p className="text-gray-600">{item.position}</p>
                <p className="text-gray-500 text-sm">
                  {item.from_date} - {item.to_date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Education Section */}
      {formData.education && formData.education.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Education
          </h2>
          <ul className="space-y-6">
            {formData.education.map((item: any, index: Key) => (
              <li
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-xl font-bold text-gray-800">{item.degree}</p>
                <p className="text-gray-600">{item.university}</p>
                <p className="text-gray-500 text-sm">
                  {item.from_date} - {item.to_date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills Section */}
      {formData.skills && formData.skills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Skills
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            {formData.skills.map((skill: string, index: number) => (
              <li key={index} className="text-lg font-medium">
                {skill || "Skill not provided"}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Declaration Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
          Declaration
        </h2>
        <p className="text-gray-700 text-lg leading-7">
          I hereby declare that all the information provided above is true to the best of my knowledge and belief.
        </p>
      </div>

      {/* Signature Section */}
      <div className="text-right">
        <p className="text-gray-700 text-lg">Signature:</p>
        <div className="h-16 border-t border-gray-400 w-48 mx-auto mt-4"></div>
      </div>
    </div>
  );
};


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
    <div className="container mx-auto max-w-lg bg-white shadow-md rounded-lg p-10 mt-12">
      <div className="header mb-8">
        <div className="full-name text-4xl uppercase mb-2">
          <span className="first-name font-bold">{formData.fullname || "John Doe"}</span>
        </div>
        <div className="contact-info mb-5 text-sm text-gray-500">
          <span className="email">Email:</span>
          <span className="email-val ml-1">{formData.email || "Email not provided"}</span>
          <span className="separator inline-block mx-4 border-l-2 border-gray-400 h-5"></span>
          <span className="phone">Phone:</span>
          <span className="phone-val ml-1">{formData.phone || "Phone not provided"}</span>
        </div>
        <div className="about">
          <span className="position font-bold underline mr-2">{formData.position || "Position not provided"}</span><span className="separator inline-block mx-4 border-l-2 border-gray-400 h-5"></span>
          <span className="desc text-gray-700">
            {formData.summary || "Summary not provided"}
          </span>
        </div>
      </div>

      <div className="details space-y-10">
        <div className="section">
          <div className="section__title uppercase text-blue-500 font-bold tracking-wider mb-2">Experience</div>
          <div className="section__list space-y-10">
            <div className="section__list-item flex justify-between">
              <div className="left w-3/5">
                <div className="name font-bold">{formData.company || "Company not provided"}</div>
                <div className="addr text-sm text-gray-500">{formData.company_address || "Address not provided"}</div>
                <div className="duration text-sm text-gray-500">{formData.start_date || "Duration not provided"} - {formData.end_date || "Duration not provided"}</div>
              </div>
              <div className="right text-right w-2/5">
                <div className="name font-bold">{formData.position || "Position not provided"}</div>
                <div className="desc text-sm text-gray-700">{formData.description || "Description not provided"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title uppercase text-blue-500 font-bold tracking-wider mb-2">Education</div>
          <div className="section__list space-y-10">
            <div className="section__list-item flex justify-between">
              <div className="left w-3/5">
                <div className="name font-bold">{formData.degree || "Degree not provided"}</div>
                <div className="addr text-sm text-gray-500">San Fr, CA</div>
                <div className="duration text-sm text-gray-500">{formData.start_date || "Duration not provided"} - {formData.end_date || "Duration not provided"}</div>
              </div>
              <div className="right text-right w-2/5">
                <div className="desc text-sm text-gray-700">{formData.description || "Description not provided"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title uppercase text-blue-500 font-bold tracking-wider mb-2">Skills</div>
          <div className="skills space-y-4">
            <div className="skills__item flex justify-between">
              {formData.skills?.map((skill: any, index: Key) => (
                <div className="skills__item text-sm text-gray-700" key={index}>{skill}</div>
              ))}
            </div>

          </div>
        </div>


        <div className="section">
          <div className="section__title uppercase text-blue-500 font-bold tracking-wider mb-2">Interests</div>
          <div className="section__list">
            {formData.hobbies?.map((hobby: any) => (
              <div className="section__list-item text-sm text-gray-700" key={hobby}>{hobby}</div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}


const BioDataTemplate5 = (formData: any): JSX.Element => {
  return (

    <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">{formData.fullname || ""}</h1>
          <p className="text-lg mt-2">{formData.position || ""}</p>
        </div>
        <div>
          <img src="user.png" alt="Profile Picture" className="w-32 h-32 rounded-full hidden">
          </img></div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8 ">
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{formData.header || "" }</h2>
            <p>{formData.summary || ""}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">{formData.contact || ""}</h2>
            <ul className="list-none pl-0">
              <li className="mb-1">{formData.phone || ""}</li>
              <li className="mb-1"> {formData.email || ""}</li>
              <li>{formData.address || ""}</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Language</h2>
            <ul className="list-none pl-0">
            {formData?.language?.map((language: string, index: Key) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Expertise</h2>
            <ul className="list-none pl-0">
              {formData?.skills?.map((skill: string, index: Key) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">EXPERIENCE</h2>
            {formData.experience?.map((item: any) => (
              <div key={item.company} className="mb-4">
                <h3 className="font-semibold">{item.company}</h3>
                <p>{item.position}</p>
                <p>{item.from_date} - {item.to_date}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">EDUCATION</h2>
            {formData.education.map((edu:any, index: any) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold mb-1">{edu.degree}</h3>
                  <p>{edu.university}</p>
                  <p className="text-sm mt-2">
                    {edu.from_date} - {edu.to_date}
                  </p>
                </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">PROJECT</h2>
            {formData.projects?.map((item: any) => (
              <div key={item.name} className="mb-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.link}</p>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
     
    
  );
}


export { BioDataTemplate1, BioDataTemplate2, BioDataTemplate3, BioDataTemplate4, BioDataTemplate5 };

