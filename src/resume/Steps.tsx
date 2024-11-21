import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faFile, faList } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Steps = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div data-aos="fade" className="flex flex-col items-center justify-center bg-white min-h-screen mt-5">
            <h1 className="text-4xl font-italic text-center" data-aos="zoom-in">How ResumMaster works</h1>
            <div className="flex flex-col items-center justify-center pt-12 w-full px-4">
                <div className="flex flex-col items-start justify-start w-full max-w-4xl space-y-6">
                    <div data-aos="fade-right" className="flex flex-col items-center justify-center w-full mb-4 shadow-lg  ">
                        <FontAwesomeIcon icon={faPencil} className="text-6xl" />
                        <span className="text-2xl font-semibold text-center">1. Fill in the blanks</span>
                        <p className="text-lg text-gray-600 text-center">Start by filling in your resume details.</p>
                    </div>
                    <div data-aos="fade-left" className="flex flex-col items-center justify-center w-full mb-4 shadow-lg ">
                        <FontAwesomeIcon icon={faFile} className="text-6xl" />
                        <span className="text-2xl font-semibold text-center">2. Pick a template</span>
                        <p className="text-lg text-gray-600 text-center">Select a resume template that embodies your style.</p>
                    </div>
                    <div data-aos="fade-right" className="flex flex-col items-center justify-center w-full shadow-lg">
                        <FontAwesomeIcon icon={faList} className="text-6xl" />
                        <span className="text-2xl font-semibold text-center">3. Download your CV</span>
                        <p className="text-lg text-gray-600 text-center">Download your resume instantly and make changes afterwards.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;

