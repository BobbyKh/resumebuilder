import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const [pricing, setPricing] = useState<any>([]);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/pricing');
                setPricing(response.data);
            } catch (error) {
                console.error('Error fetching pricing data from backend:', error);
            }
        };

        fetchPricing();
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    return (
        <div 
            className="container mx-auto flex flex-col justify-center items-center p-4 md:p-8 md:w-2/3 lg:w-1/2"
        >
            <h1 className="text-4xl font-bold mb-6" data-aos="fade-down">Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {pricing.map((item: any) => (
                    <div 
                        className="bg-white p-6 rounded-lg shadow-lg" 
                        key={item.id}
                        data-aos="fade-up"
                    >
                        <h2 className="text-2xl font-bold">{item.name}</h2>
                        <p className="text-lg text-center">${item.price}/month</p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>{item.users} users</li>
                            <li>{item.storage} GB storage</li>
                            <li>{item.features}</li>
                            <li className="flex justify-center">
                                <Link to={`/pricing/subscribe/${item.id}`}>
                                    <button 
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Subscribe
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;

