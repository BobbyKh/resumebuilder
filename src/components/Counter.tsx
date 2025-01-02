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
    <section className="text-gray-600 body-font bg-blue-50">
      {counter.map((counterItem) => (
        <div key={counterItem.id} className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                {counterItem.title}
              </h1>
              <div className="leading-relaxed text-justify">{counterItem.description}</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-blue-600">
                {counterItem.value}
              </h2>
              <p className="leading-relaxed hover:text-blue-600">{counterItem.label}</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-1/2 rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="rounded shadow-lg w-full max-w-md mx-auto"
              src={counterItem.image} 
              alt="stats"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Counter;
