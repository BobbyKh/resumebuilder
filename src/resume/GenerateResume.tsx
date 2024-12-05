import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import AOS from "aos";
import "aos/dist/aos.css";

const GenerateResume = () => {
    const { templateId } = useParams<{ templateId: string }>();
    const [htmlTemplate, setHtmlTemplate] = useState<string>('');
    const [resumeDataList, setResumeDataList] = useState<Array<{ [key: string]: string }>>([]);
    const [error, setError] = useState<string>('');
    const htmlRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/template/${templateId}`);
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
                const response = await axios.get(`http://127.0.0.1:8000/api/documentfield/${templateId}`);
                setResumeDataList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching document data:", error);
                setError("Failed to load the document data.");
            }
        };

        if (templateId) fetchDocumentData();
    }, [templateId]);

    const downloadPdf = () => {
        const pdf = new jsPDF();
        if (htmlRef.current) {
            pdf.html(htmlRef.current, {
                callback: () => {
                    pdf.save("resume.pdf");
                },
                x: 10,
                y: 10,
                html2canvas: { scale: 0.8 },
            });
        }
    };

    return (
        <div className="container mx-auto p-4" data-aos="fade-up">
            <h1 className="text-xl font-bold mb-6">Resume Generator</h1>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="rounded-lg shadow-lg p-6 bg-white" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={downloadPdf}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Download PDF
                        </button>
                    </div>
                    {resumeDataList.map((resumeData, index) => {
                        let updatedHtml = htmlTemplate;
                        for (const [key, value] of Object.entries(resumeData)) {
                            const placeholder = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
                            updatedHtml = updatedHtml.replace(placeholder, value || '');
                        }
                        return (
                            <div key={index} className="mb-4 border p-4 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                <div dangerouslySetInnerHTML={{ __html: updatedHtml }} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default GenerateResume;

