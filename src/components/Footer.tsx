import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="bg-white text-gray-700 py-12" >
        <div className="container mx-auto px-6 md:px-12" >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8" >
            <div data-aos="fade-up">
              <h5 className="text-gray-600 font-semibold mb-4" >Solutions</h5>
              <ul className="space-y-2">
                <li data-aos="fade-up" data-aos-delay="100"><a href="#" className="hover:text-gray-900">Marketing</a></li>
                <li data-aos="fade-up" data-aos-delay="200"><a href="#" className="hover:text-gray-900">Analytics</a></li>
                <li data-aos="fade-up" data-aos-delay="300"><a href="#" className="hover:text-gray-900">Automation</a></li>
                <li data-aos="fade-up" data-aos-delay="400"><a href="#" className="hover:text-gray-900">Commerce</a></li>
                <li data-aos="fade-up" data-aos-delay="500"><a href="#" className="hover:text-gray-900">Insights</a></li>
              </ul>
            </div>
      
            <div>
              <h5 className="text-gray-600 font-semibold mb-4" data-aos="fade-up">Support</h5>
              <ul className="space-y-2" data-aos="fade-up">
                <li data-aos ="fade-up" data-aos-delay="100"><a href="#" className="hover:text-gray-900">Submit ticket</a></li>
                <li data-aos ="fade-up" data-aos-delay="200"><a href="#" className="hover:text-gray-900">Documentation</a></li>
                <li data-aos="fade-up" data-aos-delay="300"><a href="#" className="hover:text-gray-900">Guides</a></li>
              </ul>
            </div>
   
            <div>
              <h5 className="text-gray-600 font-semibold mb-4" data-aos="fade-up">Company</h5>
              <ul className="space-y-2" data-aos="fade-up">
                <li data-aos="fade-up" data-aos-delay="100"><a href="#" className="hover:text-gray-900">About</a></li>
                <li data-aos="fade-up" data-aos-delay="200"><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li data-aos="fade-up" data-aos-delay="300"><a href="#" className="hover:text-gray-900">Jobs</a></li>
                <li data-aos="fade-up" data-aos-delay="400"><a href="#" className="hover:text-gray-900">Press</a></li>
              </ul>
            </div>
      
            <div>
              <h5 className="text-gray-600 font-semibold mb-4" data-aos="fade-up">Legal</h5>
              <ul className="space-y-2" data-aos="fade-up">
                <li data-aos="fade-up" data-aos-delay="100"><a href="#" className="hover:text-gray-900">Terms of service</a></li>
                <li data-aos="fade-up" data-aos-delay="200"><a href="#" className="hover:text-gray-900">Privacy policy</a></li>
                <li data-aos="fade-up" data-aos-delay="300"><a href="#" className="hover:text-gray-900">License</a></li>
              </ul>
            </div>
      
            <div>
              <h5 className="text-gray-600 font-semibold mb-4" data-aos="fade-up">Subscribe to our newsletter</h5>
              <p className="text-sm mb-4" data-aos="fade-up" data-aos-delay="400">The latest news, articles, and resources, sent to your inbox weekly.</p>
              <form className="flex" data-aos="fade-up" data-aos-delay="500">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-200 text-gray-700 placeholder-gray-500 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
      
          <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400 animate-fadeInUp" data-aos="fade-up">
              © 2024 <a href="https://flowbite.com/" className="hover:underline">ResuTeam</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-700 hover:text-gray-900 animate-fadeInUp" data-aos="fade-up">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 animate-fadeInUp" data-aos="fade-up">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 animate-fadeInUp" data-aos="fade-up">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 animate-fadeInUp" data-aos="fade-up">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 animate-fadeInUp" data-aos="fade-up">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 animate-fadeInUp" data-aos="fade-up">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </footer>

            
      

    )
}

export default Footer


