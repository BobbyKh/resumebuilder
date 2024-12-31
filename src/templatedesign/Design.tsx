import { Key, useState } from 'react';

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
console.log(FormData);
const ResumeTemplate1 = (formData: any): JSX.Element => {
  const [colorPalette] = useState<ColorPalette>(colorPalettes[0]);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-initial rounded-lg shadow-md">
      <div className="flex justify-between items-center ">
        <h1 className={`text-3xl font-bold text-black`}>{formData.fullname || "John Doe"}</h1>
        {formData.image ? (
          <img src={formData.image} className="h-20 w-20 rounded-full ml-4" />
        ) : (
          <img src="https://picsum.photos/200" className="h-20 w-20 rounded-full ml-4" />
        )}

      </div>
      <p className="text-lg font-semibold mb-4">{formData.position || "Student"}</p>
      <hr className="my-4" />
      <p>{formData.email || "Email not provided"} {formData.phone || "Phone not provided"} {formData.address || "Address not provided"}</p>
      <hr className="my-4" />
      <p className="text-lg leading-relaxed">{formData.summary || "Summary not provided"}</p>
      <hr className="my-4" />
      <h2 className={`text-xl font-bold text-black mb-2`}>Expertise</h2>
      <ul>
        {formData.skills?.map((item: any, index: Key) => (
          <li className="text-lg flex items-center p-1" key={index}>{item}</li>
        ))}
      </ul>
      <hr className="my-4" />
      <h2 className={`text-xl font-bold text-black`}>Experience</h2>
      <ul>
        {formData.experience?.map((item: any, index: Key) => (
          <li className="text-lg" key={index}>{item.company || "Unknown Company"}</li>
        ))}
      </ul>
      <hr className="my-4" />
      <h2 className={`text-xl font-bold text-black`}>Education</h2>
      <ul>
        {formData.education?.map((item: any, index: Key) => (
          <li className="text-lg" key={index}>{item.degree || "Unknown Degree"}</li>
        ))}
      </ul>
      <hr className="my-4" />
      <h2 className={`text-xl font-bold text-black`}>Hobbies</h2>
      <ul>
        {formData.hobbies?.map((item: any, index: Key) => (
          <li className="text-lg" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};



const ResumeTemplate2 = (formData: any = {}): JSX.Element => {
  const [colorPalette, setColorPalette] = useState<ColorPalette>(colorPalettes[1]);

  const experience = formData.experience || [];
  const education = formData.education || [];
  console.log(formData.education);
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
        {experience.map((item: any, index: Key) => (
          <li key={index}>{item.institution || item.company || "Unknown Company"}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-bold">Education</h2>
      <ul className="list-disc pl-5">
        {education.map((item: any, index: Key) => (
          <li key={index}>{item.institution}</li>
        ))}
      </ul>
    </div>
  </div>
  
  );
};

const ResumeTemplate3 = (formData: any): JSX.Element => {
  const [colorPalette, setColorPalette] = useState<ColorPalette>(colorPalettes[2]);

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

export { ResumeTemplate1, ResumeTemplate2, ResumeTemplate3 };

