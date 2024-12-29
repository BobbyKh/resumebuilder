import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import API_URL from '../api/Api';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const Faq = () => {

    interface FAQ {
        question: string;
        answer: string;
    }

    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
        
    useEffect (() => {
        const fetchFaqs = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/faq`);
                setFaqs(response.data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };
        fetchFaqs();
    }, []);

    useEffect(() => {
        AOS.init();
    }, [])

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-16 px-5 sm:px-10 relative">
            <img src="question.png" alt="Question" className="absolute top-0 right-0 w-32 h-32 m-4 animate-bounce" />
            <h1 className="text-4xl text-blue-600 font-bold text-center mb-10" data-aos="fade-down">Frequently Asked Questions</h1>
            <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                <div key={faq.question} className="bg-white rounded-md shadow-md p-4" data-aos="fade-up">
                    <div className="font-medium text-lg text-gray-700 cursor-pointer flex justify-between items-center" onClick={() => toggleFaq(index)}>
                    <div className="flex items-center">
                        <FaQuestionCircle className="mr-2 text-blue-500" />
                        {faq.question}
                    </div>
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    <div className={`mt-2 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}>
                    {faq.answer}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Faq;
