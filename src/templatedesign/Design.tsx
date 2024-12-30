import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

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

const ResumeTemplate1 = (formData: any): JSX.Element => {
  const [colorPalette, setColorPalette] = useState<ColorPalette>(colorPalettes[0]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className={`text-3xl font-bold text-${colorPalette.primary}-600`}>{formData.name || "John Doe"}</h1>
        {formData.image ? (
          <img src={formData.image} className="h-20 w-20 rounded-full ml-4" />
        ) : (
          <img src="https://picsum.photos/200" className="h-20 w-20 rounded-full ml-4" />
        )}
      </div>

      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Contact Information</h2>
        <ul className="list-disc pl-4">
          <li className="text-lg">
            Email: 
            <a href={`mailto:${formData.email || "john.doe@example.com"}`} className="text-blue-600 hover:text-blue-700">
              {formData.email || "john.doe@example.com"}
            </a>
          </li>
          <li className="text-lg">Phone: {formData.phone || "123-456-7890"}</li>
          <li className="text-lg">Address: {formData.address || "123 Main St, Anytown, USA"}</li>
          <li className="text-lg">
            LinkedIn: 
            <a href={formData.linkedin || "https://www.linkedin.com/in/johndoe/"} className="text-blue-600 hover:text-blue-700">
              {formData.linkedin || "https://www.linkedin.com/in/johndoe/"}
            </a>
          </li>
          <li className="text-lg">
            GitHub: 
            <a href={formData.github || "https://github.com/johndoe"} className="text-blue-600 hover:text-blue-700">
              {formData.github || "https://github.com/johndoe"}
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Summary</h2>
        <p className="text-lg">{formData.summary || "Highly motivated and detail-oriented software engineer with 5+ years of experience in developing scalable and maintainable applications. Proficient in a range of programming languages, including Java, Python, and JavaScript. Strong understanding of computer science fundamentals and experience with agile development methodologies."}</p>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Experience</h2>
        <ul className="list-disc pl-4">
          {(formData.experience || []).map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
            <li className="text-lg" key={index}>{item}</li>
          ))}
          {!formData.experience && (
            <>
              <li className="text-lg">Software Engineer, ABC Company (2018-2020)</li>
              <li className="text-lg">Software Engineer, DEF Company (2020-2022)</li>
            </>
          )}
        </ul>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Education</h2>
        <ul className="list-disc pl-4">
        {formData?.education?.map((item: any, index: number) => (
          console.log(item),
  <li className="text-lg" key={index}>
    {item.institution || "Unknown Institution"} - {item.degree || "Unknown Degree"}
  </li>
))}
        </ul>
      </div>
    </div>
  );
};


const ResumeTemplate2 = (formData: any = {}): JSX.Element => {
  const [colorPalette, setColorPalette] = useState<ColorPalette>(colorPalettes[1]);

  const experience = formData.experience || [];
  const education = formData.education || [];

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className={`text-3xl font-bold text-${colorPalette.primary}-600`}>{formData.fullname || "Name not provided"}</h1>
        <button
          className={`bg-${colorPalette.primary}-600 hover:bg-${colorPalette.primary}-700 text-white font-bold py-2 px-4 rounded`}
          onClick={() => setColorPalette(colorPalettes[2])}
        >
          Change Color
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Contact Information</h2>
          <ul>
            <li className="text-lg">Email: {formData.email || "Email not provided"}</li>
            <li className="text-lg">Phone: {formData.phone || "Phone not provided"}</li>
            <li className="text-lg">Address: {formData.address || "Address not provided"}</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Summary</h2>
          <p className="text-lg">{formData.summary || "Summary not provided"}</p>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Experience</h2>
        <ul>
          {experience.map((item: any, index: Key) => (
            <li className="text-lg" key={index}>{item.institution || item.company || "Unknown Company"}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Education</h2>
        <ul>
          {education.map((item: any, index: Key) => (
            <li className="text-lg" key={index}>{item.institution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ResumeTemplate3 = (formData: any): JSX.Element => {
  const [colorPalette, setColorPalette] = useState<ColorPalette>(colorPalettes[2]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className={`text-3xl font-bold text-${colorPalette.primary}-600`}>{formData?.name}</h1>
        <button
          className={`bg-${colorPalette.primary}-600 hover:bg-${colorPalette.primary}-700 text-white font-bold py-2 px-4 rounded`}
          onClick={() => setColorPalette(colorPalettes[3])}
        >
          Change Color
        </button>
      </div>
      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Summary</h2>
        <p className="text-lg">{formData?.summary}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Experience</h2>
          <ul>
            {formData?.experience?.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
              <li className="text-lg" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Education</h2>
          <ul>
            {formData?.education?.map((item: any, index: Key | null | undefined) => (
              <li className="text-lg" key={index}>{item.university} - {item.degree}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h2 className={`text-2xl font-bold text-${colorPalette.secondary}-600`}>Skills</h2>
        <ul>
          {formData?.skills?.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
            <li className="text-lg" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ResumeTemplate1, ResumeTemplate2, ResumeTemplate3 };

