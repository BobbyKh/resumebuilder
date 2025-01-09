import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/Api";

const DocumentCategory = () => {
  const [documents, setDocuments] = useState<any>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/documentcategory`);
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching Document data from backend:", error);
      }
    };

    fetchDocuments();
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "center-bottom",
    });
  }, []);

  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url(bg.png)" }}>
      <div className="max-w-7xl mx-auto p-4 sm:p-10 lg:py-20">
        <div className="max-w-5xl mx-auto text-center tracking-widest pb-10 lg:pb-20">
          <p className="pb-4 text-xl font-bold text-[#1e3a8a]">
            Document
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1e3a8a]">
            The right place for you, <span className="text-[#1e3a8a]">the professional document</span>
          </h1>
          <p className="text-xl sm:text-2xl font-light px-10 py-6 text-black">
            Documents are an essential part of any business. They are used to communicate important information, provide evidence of a transaction, and to serve as a proof of a business's existence. Our document templates are designed to be easy to use, customizable, and professional. They can be used to create a wide range of documents, from simple letters to complex contracts.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-6 lg:mt-10">
          {documents.slice(0, 3).map((plan: any) => (
            <div
              key={plan.id}
              className="flex-1 gap-4 w-full mb-6 bg-white rounded-xl shadow-[#1e3a8a] shadow-xl transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#1e3a8a] border-2 border-[#1e3a8a]"
              data-aos="zoom-in"
            >
              <div className="text-center p-12">
                <p className=" text-3xl lg:text-2xl xl:text-3xl pb-4 text-black font-sans font-semibold">
                  {plan.name.toUpperCase()}
                </p>
                <div className="flex justify-center items-center">
                  <span className="font-normal text-xl inline-block align-text-middle text-blue-600">
                    {plan.description}
                  </span>
                </div>
              </div>
              <div className="bg-[#1e3a8a] rounded-b-xl border-t-2 border-[#1e3a8a] p-10">
                <ul className="space-y-4">
                  {Array.isArray(plan.features) ? plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3 text-white animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white">{feature}</span>
                    </li>
                  )) : null}
                </ul>
                <Link to={`/${plan.name}/editor/`}>
                  <button
                    type="button"
                    className="w-full text-center text-lg text-white mt-8 p-3 rounded-lg border-2 border-white shadow-[0_0_10px_#1e3a8a] transition hover:text-white hover:shadow-[0_0_15px_#1e3a8a] hover:visible"
                    style={{ visibility: "visible" }}
                    data-aos="flip-up"
                  >
                    <span className="font-semibold animate-border animate-font">View</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentCategory;

