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
  company_name: string;
  company_address: string;
  company_country: string;
  subject : string;

 
}

const today = new Date().toLocaleDateString();

const CoverLetterTemplate1 = (formData: ResumeTemplateProps) => {
  return (
   
  <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg font-serif"> {/* Use serif font for letters */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{formData.company_name}</h1>
                    <p className="text-gray-600">{formData.company_address}</p>
                    <p className="text-gray-600">{formData.company_country}</p>
                </div>
                <div>
                    <p className="text-gray-600">{today}</p>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-gray-700">Dear Hiring Manager,</p> {/* Standard salutation */}
            </div>

            <div className="mb-8">
                {/* Main letter content would go here. The summary could be adapted. */}
                <p className="text-gray-700">
                   {formData.summary ? formData.summary : "Please replace this with the body of your letter. This area is designated for the main content of your communication. You can use multiple paragraphs to convey your message effectively."}
                </p>
            </div>
            {/* <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Company Information</h3>
                <ul className="list-none pl-0 text-gray-600">
                    <li>Company Name: {formData.company_name}</li>
                    <li>Company Address: {formData.company_address}</li>
                    <li>Company Country: {formData.company_country}</li>
                </ul>
            </div> */}

            <div className="mb-4">
                <p className="text-gray-700">Sincerely,</p> {/* Standard closing */}
                <p className="text-gray-700">{formData.fullname}</p>
                <p className="text-gray-700">{formData.position}</p>
                <p className='text-gray-700'> {formData.website}</p>
            </div>
        </div>

    
  );

};



const CoverLetterTemplate2 = (formData: any = {}): JSX.Element => {


  return (
    <div className="container mx-auto p-6">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h1 className="text-2xl font-semibold mb-2">{formData.fullname || "Full Name"}</h1>
                <p className="text-gray-500">{formData.position || "Position"}</p>
                <p className="text-gray-500">{formData.phone || "Phone"}</p>
                <p className="text-gray-500">{formData.email || "Email"}</p>
                <p className="text-gray-500">{formData.address || "Address"}</p>
            </div>
            <div>
                <p className="text-gray-700"> {today}</p>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700 font-semibold">To HR,</p>
            <p className="text-gray-700">{formData.company_name || "Company Name"}</p>
            <p className="text-gray-700">{formData.company_address || "Company Address"}</p>
        </div>

        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2"> Application for {formData.position || "Position"}</h2>
            <p className="text-gray-700">
                {formData.summary 
                    ? formData.summary 
                    : "Please provide a brief summary of your application. This section is intended to highlight the key points of your cover letter, and should be personalized to reflect your specific skills and experiences."
                }
            </p>
        </div>

        <div className='mb-6'>
            <p className="text-gray-700 ">Sincerely,</p>
            <p className="text-gray-700">{formData.fullname || "Full Name"}</p>
            <p className="text-gray-700">{formData.position || "Position"}</p>
            <p className='text-gray-700'>{formData.website || "Website"}</p>
        </div>
    </div>

  );
};

const CoverLetterTemplate3 = (formData: any): JSX.Element => {

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg font-serif">
    <div className="flex justify-between items-start mb-8">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">{formData.fullname}</h1>
            <p className="text-gray-600">{formData.address}</p>
            <p className="text-gray-600">{formData.phone} | {formData.email}</p>
            {formData.website && <p className="text-gray-600"><a href={formData.website} className="text-blue-500 underline">{formData.website}</a></p>}
        </div>
        <div>
            <p className="text-gray-600">{today}</p>
        </div>
    </div>
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Subject: Application for {formData.position} Position</h2>
    </div>
    <div className="mb-8">
        <p className="text-gray-700">Dear Hiring Manager,</p> {/* Standard salutation */}
    </div>

    <div className="mb-8">
        <p className="text-gray-700">
            {formData.summary ? (
                formData.summary // Display provided summary if available
            ) : (
                <span>
                    {/* Placeholder content for main letter body */}
                    I am writing to express my strong interest in the {formData.position} position at {formData.company_name}. As a {/* Placeholder for skills or experience */} professional with {/* Placeholder for experience duration */} years of experience in this field, I am confident I possess the skills and qualifications necessary to excel in this role.
                    I am proficient in tools like {formData.skills.map((skill: any) => <span key={skill}>{skill}, </span>) } and am eager to contribute my skills to the success of your organization. 

                    {/* Replace the placeholders above with your actual content */}
                </span>
            )}
        </p>
    </div>
    <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Company Information</h3>
        <ul className="list-none pl-0 text-gray-600">
            <li>Company Name: {formData.company_name}</li>
            <li>Company Address: {formData.company_address}</li>
            <li>Company Country: {formData.company_country}</li>
        </ul>
    </div>

    <div className="mb-4">
        <p className="text-gray-700">Sincerely,</p> {/* Standard closing */}
        <p className="text-gray-700">{formData.fullname}</p>
    </div>
</div>

  );
};

const CoverLetterTemplate4 = (formData: any): JSX.Element => {
  return (
    <div className="bg-gradient-to-r from-blue-60 to-blue-100   items-center justify-center p-8 mt-2"> 
     <div>
                    <h1 className="text-2xl font-bold text-gray-800">{formData.fullname}</h1>
                    <p className="text-gray-600">{formData.address}</p>
                    <p className="text-gray-600">{formData.phone} | {formData.email}</p>
                    {formData.website && <p className="text-gray-600"><a href={formData.website} className="text-blue-500 underline">{formData.website}</a></p>}
                </div>
    {/* Gradient background */}
        <div className="max-w-2xl w-full mx-auto p-8 bg-white shadow-lg rounded-lg font-serif relative mt-2"> {/* Added relative positioning */}
            {/* Subtle top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-300 rounded-t-lg"> </div>

            <div className="flex justify-between items-start mb-8">
               
                <div>
                    <p className="text-gray-600">{today}</p>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Subject: {formData.subject}</h2>
            </div>
            

            <div className="mb-8">
                <p className="text-gray-700">Dear Hiring Manager,</p>
            </div>

            <div className="mb-8">
                <p className="text-gray-700">
                    {formData.summary ? (
                        formData.summary
                    ) : (
                        <span>
                            I am writing to express my strong interest in the {formData.position} position at {formData.company_name}. As a professional with years of experience in this field, I am confident I possess the skills and qualifications necessary to excel in this role.
                        </span>
                    )}
                </p>
            </div>
            <div className="mb-8">
                <ul className="list-none pl-0 text-gray-600">
                    <li> {formData.company_name}</li>
                    <li> {formData.company_address}</li>
                    <li> {formData.company_country}</li>
                </ul>
            </div>

            <div className="mb-4">
                <p className="text-gray-700">Sincerely,</p>
                <p className="text-gray-700">{formData.fullname}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300 rounded-t-lg"> </div>

        </div>

    </div>

  )
}


const CoverLetterTemplate5 = (formData: any): JSX.Element => {
  return (

    <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto font-serif">
    <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Sick Leave Application</h2>
    </div>

    <div className="mb-4">
        <p className="text-gray-700">Date: {today}</p>
    </div>

    <div className="mb-4">
        <p className="text-gray-700">To,</p>
        <p className="text-gray-700">Head of {formData.company_name},</p>
        <p className="text-gray-700">{formData.company_address}</p>
    </div>

    <div className="mb-4">
        <p className="text-gray-700">Subject: Leave Application for {formData.subject}</p>
    </div>

    <div className="mb-4">
        <p className="text-gray-700">Dear Teacher,</p>
        <p className="text-gray-700 text-justify">
            I am writing to inform you that my child, <span className="font-semibold">{formData.fullname}</span> of class {formData.position}, will be unable to attend school on <span className="font-semibold">{today}</span> due to <span className="font-semibold">{formData.subject}</span>.
        </p>
    </div>

    <div className="mb-6">
        <p className="text-gray-700 text-justify">
            I request you to kindly grant him/her leave for the aforementioned date.
        </p>
    </div>

    <div className="mb-4">
        <p className="text-gray-700">Thank you for your understanding.</p>
    </div>

    <div>
        <p className="text-gray-700">Sincerely,</p>
        <p className="text-gray-700">{formData.fullname}</p>
        <p className="text-gray-700">Contact No.: {formData.phone}</p>
    </div>
</div>
  );
}


export { CoverLetterTemplate1, CoverLetterTemplate2, CoverLetterTemplate3, CoverLetterTemplate4, CoverLetterTemplate5 };

