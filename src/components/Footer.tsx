import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (

        <footer className="flex flex-col items-center justify-center w-full h-24 border-t dark:border-gray-600">
            <div className="flex items-center justify-center">
                <a href="https://github.com/bradtraversy/resumebuilder" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://www.linkedin.com/in/bradtraversy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2" />
                </a>
                <a href="https://twitter.com/traversy_media" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2" />
                </a>
            </div>
            <p className="text-sm text-center"> 2023 Resume Builder</p>
        </footer>

    )
}

export default Footer
