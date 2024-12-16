import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { faEdit, faEllipsisV, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API_URL from "../api/Api";

const GenerateResume = () => {
    const { templateId } = useParams<{ templateId: string }>();
    const [htmlTemplate, setHtmlTemplate] = useState<string>('');
    const [resumeDataList, setResumeDataList] = useState<Array<{ [key: string]: string }>>([]);
    const [error, setError] = useState<string>('');

    const [showModal, setShowModal] = useState(false);
    const [selectedResumeHtml, setSelectedResumeHtml] = useState("");
    
    const handleOpenPreview = (html: string) => {
      setSelectedResumeHtml(html);
      setShowModal(true);
    };
    

    const handleClosePreview = () => {
      setShowModal(false);
    };
    


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
<<<<<<< HEAD
                const response = await axios.get(`https://resumaven.net/api/template/${templateId}`);
=======
                const response = await axios.get(`${API_URL}/template/${templateId}`);
>>>>>>> auth.bobby
                setHtmlTemplate(response.data.html || '');
            } catch (err) {
                console.error("Error fetching template:", err);
                setError("Failed to load the resume template.");
            }
        };

        if (templateId) fetchTemplate();
    }, [templateId]);

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
<<<<<<< HEAD
                const response = await axios.get(`https://resumaven.net/api/documentfield/${templateId}`);
=======
                const response = await axios.get(`${API_URL}/documentfield/${templateId}`);
>>>>>>> auth.bobby
                setResumeDataList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching document data:", error);
                setError("Failed to load the document data.");
            }
        };

        if (templateId) fetchDocumentData();
    }, [templateId]);

    return (
        <div className="container mx-auto p-4" data-aos="fade-up">
            <h1 className="text-2xl font-bold mb-6 text-white"></h1>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div
                    className="rounded-lg shadow-lg p-6 bg-[#0b1320]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Link to={`/resume/editor/${templateId}`}>
                        <div className="flex justify-end mb-4">
                            <button
                                className="animate-bounce bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                            >
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                                Add New
                            </button>
                        </div>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resumeDataList.map((resumeData, index) => {
                            let updatedHtml = htmlTemplate;
                            for (const [key, value] of Object.entries(resumeData)) {
                                const placeholder = new RegExp(`{{\\s*${key}\\s*}}`, "g");
                                updatedHtml = updatedHtml.replace(placeholder, value || "");
                            }
                            return (
                                <div
                                    key={index}
                                    className="border p-4 bg-[#0a111c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                                    data-aos="fade-up"
                                    data-aos-delay={`${index * 100}`}
                                >
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-2 right-2">
                                        <div className="dropdown dropdown-end">
                                            <label
                                                onClick={() => {
                                                    const dropdownContent = document.querySelector(
                                                        `.dropdown-content.menu[data-dropdown="${index}"]`
                                                    );
                                                    if (dropdownContent) {
                                                        dropdownContent.classList.toggle("hidden");

                                                    }
                                                }}
                                                className="cursor-pointer m-1 text-white hover:text-gray-300"
                                            >
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </label>
                                            <ul
                                                className="dropdown-content menu hidden p-2 shadow bg-gray-800 text-white rounded-box w-40"
                                                data-dropdown={index}
                                            >
                                                <li className="mb-1">
                                                    <Link
                                                        to={`/resume/editor/${templateId}/${resumeData.id}`}
                                                        className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded transition duration-300"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                        <span>Edit</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a
                                                        className="flex items-center gap-2 hover:bg-red-600 p-2 rounded transition duration-300"
                                                        onClick={() => {
                                                            axios
                                                                .delete(
                                                                    `http://127.0.0.1:8000/api/documentfield/${resumeData.id}`
                                                                )
                                                                .then(() => {
                                                                    setResumeDataList(
                                                                        resumeDataList.filter(
                                                                            (data) => data.id !== resumeData.id
                                                                        )
                                                                    );
                                                                })
                                                                .catch((err) => console.error(err));
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                        <span>Delete</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className="h-48 overflow-hidden"
                                        dangerouslySetInnerHTML={{ __html: updatedHtml }}
                                    />
                                    <div className="mt-4 text-center">
                                        <button className="bg-[#1a202c] hover:bg-[#2d3748] text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                                            onClick={() => handleOpenPreview(updatedHtml)}
                                        >
                                            Preview Resume
                                        </button>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            )}

            {/* Modal for Preview */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={handleClosePreview}
                        >
                            ✖
                        </button>
                        <div className="p-6">
                            <div dangerouslySetInnerHTML={{ __html: selectedResumeHtml }} />
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default GenerateResume;


