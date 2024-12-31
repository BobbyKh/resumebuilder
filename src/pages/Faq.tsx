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
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            {/* Header Section */}
            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                    This section provides answers to some of the most common questions.
                </p>
            </div>

            {/* FAQ List */}
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.question}
                        className="rounded-lg bg-gray-100 p-5 shadow-md"
                        data-aos="fade-up"
                    >
                        <div
                            className="mb-4 flex items-center justify-between gap-4 border-b pb-4 cursor-pointer"
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="flex items-center">
                                <FaQuestionCircle className="mr-2 text-indigo-500" />
                                <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                                    {faq.question}
                                </h3>
                            </div>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </div>
                        <div
                            className={`text-gray-500 transition-all duration-300 ${
                                openIndex === index ? 'block' : 'hidden'
                            }`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Faq;
