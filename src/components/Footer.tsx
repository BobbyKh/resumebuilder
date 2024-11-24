import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <footer className="bg-[#000000] p-2 md:p-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h5 className="text-white font-semibold mb-4">Solutions</h5>
                        <ul className="space-y-2">
                            {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map((solution, index) => (
                                <li key={solution} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-white">
                                        {solution}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4" data-aos="fade-up">
                            Support
                        </h5>
                        <ul className="space-y-2" data-aos="fade-up">
                            {["Submit ticket", "Documentation", "Guides"].map((support, index) => (
                                <li key={support} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-white">
                                        {support}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4" data-aos="fade-up">
                            Company
                        </h5>
                        <ul className="space-y-2" data-aos="fade-up">
                            {["About", "Blog", "Jobs", "Press"].map((company, index) => (
                                <li key={company} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-white">
                                        {company}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4" data-aos="fade-up">
                            Legal
                        </h5>
                        <ul className="space-y-2" data-aos="fade-up">
                            {["Terms of service", "Privacy policy", "License"].map((legal, index) => (
                                <li key={legal} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                    <a href="#" className="hover:text-red-600 transition-colors duration-300 text-white">
                                        {legal}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4" data-aos="fade-up">
                            Subscribe to our newsletter
                        </h5>
                        <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="400">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className="flex " data-aos="fade-up" data-aos-delay="500">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-200 text-white placeholder-gray-500 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600 flex-grow"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white py-2 px-4 rounded-r-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span
                        className="text-sm text-white sm:text-center dark:text-gray-400 animate-fadeInUp"
                        data-aos="fade-up"
                    >
                        © 2024{' '}
                        <a href="https://flowbite.com/" className="hover:text-red-600 transition-colors duration-300">
                            ResuTeam
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        {[
                            { icon: faGithub, color: "hover:text-red-600" },
                            { icon: faLinkedin, color: "hover:text-red-600" },
                            { icon: faTwitter, color: "hover:text-red-600" },
                            { icon: faFacebook, color: "hover:text-red-600" },
                            { icon: faInstagram, color: "hover:text-red-600" },
                            { icon: faYoutube, color: "hover:text-red-600" },
                        ].map(({ icon, color }, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`text-red-600 ${color} transition-colors duration-300`}
                                data-aos="fade-up"
                            >
                                <FontAwesomeIcon icon={icon} className="text-red-600" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


