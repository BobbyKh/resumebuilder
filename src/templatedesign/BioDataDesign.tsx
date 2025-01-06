import { Key } from 'react';
interface BioDataTemplateProps {
  nationality: string;
  image: string;
  fullname: string;
  position: string;
  email: string;
  date_of_birth: string;
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
<div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <div className="text-center mb-6 border-b-2 pb-4">
        <img src={formData.image} alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"></img>
        <h1 className="text-2xl font-bold text-gray-800">{formData.fullname}</h1>
        <p className="text-gray-600">{formData.position}</p>
    </div>

    <div className="mb-4 border-b-2 pb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <p className="text-gray-600 justify-center"><strong>Full Name:</strong> {formData.fullname}</p>
                <p className="text-gray-600 justify-center"><strong>Date of Birth:</strong> {formData.date_of_birth}</p>
                <p className="text-gray-600 justify-center"><strong>Nationality:</strong> {formData.nationality}</p>
            </div>
            <div>
                <p className="text-gray-600 justify-center"><strong>Email:</strong> {formData.email}</p>
                <p className="text-gray-600 justify-center"><strong>Phone:</strong> {formData.phone}</p>
                <p className="text-gray-600 justify-center"><strong>Address:</strong> {formData.address}</p>
            </div>
        </div>
    </div>

    <div className="mb-4 border-b-2 pb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Education</h2>
        <hr className="my-4 border-gray-300" />
        
        <ul className="list-none pl-0">
            {formData.education.map((education: any, index: Key | null | undefined) => (
                <li className="mb-2" key={index}>
                    <p className="text-gray-600 justify-center"><strong>Degree:</strong> {education.degree}</p>
                    <p className="text-gray-600 justify-center"><strong>University:</strong> {education.university}</p>
                    <p className="text-gray-600 justify-center"><strong>Year of Graduation:</strong> {education.to_date}</p>
                </li>
                
            ))}
            
        </ul>
    </div>

    <div className="mb-4 border-b-2 pb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Experience</h2>
        <ul className="list-none pl-0">
            {formData.experience.map((experience: any, index: Key | null | undefined) => (
                <li className="mb-2" key={index}>
                    <p className="text-gray-600 justify-center"><strong>Job Title:</strong> {experience.position}</p>
                    <p className="text-gray-600 justify-center"><strong>Company:</strong> {experience.company}</p>
                    <p className="text-gray-600 justify-center"><strong>Years:</strong> {`${new Date(experience.to_date).getFullYear() - new Date(experience.from_date).getFullYear()}`}</p>
                </li>
            ))}
        </ul>
    </div>
    <div className="mb-4 border-b-2 pb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
            {formData.skills.map((skill: any, index: Key | null | undefined) => (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" key={index}>{skill}</span>
            ))}
        </div>
    </div>

</div>

  );

};



const BioDataTemplate2 = (formData: any = {}): JSX.Element => {


  return (
    <div className="max-w-3xl mx-auto p-4 border rounded-lg">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{formData.fullname || "Name not provided"}</h1>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <ul className="list-disc pl-5">
          <li>Email: {formData.email || "Email not provided"}</li>
          <li>Phone: {formData.phone || "Phone not provided"}</li>
          <li>Address: {formData.address || "Address not provided"}</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Summary</h2>
        <p>{formData.summary || "Summary not provided"}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Experience</h2>
        <ul className=" pl-0">
          {formData.experience.map((item: any, index: Key) => (
            <li key={index}>
              <h3 className="font-semibold">{item.company}</h3>
              <p>{item.position}</p>
              <p>{item.from_date} - {item.to_date}</p>

            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold">Education</h2>
        <ul className=" pl-0 mt-2">
          {formData.education.map((item: any, index: Key) => (
            <ul key={index}>
              <li className="font-semibold">{item.degree}</li>
              <li>{item.university}</li>
              <li>{item.from_date} - {item.to_date}</li>
            </ul>

          ))}
        </ul>
      </div>
    </div>

  );
};

const BioDataTemplate3 = (formData: any): JSX.Element => {

  return (
    <div className='max-w-3xl mx-auto p-8 bg-white'>
      <h1 className='text-3xl  text-center'>{formData.fullname || ""}</h1>
      <h2 className='text-xl font-sans text-center'>{formData.position || ""}</h2>
      <hr className='my-4' />
      <div className='personal-details'>
        <h1 className='text-2xl font-sans '>Personal Details</h1>
        <hr className='my-4' />
        <p className='py-2'>Email: {formData.email || "Email not provided"}</p>
        <p className='py-2'>Phone: {formData.phone || "Phone not provided"}</p>
        <p className='py-2'>Address: {formData.address || "Address not provided"}</p>

      </div>
      <hr className='my-4' />
      <div className='summary'>
        <h1 className='text-2xl font-sans '>Summary</h1>
        <hr className='my-4' />
        <p>{formData.summary || "Summary not provided"}</p>
      </div>
      <hr className='my-4' />
      <div className='skills '>
        <h1 className='text-2xl font-sans '>Skills</h1>
        <hr className='my-4' />
        <ul className=' list-inside'>
          {formData.skills?.map((item: any, index: Key) => (
            <li className='py-2' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <hr className='my-4' />
      <div className='experience'>
        <h1 className='text-2xl font-sans '>Experience</h1>
        <hr className='my-4' />
        <ul className='list-disc list-inside'>
          {formData.experience === null ? (
            <li className='py-2'>No experience</li>
          ) : (
            formData.experience?.map((item: any, index: Key) => (
              <ul>
                <li className='py-2' key={index}>{item.company}</li>
                <li className='py-2'>{item.position}</li>
                <li className='py-2'>{item.from_date} - {item.to_date}</li>
              </ul>

            ))
          )}
        </ul>
      </div>
      <hr className='my-4' />
      <div className='education'>
        <h1 className='text-2xl font-sans '>Education</h1>
        <hr className='my-4' />
        <ul className='list-disc list-inside'>
          {formData.education?.map((item: any, index: Key) => (
            <ul>
              <li className='py-2' key={index}>{item.degree}</li>
              <li className='py-2'>{item.university}</li>
              <li className='py-2'>{item.from_date} - {item.to_date}</li>
              <li className='py-2'>{item.description}</li>

            </ul>
          ))}
        </ul>
      </div>
      <hr className='my-4' />
      <div className='hobbies'>
        <h1 className='text-2xl font-sans '>Hobbies</h1>
        <hr className='my-4' />
        <ul className=' list-inside'>
          {formData.hobbies?.map((item: any, index: Key) => (
            <li className='py-2' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='absolute bottom-0 right-0 text-black text-6xl opacity-10 flex items-center justify-center h-full w-full'>
        <span className='transform rotate-90'>resumaven</span>
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

