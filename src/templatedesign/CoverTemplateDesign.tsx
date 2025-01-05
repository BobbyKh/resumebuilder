import { Key } from 'react';
interface CoverLetterTemplateProps {
  image: string;
  fullname: string;
  position: string;
  email: string;
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



const CoverLetterTemplate1 = (formData: CoverLetterTemplateProps) => {
  return (
    <div className="max-w-3xl mx-auto p-4 border rounded-lg">
      <template>
  <div className="bg-gray-100 p-6">
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-2">Your Name</h1>
      <p className="text-gray-500">Your Address</p>
      <p className="text-gray-500">Your Phone Number</p>
      <p className="text-gray-500">Your Email</p>
      <p className="text-gray-500">Your LinkedIn Profile (Optional)</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700">Date</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700">Hiring Manager Name (If Known)</p>
      <p className="text-gray-700">Company Name</p>
      <p className="text-gray-700">Company Address</p>
    </div>

    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Subject: Application for [Job Title] Position</h2>
      <p className="text-gray-700">Dear [Hiring Manager Name],</p>
      <p className="text-gray-700">I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job posting].</p>
      <p className="text-gray-700">With my [Number] years of experience in [Relevant Field] and proven track record of success in [List 2-3 key achievements], I am confident I possess the skills and drive to excel in this role and significantly contribute to your team's success.</p>

      <p className="text-gray-700">In my previous role as [Your Previous Role] at [Your Previous Company], I was responsible for [List 2-3 key responsibilities]. I have a strong understanding of [List 2-3 key skills] and am proficient in using tools such as [List relevant tools e.g., software, programming languages].</p>

      <p className="text-gray-700">I am particularly drawn to [Company Name]'s [Mention something specific about the company that interests you, e.g., company culture, mission, values]. I believe my skills and values align perfectly with your company's goals, and I am eager to contribute to a dynamic and innovative environment.</p>

      <p className="text-gray-700">My resume, attached for your review, provides further details on my qualifications and accomplishments. I am available for an interview at your earliest convenience and can be reached at [Your Phone Number] or [Your Email].</p>

      <p className="text-gray-700">Thank you for your time and consideration. I look forward to the possibility of speaking with you soon.</p>

      <p className="text-gray-700">Sincerely,</p>
      <p className="font-bold">Your Name</p>
    </div>
  </div>
</template>
    
      
      </div>
    
  );

};



const CoverLetterTemplate2 = (formData: any = {}): JSX.Element => {


  return (
    <div className="container mx-auto p-6">
        <div className="flex justify-between mb-6">
            <div>
                <h1 className="text-2xl font-bold mb-2">Your Name</h1>
                <p className="text-gray-500">Your Address</p>
                <p className="text-gray-500">Your Phone Number</p>
                <p className="text-gray-500">Your Email</p>
                <p className="text-gray-500">Your LinkedIn Profile (Optional)</p>
            </div>
            <div>
                <p className="text-gray-700">Date</p>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700">Hiring Manager Name (If Known)</p>
            <p className="text-gray-700">Company Name</p>
            <p className="text-gray-700">Company Address</p>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-2">Subject: Application for [Job Title] Position</h2>
            <p className="text-gray-700">Dear [Hiring Manager Name],</p>
            <p className="text-gray-700">I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job posting].</p>
            <p className="text-gray-700">With my [Number] years of experience in [Relevant Field] and proven track record of success in [List 2-3 key achievements], I am confident I possess the skills and drive to excel in this role and significantly contribute to your team's success.</p>

            <p className="text-gray-700">In my previous role as [Your Previous Role] at [Your Previous Company], I was responsible for [List 2-3 key responsibilities]. I have a strong understanding of [List 2-3 key skills] and am proficient in using tools such as [List relevant tools e.g., software, programming languages].</p>

            <p className="text-gray-700">I am particularly drawn to [Company Name]'s [Mention something specific about the company that interests you, e.g., company culture, mission, values]. I believe my skills and values align perfectly with your company's goals, and I am eager to contribute to a dynamic and innovative environment.</p>

            <p className="text-gray-700">My resume, attached for your review, provides further details on my qualifications and accomplishments. I am available for an interview at your earliest convenience and can be reached at [Your Phone Number] or [Your Email].</p>

            <p className="text-gray-700">Thank you for your time and consideration. I look forward to the possibility of speaking with you soon.</p>

            <p className="text-gray-700">Sincerely,</p>
            <p className="font-bold">Your Name</p>
        </div>
    </div>

  );
};

const CoverLetterTemplate3 = (formData: any): JSX.Element => {

  return (
    <div className="container mx-auto p-6">
        <div className="flex justify-between mb-6">
            <div>
                <h1 className="text-2xl font-bold mb-2">Your Name</h1>
                <p className="text-gray-500">Your Address</p>
                <p className="text-gray-500">Your Phone Number</p>
                <p className="text-gray-500">Your Email</p>
                <p className="text-gray-500">Your LinkedIn Profile (Optional)</p>
            </div>
            <div>
                <p className="text-gray-700">Date</p>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700">Hiring Manager Name (If Known)</p>
            <p className="text-gray-700">Company Name</p>
            <p className="text-gray-700">Company Address</p>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-2">Subject: Application for [Job Title] Position</h2>
            <p className="text-gray-700">Dear [Hiring Manager Name],</p>
            <p className="text-gray-700">I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job posting].</p>
            <p className="text-gray-700">With my [Number] years of experience in [Relevant Field] and proven track record of success in [List 2-3 key achievements], I am confident I possess the skills and drive to excel in this role and significantly contribute to your team's success.</p>

            <p className="text-gray-700">In my previous role as [Your Previous Role] at [Your Previous Company], I was responsible for [List 2-3 key responsibilities]. I have a strong understanding of [List 2-3 key skills] and am proficient in using tools such as [List relevant tools e.g., software, programming languages].</p>

            <p className="text-gray-700">I am particularly drawn to [Company Name]'s [Mention something specific about the company that interests you, e.g., company culture, mission, values]. I believe my skills and values align perfectly with your company's goals, and I am eager to contribute to a dynamic and innovative environment.</p>

            <p className="text-gray-700">My resume, attached for your review, provides further details on my qualifications and accomplishments. I am available for an interview at your earliest convenience and can be reached at [Your Phone Number] or [Your Email].</p>

            <p className="text-gray-700">Thank you for your time and consideration. I look forward to the possibility of speaking with you soon.</p>

            <p className="text-gray-700">Sincerely,</p>
            <p className="font-bold">Your Name</p>
        </div>
    </div>

  );
};

const CoverLetterTemplate4 = (formData: any): JSX.Element => {
  return (
    <div className="container mx-auto p-6">
        <div className="flex justify-between mb-6">
            <div>
                <h1 className="text-2xl font-bold mb-2">Your Name</h1>
                <p className="text-gray-500">Your Address</p>
                <p className="text-gray-500">Your Phone Number</p>
                <p className="text-gray-500">Your Email</p>
                <p className="text-gray-500">Your LinkedIn Profile (Optional)</p>
            </div>
            <div>
                <p className="text-gray-700">Date</p>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700">Hiring Manager Name (If Known)</p>
            <p className="text-gray-700">Company Name</p>
            <p className="text-gray-700">Company Address</p>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-2">Subject: Application for [Job Title] Position</h2>
            <p className="text-gray-700">Dear [Hiring Manager Name],</p>
            <p className="text-gray-700">I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job posting].</p>
            <p className="text-gray-700">With my [Number] years of experience in [Relevant Field] and proven track record of success in [List 2-3 key achievements], I am confident I possess the skills and drive to excel in this role and significantly contribute to your team's success.</p>

            <p className="text-gray-700">In my previous role as [Your Previous Role] at [Your Previous Company], I was responsible for [List 2-3 key responsibilities]. I have a strong understanding of [List 2-3 key skills] and am proficient in using tools such as [List relevant tools e.g., software, programming languages].</p>

            <p className="text-gray-700">I am particularly drawn to [Company Name]'s [Mention something specific about the company that interests you, e.g., company culture, mission, values]. I believe my skills and values align perfectly with your company's goals, and I am eager to contribute to a dynamic and innovative environment.</p>

            <p className="text-gray-700">My resume, attached for your review, provides further details on my qualifications and accomplishments. I am available for an interview at your earliest convenience and can be reached at [Your Phone Number] or [Your Email].</p>

            <p className="text-gray-700">Thank you for your time and consideration. I look forward to the possibility of speaking with you soon.</p>

            <p className="text-gray-700">Sincerely,</p>
            <p className="font-bold">Your Name</p>
        </div>
    </div>

  )
}


const CoverLetterTemplate5 = (formData: any): JSX.Element => {
  return (

    <div className="container mx-auto p-6">
        <div className="flex justify-between mb-6">
            <div>
                <h1 className="text-2xl font-bold mb-2">Your Name</h1>
                <p className="text-gray-500">Your Address</p>
                <p className="text-gray-500">Your Phone Number</p>
                <p className="text-gray-500">Your Email</p>
                <p className="text-gray-500">Your LinkedIn Profile (Optional)</p>
            </div>
            <div>
                <p className="text-gray-700">Date</p>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700">Hiring Manager Name (If Known)</p>
            <p className="text-gray-700">Company Name</p>
            <p className="text-gray-700">Company Address</p>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-2">Subject: Application for [Job Title] Position</h2>
            <p className="text-gray-700">Dear [Hiring Manager Name],</p>
            <p className="text-gray-700">I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job posting].</p>
            <p className="text-gray-700">With my [Number] years of experience in [Relevant Field] and proven track record of success in [List 2-3 key achievements], I am confident I possess the skills and drive to excel in this role and significantly contribute to your team's success.</p>

            <p className="text-gray-700">In my previous role as [Your Previous Role] at [Your Previous Company], I was responsible for [List 2-3 key responsibilities]. I have a strong understanding of [List 2-3 key skills] and am proficient in using tools such as [List relevant tools e.g., software, programming languages].</p>

            <p className="text-gray-700">I am particularly drawn to [Company Name]'s [Mention something specific about the company that interests you, e.g., company culture, mission, values]. I believe my skills and values align perfectly with your company's goals, and I am eager to contribute to a dynamic and innovative environment.</p>

            <p className="text-gray-700">My resume, attached for your review, provides further details on my qualifications and accomplishments. I am available for an interview at your earliest convenience and can be reached at [Your Phone Number] or [Your Email].</p>

            <p className="text-gray-700">Thank you for your time and consideration. I look forward to the possibility of speaking with you soon.</p>

            <p className="text-gray-700">Sincerely,</p>
            <p className="font-bold">Your Name</p>
        </div>
    </div>
    
  );
}


export { CoverLetterTemplate1, CoverLetterTemplate2, CoverLetterTemplate3, CoverLetterTemplate4, CoverLetterTemplate5 };

