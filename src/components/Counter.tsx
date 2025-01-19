import axios from "axios";
import API_URL from "../api/Api";
import { useEffect, useState } from "react";

interface Counter {
  id: number;
  title: string;
  description: string;
  label: string;
  value: string;
  icon: string;
  image: string;
}

const Counter = () => {
  const [counter, setCounter] = useState<Counter[]>([]);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/counter`);
        setCounter(response.data);
      } catch (error) {
        console.error("Error fetching Counter:", error);
      }
    };
    fetchCounter();
  }, []);

  return (
    <div className="bg-blue-800 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 px-8">
          <div className="relative">
            <img
              src="https://cvcreatoronline.com/wp-content/uploads/2021/12/Douglas-Hammond.png"
              alt="Resume Builder Image"
              className="rounded-xl shadow-lg max-w-xs ml-8"
            />
            <div className="absolute top-0 left-0 bg-white bg-opacity-70 py-1 px-3 rounded-br-lg ml-8">
              <h4 className="text-lg font-bold text-blue-800">Trusted by Professionals</h4>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-white px-8">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg mb-8">
            We empower professionals to build resumes that stand out and secure their dream jobs. Here's what we've achieved so far:
          </p>
          <div className="grid grid-cols-2 gap-8">
            {counter.map((item) => (
              <div key={item.id} className="text-center">
                <h3 className="text-5xl font-extrabold">{item.value}</h3>
                <p className="mt-2 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

