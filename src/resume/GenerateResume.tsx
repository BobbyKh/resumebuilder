import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";

const GenerateResume = () => {
    const { templateId } = useParams<{ templateId: string }>();

    const [htmlTemplate, setHtmlTemplate] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [resumeData, setResumeData] = useState<{ [key: string]: string }>({});

    const [renderedHtml, setRenderedHtml] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{ html: string }>(`http://127.0.0.1:8000/api/template/${templateId}`);
                setHtmlTemplate(response.data.html || '');
            } catch (error) {
                console.error('Error fetching resume HTML:', error);
                setError('Failed to load resume template.');
            }
        };
        if (templateId) {
            fetchData();
        }
    }, [templateId]);

    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                const response = await axios.get<{ data: { [key: string]: string } }>(`http://127.0.0.1:8000/api/documentfield/${templateId}`);
                setResumeData(response.data.data || {});
            } catch (error) {
                console.error('Error fetching resume data:', error);
                setError('Failed to load resume data.');
            }
        };
        if (templateId) {
            fetchResumeData();
        }
    }, [templateId]);

    useEffect(() => {
        const renderHtml = () => {
            let updatedHtml = htmlTemplate;
            for (const [key, value] of Object.entries(resumeData)) {
                const placeholder = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
                updatedHtml = updatedHtml.replace(placeholder, value || '');
            }
            setRenderedHtml(updatedHtml);
        };

        renderHtml();
    }, [htmlTemplate, resumeData]);

    const handleInputChange = (key: string, value: string) => {
        setResumeData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const downloadPdf = () => {
        const pdf = new jsPDF();
        pdf.html(renderedHtml, {
            callback: () => {
                pdf.save("resume.pdf");
            },
        });
    };

    return (
        <div>
            <h1>Resume Generator</h1>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className=" rounded px-8 pt-6 pb-8 mb-4">
                    <div className="text-right mb-4">
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={downloadPdf}
                        >
                            Download PDF
                        </button>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
                    <form className="grid grid-cols-2 gap-4 mt-4">
                        {Object.entries(resumeData).map(([key, value]) => (
                            <div key={key}>
                                <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                                    {key}
                                </label>
                                <input
                                    type="text"
                                    id={key}
                                    name={key}
                                    value={value}
                                    onChange={(e) => handleInputChange(key, e.target.value)}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        ))}
                    </form>
                </div>
            )}
        </div>
    );
};

export default GenerateResume;
