import { faBookOpen, faCalendar, faClock, faCode, faFile, faGear, faLightbulb, faList, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
interface Resume {
  title: string;
  date: string;
}

interface UserDetails {
  avatar_url: string;
  name: string;
  bio: string;
  details: {
    workExperience?: string | null;
    education?: string | null;
    skills?: string[] | null;
  };
  resumes: Resume[];
  templates: string[];
}

const Profile = () => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    const demoData: UserDetails = {
      avatar_url: "https://example.com/avatar.jpg",
      name: "John Doe",
      bio: "A passionate software developer.",
      details: {
        workExperience: "5 years at Tech Inc.",
        education: "B.Sc. in Computer Science",
        skills: ["JavaScript", "React", "Node.js"],
      },
      resumes: [
        { title: "Software Engineer Resume", date: "2023-10-01" },
        { title: "Frontend Developer Resume", date: "2023-09-15" },
      ],
      templates: ["Modern Template", "Classic Template"],
    };
    setUser(demoData);
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,  // Pause sliding on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  

  return (
    <div className="container mx-auto p-6">
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div className="rounded-lg shadow-lg p-4 bg-gray-800 border border-gray-700 animate-fade-in relative">
      <button
        className="absolute top-2 right-2 text-white hover:text-[#d5420b]"
        onClick={() => alert("Settings button clicked!")}
      >
        <FontAwesomeIcon icon={faGear} className="text-2xl" />
      </button>
      <img
        className="w-24 h-24 rounded-full border-4 border-[#d5420b] mb-4"
        src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg"
        alt={user.name}
      />
      <h2 className="text-2xl font-bold text-white">{user.name}</h2>
      <p className="text-sm text-[#d5420b]">{user.bio}</p>
    </div>

    <div className="rounded-lg shadow-lg p-4 bg-gray-800 border border-gray-700 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <FontAwesomeIcon icon={faUser} className="mr-2 text-2xl text-[#d5420b]" />
        Profile Details
      </h3>
      <ul className="space-y-4 text-white">
        <li className="flex justify-between items-center border-b border-gray-700 py-2">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faCode} className="mr-2 text-lg text-[#d5420b]" />
            <span className="font-medium">Work Experience:</span>
          </span>
          <span className="text-sm">{user.details.workExperience ?? ""}</span>
        </li>
        <li className="flex justify-between items-center border-b border-gray-700 py-2">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faReadme} className="mr-2 text-lg text-[#d5420b]" />
            <span className="font-medium">Education:</span>
          </span>
          <span className="text-sm">{user.details.education ?? ""}</span>
        </li>
        <li className=" justify-between items-center py-2">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faList} className="mr-2 text-lg text-[#d5420b]" />
            <span className="font-medium">Skills:</span>
          </span>
          <ul className="ml-6 space-y-1 text-sm">
            {user.details.skills?.map((skill, index) => (
              <li key={index} className="border-l-2 border-[#d5420b] pl-2">
                {skill}
              </li>
            )) ?? <p className="text-sm">No skills listed.</p>}
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className=" rounded-lg  shadow-lg p-6 md:p-8 bg-gray-800 border border-gray-700 animate-fade-in">
    <h3 className="text-xl font-semibold text-white mb-4 md:mb-6 flex items-center">
      <FontAwesomeIcon icon={faFile} className="mr-2 text-lg text-[#d5420b]" />
      Subscription Details
    </h3>
    <ul className="space-y-4 text-white divide-y divide-gray-700">
      <li className="flex justify-between items-center py-2">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-lg text-[#d5420b]" />
          <span className="font-medium">Subscription Status:</span>
        </span>
        <span className="font-semibold text-green-500">Active</span>
      </li>
      <li className="flex justify-between items-center py-2">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} className="mr-2 text-lg text-[#d5420b]" />
          <span className="font-medium">Subscription Type:</span>
        </span>
        <span className="font-semibold">Monthly</span>
      </li>
      <li className="flex justify-between items-center py-2">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-lg text-[#d5420b]" />
          <span className="font-medium">Subscription Date:</span>
        </span>
        <span className="font-semibold">2023-11-01</span>
      </li>
    </ul>
  </div>
  <div className="rounded-lg mt-6  shadow-lg p-6 md:p-8 bg-gray-800 border border-gray-700 animate-fade-in">
    <h3 className="text-xl font-semibold text-white mb-4 md:mb-6 flex items-center">
      <FontAwesomeIcon icon={faFile} className="mr-2 text-lg text-[#d5420b]" />
      Templates Used
    </h3>
    <Slider {...sliderSettings} className="gap-4 md:gap-6 ">
      {user.templates.length > 0 ? (
        user.templates.map((template, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-4 md:p-6 transition duration-300 ease-in-out hover:shadow-xl group">
            <div className="flex items-center justify-between pb-2 md:pb-4">
              <div className="flex items-center">
                <span className="text-white">{template}</span>
              </div>
              <button className="mt-4 bg-[#d5420b] text-white py-2 px-4 rounded hover:bg-[#bf3b0a] hover:scale-105 transition duration-300 opacity-0 group-hover:opacity-100">
              View
            </button>
            </div>
            <img src="https://marketplace.canva.com/EAFszEvkM50/1/0/1131w/canva-simple-professional-cv-resume-J74DKa9D3nk.jpg" className="h-[400px] w-full max-h-[400px] rounded-md mr-2" alt={template} />
          
          </div>
        ))
      ) : (
        <p className="text-white">No templates used.</p>
      )}
    </Slider>
  </div>
  <div className="mt-6 rounded-lg shadow-lg p-4 bg-gray-800 border border-gray-700 animate-fade-in">
    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
      <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-lg text-[#d5420b]" />
      Generated Resumes
    </h3>
    <Slider {...sliderSettings} className="">
      {user.resumes.length > 0 ? (
        user.resumes.map((resume, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out hover:shadow-xl mb-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img src="https://marketplace.canva.com/EAFszEvkM50/1/0/1131w/canva-simple-professional-cv-resume-J74DKa9D3nk.jpg" className="h-16 w-16 mr-2 rounded-lg" alt={resume.title} />
                <p className="text-lg font-medium text-white">{resume.title}</p>
              </div>
              <p className="text-xs text-white">Last Generated: {resume.date}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="py-3 text-white flex items-center">
          <FontAwesomeIcon icon={faTimes} className="mr-2 text-lg" />
          No resumes generated yet.
        </div>
      )}
    </Slider>
  </div>
</div>
  );
};

export default Profile;

