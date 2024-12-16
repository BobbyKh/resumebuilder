import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import API_URL from '../api/Api';
import { useEffect, useState } from 'react';

const Faq = () => {

    interface FAQ {
        question: string;
        answer: string;
    }

    const [faqs, setFaqs] = useState<FAQ[]>([]);
        
    useEffect (() => {
        const fetchFaqs = async () => {
            try {
                const response = await axios.get(`${API_URL}/faq`);
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

    return (
        <div className="bg-[#0b1320] py-16 p-5" style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}>
            <h1 className="text-4xl text-white font-bold text-center mb-10" data-aos="fade-down">Frequently<span className="text-[#d5420b]"> Asked Questions</span></h1>
            <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-up">
                            <summary className="font-bold text-xl text-[#d5420b] cursor-pointer">{faq.question}</summary>
                            <p className="mt-2 text-bold">{faq.answer}</p>
                        </details>
                    ))}
                   
                </div>
            </div>
        </div>
    )
    

}

export default Faq

