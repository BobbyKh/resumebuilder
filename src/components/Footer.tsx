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

  const [social, setSocial] = useState<SocialLink>({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    github: '',
    youtube: '',
  });

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/organization/`);
        setSocial(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching social media links:', error);
      }
    };
    fetchSocial();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Solutions */}
          <div>
            <h5 className="text-lg font-bold mb-4">Solutions</h5>
            <ul className="space-y-2">
              {['Marketing', 'Analytics', 'Automation', 'Commerce', 'Insights'].map((solution) => (
                <li key={solution}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-bold mb-4">Support</h5>
            <ul className="space-y-2">
              {['Submit ticket', 'Documentation', 'Guides'].map((support) => (
                <li key={support}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {support}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-lg font-bold mb-4">Company</h5>
            <ul className="space-y-2">
              {['About', 'Blog', 'Jobs', 'Press'].map((company) => (
                <li key={company}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {company}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-lg font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
              {['Terms of service', 'Privacy policy', 'License'].map((legal) => (
                <li key={legal}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {legal}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              {[
                { icon: faFacebook, link: social.facebook },
                { icon: faTwitter, link: social.twitter },
                { icon: faInstagram, link: social.instagram },
                { icon: faLinkedin, link: social.linkedin },
                { icon: faGithub, link: social.github },
                { icon: faYoutube, link: social.youtube },
              ].map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-800 transition-colors text-xl"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2024{' '}
            <a href="https://flowbite.com/" className="hover:text-blue-400">
              Developed by Dpyther
            </a>
            . All Rights Reserved.
          </p>
          {social.facebook && social.twitter && social.instagram && social.linkedin && social.github && social.youtube && (
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Made with ❤️ by ResuTeam
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
