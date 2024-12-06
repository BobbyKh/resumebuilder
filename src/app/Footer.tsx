import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t dark:border-gray-600 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-3xl animate-gradient-x"></div>
            <div className="flex items-center justify-center z-10">
                <a href="https://github.com/bradtraversy/resumebuilder" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://www.linkedin.com/in/bradtraversy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2" />
                </a>
                <a href="https://twitter.com/traversy_media" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2" />
                </a>
                <a href="https://www.facebook.com/learnwithbrad/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl mx-2" />
                </a>
                <a href="https://www.instagram.com/traversy.media/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
                </a>
                <a href="https://www.youtube.com/bradtraversy" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="text-2xl mx-2" />
                </a>
            </div>
            <p className="text-sm text-center z-10"> Developed by Dpyther @ 2024</p>
        </footer>
    )
}
export default Footer

