import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Faq = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="bg-[#0b1320] py-16" style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}>
            <h1 className="text-4xl text-white font-bold text-center mb-10" data-aos="fade-down">Frequently<span className="text-[#d5420b]"> Asked Questions</span></h1>
            <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                    <details className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-up">
                        <summary className="font-bold text-xl text-[#d5420b] cursor-pointer">What is the purpose of ResuMaster?</summary>
                        <p className="mt-2 text-bold">
                            ResuMaster is a platform that helps users create a resume in a few minutes. It provides a variety of templates and a user-friendly interface to make the process of creating a resume easy and efficient.
                        </p>
                    </details>
                    <details className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-up" data-aos-delay="200">
                        <summary className="font-bold text-xl text-[#d5420b] cursor-pointer">How does ResuMaster work?</summary>
                        <p className="mt-2 text-bold">
                            ResuMaster uses a combination of natural language processing and machine learning algorithms to analyze the user's input and generate a resume.
                        </p>
                    </details>
                    <details className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-up" data-aos-delay="400">
                        <summary className="font-bold text-xl text-[#d5420b] cursor-pointer">Is ResuMaster free?</summary>
                        <p className="mt-2 text-bold">
                            Yes, ResuMaster is free to use. However, some features may require a subscription or a one-time payment.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    )
    

}

export default Faq
