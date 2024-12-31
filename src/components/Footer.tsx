import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../api/Api';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    interface SocialLink {
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
        github: string;
        youtube: string;
    }

    const [social , setSocial ] = useState<SocialLink>(
        {
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            github: '',
            youtube: '',
        }
        
    );

    useEffect(() => {
        const fetchSocial = async () => {
            
        try {

            const response = await axios.get(`${API_URL}/api/organization/`);
            setSocial(response.data);
            console.log(response.data);

        } catch (error) {

            console.error('Error fetching social media links:', error);
        }

        }
        fetchSocial();
    });

    return (
        <footer style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/blue-toned-pack-paper-sheets-with-copy-space_23-2148320442.jpg)', animation: 'bg 60s ease-in-out infinite' }} className="bg-no-repeat bg-cover bg-center p-2 md:p-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h5 className="text-black font-semibold mb-4">Solutions</h5>
                        <ul className="space-y-2">
                            {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map((solution, index) => (
                                <li key={solution} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-black">
                                        {solution}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-black font-semibold mb-4" data-aos="fade-up">
                            Support
                        </h5>
                        <ul className="space-y-2" data-aos="fade-up">
                            {["Submit ticket", "Documentation", "Guides"].map((support, index) => (
                                <li key={support} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-black">
                                        {support}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-black font-semibold mb-4" data-aos="fade-up">
                            Company
                        </h5>
                        <ul className="space-y-2" data-aos="fade-up">
                            {["About", "Blog", "Jobs", "Press"].map((company, index) => (
                                <li key={company} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-black">
                                        {company}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-black font-semibold mb-4" data-aos="fade-up">
                            Legal
                        </h5>
                        <ul className="space-y-2" data-aos="fade-up">
                            {["Terms of service", "Privacy policy", "License"].map((legal, index) => (
                                <li key={legal} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-black">
                                        {legal}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                 
                </div>

                <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span
                        className="text-sm text-black sm:text-center dark:text-gray-400 animate-fadeInUp"
                        data-aos="fade-up"
                    >
                        © 2024{' '}
                        <a href="https://flowbite.com/" className="hover:text-red-600 text-center transition-colors duration-300">
                            Developed by Dpyther 
                        </a>
                        . All Rights Reserved.
                    </span>
                    {social.facebook && social.twitter && social.instagram && social.linkedin && social.github && social.youtube && (
                        <span
                            className="text-sm text-black sm:text-center dark:text-gray-400 animate-fadeInUp"
                            data-aos="fade-up"
                        >
                            Made with ❤️ by ResuTeam
                        </span>
                    )}
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
                        {[
                            { icon: faGithub, color: "text-red-800 hover:text-red-200" },
                            { icon: faLinkedin, color: "text-blue-600 hover:text-blue-900" },
                            { icon: faTwitter, color: "text-blue-600 hover:text-blue-900" },
                            { icon: faFacebook, color: "text-blue-600 hover:text-blue-900" },
                            { icon: faInstagram, color: "text-blue-600 hover:text-blue-900" },
                            { icon: faYoutube, color: "text-blue-600 hover:text-blue-900" },
                        ].map(({ icon, color }, index) => (
                            <a
                                key={index}
                                href="#"
                                className={color}
                                data-aos="fade-up"
                            >
                                <FontAwesomeIcon icon={icon} className="text-blue-800" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



