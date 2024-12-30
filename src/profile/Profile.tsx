import { faBookOpen, faCalendar, faChartPie, faClock, faCode, faEnvelope, faFile, faGear, faLightbulb, faList, faMapMarkerAlt, faPhone, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import 'react-circular-progressbar/dist/styles.css';import "aos/dist/aos.css";
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
    <div className="bg-initial container mx-auto p-6" data-aos="fade-in">
  <div className="grid gap-6 mb-6 md:grid-cols-2" data-aos="fade-up">
    <div className="rounded-lg shadow-lg p-6 border border-gray-700 animate-fade-in relative" data-aos="zoom-in">
      <button
        className="absolute top-2 right-2 text-black hover:text-blue-500"
        onClick={() => alert("Settings button clicked!")}
      >
        <FontAwesomeIcon icon={faGear} className="text-2xl text-blue-800" />
      </button>
      <img
        className="w-24 h-24 rounded-full border-4 border-blue-800 mb-4"
        src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg"
        alt={user.name}
        data-aos="zoom-in"
      />
      <h2 className="text-2xl font-bold text-blue-800" data-aos="fade-up">{user.name}</h2>
      <p className="text-sm text-blue-800 font-medium" data-aos="fade-up">Software Engineer</p>
      <p className="text-sm text-[#d5420b]" data-aos="fade-up">{user.bio}</p>
      <div className="mt-4 text-black" data-aos="fade-up">
        <p className="text-sm">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg text-blue-800" />
          <span className="font-medium">Email:</span> user@example.com
        </p>
        <p className="text-sm mt-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg text-blue-800" />
          <span className="font-medium">Phone:</span> +123 456 7890
        </p>
        <p className="text-sm mt-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg text-blue-800" />
          <span className="font-medium">Address:</span> 123 Main Street, Anytown, USA
        </p>
      </div>
    </div>

    <div className="rounded-lg shadow-lg p-4 bg-gray-800 border border-gray-700 animate-fade-in" data-aos="fade-up">
      <h3 className="text-xl font-semibold text-black mb-4 flex items-center" data-aos="fade-up">
        <FontAwesomeIcon icon={faUser} className="mr-2 text-2xl text-[#d5420b]" />
        Profile Details
      </h3>
      <ul className="space-y-4 text-black divide-y divide-gray-700" data-aos="fade-up">
        <li className="flex justify-between items-center py-2" data-aos="fade-up">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faCode} className="mr-2 text-lg text-[#d5420b]" />
            <span className="font-medium">Work Experience:</span>
          </span>
          <span className="text-sm">{user.details.workExperience ?? "N/A"}</span>
        </li>
        <li className="flex justify-between items-center py-2" data-aos="fade-up">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faReadme} className="mr-2 text-lg text-[#d5420b]" />
            <span className="font-medium">Education:</span>
          </span>
          <span className="text-sm">{user.details.education ?? "N/A"}</span>
        </li>
        <li className="flex flex-col py-2" data-aos="fade-up">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faList} className="mr-2 text-lg text-[#d5420b]" />
            <span className="font-medium">Skills:</span>
          </span>
          <ul className="ml-6 space-y-1 text-sm mt-2" data-aos="fade-up">
            {user.details.skills?.length ? (
              user.details.skills.map((skill, index) => (
                <li key={index} className="border-l-2 border-[#d5420b] pl-2">
                  {skill}
                </li>
              ))
            ) : (
              <li>No skills listed.</li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className=" rounded-lg  shadow-lg p-6 md:p-8 bg-gray-800 border border-gray-700 animate-fade-in" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-white mb-4 md:mb-6 flex items-center" data-aos="fade-up">
      <FontAwesomeIcon icon={faFile} className="mr-2 text-lg text-[#d5420b]" />
      Subscription Details
    </h3>
    <ul className="space-y-4 text-white divide-y divide-gray-700" data-aos="fade-up">
      <li className="flex justify-between items-center py-2" data-aos="fade-up">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-lg text-[#d5420b]" />
          <span className="font-medium">Subscription Status:</span>
        </span>
        <span className="font-semibold text-green-500">Active</span>
      </li>
      <li className="flex justify-between items-center py-2" data-aos="fade-up">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} className="mr-2 text-lg text-[#d5420b]" />
          <span className="font-medium">Subscription Type:</span>
        </span>
        <span className="font-semibold">Monthly</span>
      </li>
      <li className="flex justify-between items-center py-2" data-aos="fade-up">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-lg text-[#d5420b]" />
          <span className="font-medium">Subscription Date:</span>
        </span>
        <span className="font-semibold">2023-11-01</span>
      </li>
    </ul>
  </div>
  <div className="rounded-lg mt-6 shadow-lg p-4 md:p-6 bg-gray-800 border border-gray-700" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
    <h3 className="text-xl font-semibold text-white mb-4 md:mb-6 flex items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
      <FontAwesomeIcon icon={faChartPie} className="mr-4 text-2xl text-[#d5420b]" />
      Professional Progress
    </h3>
    <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <div className="flex items-center justify-between bg-gray-700 rounded-lg shadow-lg p-4 md:p-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFile} className="mr-4 text-2xl text-[#d5420b]" />
          <span className="font-medium text-white">Total Resumes Generated:</span>
        </div>
        <span className="font-semibold text-3xl text-white">{user.resumes.length}</span>
        <span className="hidden group-hover:block absolute top-0 right-0 px-2 py-1 text-sm font-semibold text-white bg-[#d5420b] rounded-b">{user.resumes.length} Resumes Generated</span>
      </div>
      <div className="flex items-center justify-between bg-gray-700 rounded-lg shadow-lg p-4 md:p-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFile} className="mr-4 text-2xl text-[#d5420b]" />
          <span className="font-medium text-white">Total Templates Selected:</span>
        </div>
        <span className="font-semibold text-3xl text-white">{user.templates.length}</span>
        <span className="hidden group-hover:block absolute top-0 right-0 px-2 py-1 text-sm font-semibold text-white bg-[#d5420b] rounded-b">{user.templates.length} Templates Selected</span>
      </div>
    </div>
  </div>
  <div className="rounded-lg mt-6  shadow-lg p-6 md:p-8 bg-gray-800 border border-gray-700 animate-fade-in" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-white mb-4 md:mb-6 flex items-center" data-aos="fade-up">
      <FontAwesomeIcon icon={faFile} className="mr-2 text-lg text-[#d5420b]" />
      Templates Used
    </h3>
    <Slider {...sliderSettings} className="gap-4 md:gap-6 " data-aos="fade-up">
      {user.templates.length > 0 ? (
        user.templates.map((template, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-4 md:p-6 transition duration-300 ease-in-out hover:shadow-xl group" data-aos="zoom-in">
            <div className="flex items-center justify-between pb-2 md:pb-4">
              <div className="flex items-center">
                <span className="text-white">{template}</span>
              </div>
              <button className="mt-4 bg-[#d5420b] text-white py-2 px-4 rounded hover:bg-[#bf3b0a] hover:scale-105 transition duration-300 opacity-0 group-hover:opacity-100" data-aos="fade-up">
              View
            </button>
            </div>
            <img src="https://marketplace.canva.com/EAFszEvkM50/1/0/1131w/canva-simple-professional-cv-resume-J74DKa9D3nk.jpg" className="h-[400px] w-full max-h-[400px] rounded-md mr-2" alt={template} />
          
          </div>
        ))
      ) : (
        <p className="text-white" data-aos="fade-up">No templates used.</p>
      )}
    </Slider>
  </div>
  <div className="mt-6 rounded-lg shadow-lg p-4 bg-gray-800 border border-gray-700 animate-fade-in" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-white mb-4 flex items-center" data-aos="fade-up">
      <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-lg text-[#d5420b]" />
      Generated Resumes
    </h3>
    <Slider {...sliderSettings} className="">
      {user.resumes.length > 0 ? (
        user.resumes.map((resume, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out hover:shadow-xl mb-4" data-aos="fade-up">
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
        <div className="py-3 text-white flex items-center" data-aos="fade-up">
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

