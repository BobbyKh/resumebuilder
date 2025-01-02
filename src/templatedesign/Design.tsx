import { Key } from 'react';

interface ResumeTemplateProps {
  
  fullname: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  headline: string;
  website: string;
  summary: string;
  skills: string[];
  education: Array<{ college: string; degree: string; university: string; from_date: string; to_date: string; }>;
  hobbies: string[];
  experiences: Array<{ job_title: string; company_name: string; from_date: string; to_date: string; description: string; achievements: string; }>;
  language: string[];
}


type ColorPalette = {
  primary: string;
  secondary: string;
};

const colorPalettes: ColorPalette[] = [
  { primary: 'blue', secondary: 'orange' },
  { primary: 'green', secondary: 'purple' },
  { primary: 'red', secondary: 'pink' },
  { primary: 'indigo', secondary: 'yellow' },
  { primary: 'teal', secondary: 'gray' },
];

const ResumeTemplate1 = (formData: ResumeTemplateProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex">
        <div className="w-1/3 bg-[#e6f0fa] p-8 rounded-l-lg">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-[#003566]">
              {formData.fullname || "Name not provided"}
            </h1>
            <p className="text-lg text-[#003566]">
              {formData.position || "Title not provided"}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-[#003566]">
              {formData.headline || "Heading not provided"}
            </h2>
            <p className="text-gray-700">
              {formData.summary || "Summary not provided"}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-[#003566]">
              Contact
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              <li className="mb-1">{formData.phone || "+123-456-7890"}</li>
              <li className="mb-1">
                {formData.email || "hello@reallygreatsite.com"}
              </li>
              <li>{formData.address || "123 Anywhere St. Any City"}</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-[#003566]">
              Language
            </h2>
            <ul className="list-none pl-0 text-gray-700">
              {formData?.language?.map((language: string, index: Key) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#003566]">
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
            <h2 className="text-xl font-semibold mb-2 text-[#003566]">
              EXPERIENCE
            </h2>
            <ul className="list-none pl-0">
              {formData?.experiences.map((exp, index) => (
                <li key={index}>
                  <h3 className="font-semibold mb-2">
                    {exp.job_title} at {exp.company_name}
                  </h3>
                  <p className="mb-2">
                    {exp.from_date} - {exp.to_date}
                  </p>
                  <p className="mb-4">{exp.description}</p>
                  <ul className="list-disc pl-4">
                    {exp.achievements.split(",").map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
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
      <ul className="list-disc pl-5">
        {formData.experiences.map((item: any, index: Key) => (
          <li key={index}>
            <h3 className="font-semibold">{item.job_title}</h3>
            <p>{item.company_name}</p>
            <p>{item.from_date} - {item.to_date}</p>
       
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-bold">Education</h2>
      <ul className="list-disc pl-5">
        {formData.education.map((item: any, index: Key) => (
          <li key={index}>{item.institution}</li>
        ))}
      </ul>
    </div>
  </div>
  
  );
};

const ResumeTemplate3 = (formData: any): JSX.Element => {

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
              <li className='py-2' key={index}>{item}</li>
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
            <li className='py-2' key={index}>{item}</li>
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

const ResumeTemplate4 = (formData: any): JSX.Element => {
  return(
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


const ResumeTemplate5 = (formData: any): JSX.Element => {
  return (

    <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">{formData.fullname || "Name not provided"}</h1>
          <p className="text-lg mt-2">{formData.position || "Position not provided"}</p>
        </div>
        <div>
          <img src="user.png" alt="Profile Picture" className="w-32 h-32 rounded-full hidden">
          </img></div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8 ">
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p>{formData.summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <ul className="list-none pl-0">
              <li className="mb-1">{formData.phone || "Phone not provided"}</li>
              <li className="mb-1"> {formData.email || "Email not provided"}</li>
              <li>{formData.address || "Address not provided"}</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Language</h2>
            <ul className="list-none pl-0">
              <li className="mb-1">English</li>
              <li className="mb-1">Germany (basic)</li>
              <li>Spain (basic)</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Expertise</h2>
            <ul className="list-none pl-0">
              <li className="mb-1">Management Skills</li>
              <li className="mb-1">Creativity</li>
              <li className="mb-1">Digital Marketing</li>
              <li className="mb-1">Negotiation</li>
              <li className="mb-1">Critical Thinking</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">EXPERIENCE</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Studio Showde</h3>
              <p className="text-gray-600">Canberra Australia</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Elsetown Cor.</h3>
              <p className="text-gray-600">Kota Baru - Singapore 2016-2020</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget. malesuada justo. Ut aliquam augue.</p>
            </div>
            <div>
              <h3 className="font-semibold">Studio Showde</h3>
              <p className="text-gray-600">Sydney Australia 2010-2015</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget. malesuada justo. Ut aliquam augue.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">EDUCATION</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Borcelle University</h3>
              <p>Bachelor of Business Management 2014-2023</p>
            </div>
            <div>
              <h3 className="font-semibold">Borcelle University</h3>
              <p>Master of Business Management 2014-2018</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">SKILLS SUMMARY</h2>
            <div className="mb-2">
              <div className="flex justify-between">
                <p>Design Process</p>
                <p>78%</p>
              </div>
              <div className="bg-gray-300 rounded-full h-2">
                <div style={{ width: "78%" }} className="bg-blue-500 rounded-full h-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Project Management</p>
                <p>81%</p>
              </div>
              <div className="bg-gray-300 rounded-full h-2">
                <div style={{ width: "81%" }} className="bg-blue-500 rounded-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export { ResumeTemplate1, ResumeTemplate2, ResumeTemplate3, ResumeTemplate4, ResumeTemplate5 };

