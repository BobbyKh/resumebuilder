import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone, faChartPie, faCode, faDollarSign, faLightbulb, faUser, faGear, faTrophy, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Key } from 'react';
interface ResumeTemplateProps {
  image: string;
  fullname: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  headline: string;
  website: string;
  summary: string;
  nationality: string;
  date_of_birth: string;
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



const ResumeTemplate1 = (formData: ResumeTemplateProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex">
        <div className="w-1/2 bg-[#e6f0fa] p-8 rounded-l-lg">
          <div className="mb-6">
            <img
              src={formData.image || ""}
              className="w-32 h-32 rounded-full mx-auto " style={{ objectFit: "cover", objectPosition: "top" }}
              alt=""
            />
          </div>
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#003566]">
              {formData.fullname || ""}
            </h1>
            <p className="text-lg text-[#003566] mt-2">
              {formData.position || ""}
            </p>
            <p className='text-[#003566]'>{formData.website || ""}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              {formData.headline || ""}
            </h2>
            <p className="text-gray-700">
              {formData.summary || ""}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              Contact
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              <li className="mb-1">{formData.phone || ""}</li>
              <li className="mb-1 justify-center">
                {formData.email || ""}
              </li>
              <li>{formData.address || ""}</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              Language
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              {formData?.language?.map((language: string, index: Key) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              Expertise
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              {formData?.skills?.map((skill: string, index: Key) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/3 p-8 rounded-r-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              EXPERIENCE
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              {formData.experience.map((exp: any, index: any) => (
                <li key={index}>
                  <h3 className="font-semisemibold mb-2">
                    {exp.position} | {exp.company}
                  </h3>
                  <p className="mb-2">
                    {exp.from_date} - {exp.to_date} ({parseInt(exp.to_date) - parseInt(exp.from_date)} years)
                  </p>
                  <p className="mb-4">{exp.description}</p>
                  <ul className=" pl-4">

                  </ul>
                </li>
              ))}
            </ul>

          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              EDUCATION
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              {formData.education.map((edu, index) => (
                <li key={index} className="mb-4">
                  <h3 className="font-semisemibold mb-1">{edu.degree}</h3>
                  <p>{edu.university}</p>
                  <p className="text-sm mt-2">
                    {edu.from_date} - {edu.to_date}
                  </p>
                </li>
              ))}
            </ul>


          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              PROJECTS
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              {formData.projects.map((project: any, index: any) => (
                <li key={index}>
                  <h3 className="font-semisemibold mb-2">
                    {project.name}
                  </h3>
                  <p className="mb-2">
                    <a href="{project.link}" target="_blank">{project.link} </a>
                  </p>
                  <p className="mb-4">{project.description}</p>

                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semisemibold mb-2 text-[#003566]">
              HOBBIES
            </h2>
            <ul className="list-none pl-0 text-gray-700 space-y-1">
              {formData.hobbies.map((hobby: any, index: any) => (
                <li key={index} className="flex flex-col items-start">
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

};



const ResumeTemplate2 = (formData: any = {}): JSX.Element => {


  return (
    <div className="bg-gray-100 p-8">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex bg-blue-900 text-white p-8">
        <div className="w-3/4">
          <h1 className="text-4xl font-extrabold tracking-wide">{formData.fullname || "Full Name"}</h1>
          <p className="text-lg font-medium mt-2">{formData.position || "Position"}</p>
        </div>
        <div className="w-1/4 text-right">
          <img
            src={formData.image || "https://via.placeholder.com/100"}
            alt="Profile Picture"
            className="rounded-full w-24 h-24 object-cover border-4 border-white inline-block"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-gray-100 p-6 border-r">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">About Me</h2>
            <p className="text-gray-700">
              {formData.summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue."}
            </p>
          </div>
  
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Contact</h2>
            <ul className="space-y-2 text-gray-700">
              <li>📞 {formData.phone || "+123-456-7890"}</li>
              <li>📧 {formData.email || "hello@reallygreatsite.com"}</li>
              <li>📍 {formData.address || "123 Anywhere St., Any City"}</li>
            </ul>
          </div>
  
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Language</h2>
            <ul className="space-y-2 text-gray-700">
              {formData.language?.map((language: string, index: Key) => (
                <li key={index}>{language}</li>
              )) || (
                <>
                  <li>English</li>
                  <li>Germany (Basic)</li>
                  <li>Spain (Basic)</li>
                </>
              )}
            </ul>
          </div>
  
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Expertise</h2>
            <ul className=" pl-0 text-gray-700 space-y-2">
              {formData.skills?.map((skill: string, index: Key) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="w-2/3 p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Experience</h2>
            {formData.experience?.map((experience: any, index: Key) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold">{experience.position}</h3>
                <p className="text-gray-600">{experience.company} | {experience.from_date} - {experience.to_date}</p>
                <p className="text-gray-700 mt-2">{experience.description}</p>
              </div>
            )) || (
              <div>
                <h3 className="font-bold">Studio Showde</h3>
                <p className="text-gray-600">Canberra - Australia | 2020 - 2022</p>
                <p className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo.
                </p>
              </div>
            )}
          </div>
  
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Education</h2>
            {formData.education?.map((education: any, index: Key) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold">{education.university}</h3>
                <p className="text-gray-600">{education.degree} | {education.from_date} - {education.to_date}</p>
                <p className="text-gray-600">{education.description} </p>

              </div>
            )) || (
              <div>
                <h3 className="font-bold">Borcelle University</h3>
                <p className="text-gray-600">Bachelor of Business Management | 2014 - 2023</p>
              </div>
            )}
          </div>
  
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Projects</h2>
            {formData.projects.map((project: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{project.name || "Project Name"}</h3>
                <p>{project.description || "Project Description"}</p>
                {project.link && (
                  <a href={project.link} className="text-blue-500 underline">
                    {project.link}
                  </a>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

const ResumeTemplate3 = (formData: any): JSX.Element => {

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-8">
          <div className="w-3/4">
            <p className="text-gray-600 uppercase tracking-wider text-sm font-semibold">{formData.position || "Accounting Director"}</p>
            <h1 className="text-4xl font-sans  tracking-wide">{formData.fullname || "BENTLEY CAMPBELL"}</h1>
          </div>
          <div className="w-1/4 text-right">
            <img
              src={formData.image || "https://via.placeholder.com/150"}
              alt="Profile Picture"
              className="rounded-full w-24 h-24 object-cover inline-block"
            />
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 " />

        <div className="flex">
          <div className="w-1/3  p-6 border-r">
            <div className="mb-6">
              <h2 className="text-lg font-sans uppercase mb-4">Contact</h2>
              <ul className="text-gray-700 space-y-2">
                <li>📧 {formData.email || "bcampbell@gmail.com"}</li>
                <li>📍 {formData.address || "12 Main Street, Washington DC 20229"}</li>
                <li>📞 {formData.phone || "(212) 555-1212"}</li>
                <li>🎂 {formData.date_of_birth || "January 1, 1990"}</li>

                <li>🌎 {formData.nationality || "American"}</li>
                <li>🔗 {formData.website || "www.bcampbell.com"}</li>
              </ul>
            </div>
            <hr className="border-t-2 border-gray-300 my-6" />
            <div className="mb-6">
              <h2 className="text-lg font-sans uppercase mb-4">Skills</h2>
              <ul className="text-gray-700  pl-5 space-y-2">
                {formData.skills.map((skill: string, index: number) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <hr className="border-t-2 border-gray-300 my-6" />

            <div>
              <h2 className="text-lg font-sans uppercase mb-4">Languages</h2>
              <ul className="text-gray-700  pl-5 space-y-2">
                {formData.language.map((language: string, index: number) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semisemibold uppercase mb-4">Objective</h2>
              <p className="text-gray-700">{formData.summary || "Certified public accountant with 6+ years of experience. Adapts seamlessly to constantly evolving accounting processes and new technologies. Detail-oriented, efficient, and organized, with extensive experience in accounting systems. Specialized in financial planning and reporting."}</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4" />

            <div className="mb-6">
              <h2 className="text-lg font-semisemibold uppercase mb-4">Experience</h2>
              {formData.experience.map((item: any, index: number) => (
                <div key={index} className="mb-4">
                  <h3 className="font-sans">{item.company}</h3>
                  <p className="text-gray-600">
                    {item.to_date ? new Date(item.to_date).getFullYear() - new Date(item.from_date).getFullYear() : 'Present'} years
                  </p>
                  <ul className="text-gray-700  pl-5 mt-2 space-y-1">
                   <li className="text-gray-700">{item.description}</li>
                  </ul>
                </div>
              ))}
            </div>
            <hr className="border-t-2 border-gray-300 my-4" />

            <div>
              <h2 className="text-lg font-semisemibold uppercase mb-4">Education</h2>
              {formData.education.map((item: any, index: number) => (
                <div key={index} className="mb-4">
                  <h3 className="font-sans">{item.degree}</h3>
                  <p className="text-gray-600">{item.from_date} - {item.to_date}</p>
                  <ul className="text-gray-700  pl-5 mt-2 space-y-1">
                    <li>{item.description}</li>
                    </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

const ResumeTemplate4 = (formData: any): JSX.Element => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex p-6 bg-gray-800 text-white">
          <div className="w-1/4">
            <img
              src={formData.image || "https://via.placeholder.com/150"}
              alt="Profile Picture"
              className="rounded-full w-32 h-32 object-cover mx-auto"
            />
          </div>
          <div className="w-3/4 pl-6">
            <h1 className="text-4xl font-semibold">{formData.fullname || "Maria Anderson"}</h1>
            <h2 className="text-xl text-gray-300">{formData.position || "Marketing Manager"}</h2>
            <p className="mt-4 text-gray-400">
              {formData.summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="text-gray-700">
              <li className="mb-2">📞{formData.phone || "9845251258"}  </li>
              <li className="mb-2">📧 {formData.email || "youremail@gmail.com "}</li>
              <li>📍{formData.address || " Your Address"}</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Education</h3>
            <ul className="text-gray-700">
              {formData.education?.map((item: any, index: Key) => (
                <li key={index}>{item.degree}, {item.university}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Expertise</h3>
            <ul className="text-gray-700">
              {formData.skills?.map((item: any, index: Key) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Language</h3>
            <ul className="text-gray-700">
              {formData.language?.map((item: any, index: Key) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-2/3 p-6">
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <div>
              {formData.experience?.map((item: any, index: Key) => (
                <div key={index} className="mb-6">
                  <p className="font-semibold">{new Date(item.from_date).getFullYear()} - {new Date(item.to_date).getFullYear()}</p>
                  <p className="text-sm">{item.company} | {item.address || "company address"}</p>
                  <p className="italic">{item.position}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">Reference</h3>
            <div className="flex space-x-4">
              {formData.references?.map((item: any, index: Key) => (
                <div key={index}>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">{item.position}, {item.company}</p>
                  <p className="text-sm">Phone: {item.phone}</p>
                  <p className="text-sm">Email: {item.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


const ResumeTemplate5 = (formData: any): JSX.Element => {
  return (


<div className="bg-gray-100 font-sans">
  <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className=" bg-blue-900 text-white p-8">
        <div className="mb-8 text-center">
          <img
            src={formData.image || "https://via.placeholder.com/150"}
            alt="Profile Picture"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">{formData.fullname || "Your Name"}</h1>
          <h2 className="text-lg font-light">{formData.position || "Your position"}</h2>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold uppercase">Contact Me</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              {formData.address || "Your Address"}
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              {formData.email || "Your Email"}
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              {formData.phone || "Your Phone"}
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              {formData.twitter || "Your Twitter"}
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold uppercase">Skills</h3>
          <ul className="text-sm mt-2 space-y-2">
            {formData.skills?.map((skill: any, index: Key) => (
              <li key={index}>
                <FontAwesomeIcon icon={faChartPie} className="mr-2" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase">Languages</h3>
          <ul className="text-sm mt-2 space-y-2">
            {formData.language?.map((award: any, index: Key) => (
              <li key={index}>
                <FontAwesomeIcon icon={faLanguage} className="mr-2" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-8">
        <div className="mb-8">
          <h3 className="text-xl font-sans mb-4 border-b pb-2 border-gray-300">Work Experience</h3>
          {formData.experience?.map((experience: any, index: Key) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-sans">{experience.company}</h4>
              <p className="text-gray-600">{experience.from_date} - {experience.to_date} ({parseInt(experience.to_date.split("-")[0]) - parseInt(experience.from_date.split("-")[0])} years)</p>
              <ul className=" mt-2 text-gray-700 text-sm">
                {experience.description?.split("\n").map((item: string, index: Key) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-sans mb-4 border-b pb-2 border-gray-300">Education</h3>
          {formData.education?.map((education: any, index: Key) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-sans">{education.degree}</h4>
              <p className="text-gray-600">{education.from_date} - {education.to_date} ({parseInt(education.to_date.split("-")[0]) - parseInt(education.from_date.split("-")[0])} years)</p>
              <ul className=" mt-2 text-gray-700 text-sm">
                {education.description?.split("\n").map((item: string, index: Key) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-sans mb-4 border-b pb-2 border-gray-300">Awards</h3>
          {formData.awards?.map((award: any, index: Key) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-sans">{award.name}</h4>
              <p className="text-gray-600">{award.date}</p>
              <ul className=" mt-2 text-gray-700 text-sm">
                {award.description?.split("\n").map((item: string, index: Key) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


  );
}


export { ResumeTemplate1, ResumeTemplate2, ResumeTemplate3, ResumeTemplate4, ResumeTemplate5 };

