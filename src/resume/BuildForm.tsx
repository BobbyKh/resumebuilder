import AOS from 'aos';
import 'aos/dist/aos.css';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Template from './Template';

const BuildForm = () => {
  const [category, setCategory] = useState<string>('');
  const [formDetails, setFormDetails] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);


  const [resumeCategories, setResumeCategories] = useState<string[]>([]);
  useEffect(() => {
    const fetchResumeCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/resume_category');
        const resumeCategories = response.data;
        setResumeCategories(resumeCategories.map((category: { name: any; }) => category.name));
      } catch (error) {
        console.error(error);
      }
    };

    fetchResumeCategories();
  }, []);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    if (e.target.value === 'resume') {
      setFormDetails({
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        skills: 'Skills',
        education: 'Education',
        work_experience: 'Work Experience',
        achievements: 'Achievements',
        hobbies: 'Hobbies',
        references: 'References',
      });
    } else if (e.target.value === 'cv') {
      setFormDetails({
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        skills: 'Skills',
        education: 'Education',
        work_experience: 'Work Experience',
        achievements: 'Achievements',
        research_interests: 'Research Interests',
        certifications: 'Certifications',
        languages: 'Languages',
        references: 'References',
      });
    } else if (e.target.value === 'cover_letter') {
      setFormDetails({
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        job_title: 'Job Title',
        company_name: 'Company Name',
        job_description: 'Job Description',
        skills: 'Skills',
        achievements: 'Achievements',
        education: 'Education',
        work_experience: 'Work Experience',
        certifications: 'Certifications',
        languages: 'Languages',
        references: 'References',
      });
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj: Record<string, string> = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formDataObj[key] = value.toString();
    });
    if (profilePicture) {
      formDataObj['profile_picture'] = URL.createObjectURL(profilePicture);
    }
    setFormData(formDataObj);
    console.log(formData);
  };

  const handleProfilePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePicture(e.target.files[0]);
    }
  };

  return (

    <div className="container mx-auto p-4 md:p-12" data-aos="fade-down">
      <Template></Template>
      
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 mt-4">
        <h1 className="text-3xl font-bold flex items-center mb-6" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
          <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8 mr-2" />
          Select Document Type
        </h1>
        <select className="p-2 border-2 border-gray-300 rounded-md w-full" data-aos="fade-up" data-aos-duration="1000" value={category} onChange={handleCategoryChange}>
          <option value="">Select</option>
          
          {resumeCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {category && (
        <form className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up" data-aos-duration="1000" onSubmit={handleFormSubmit}>
          <div className="space-y-2">
            <label className="text-lg" htmlFor="profile_picture">Profile Picture</label>
            <input className="p-2 border-2 border-gray-300 rounded-md w-full" type="file" id="profile_picture" name="profile_picture" onChange={handleProfilePictureChange} accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
            {profilePicture && (
              <img src={URL.createObjectURL(profilePicture)} className="w-48 h-48 rounded-md mt-2" alt="Profile Picture Preview" />
            )}
          </div>
          {Object.keys(formDetails).map((key) => (
            <div className="space-y-2" key={key}>
              <label className="text-lg" htmlFor={key}>{formDetails[key]}</label>
              <input className="p-2 border-2 border-gray-300 rounded-md w-full" type="text" id={key} name={key} />
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">Submit</button>
        </form>
      )}
    </div>
    
  );
};

export default BuildForm;


