import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BioDataTemplate {
    
    id : number;
    name: string;
    description: string;
    image: string;
    doc_cat: number;
}
const BioDataTemplate = () => {
    const [templates, setTemplates] = useState <BioDataTemplate[]>([]);
    const [docCat, setDocCat] = useState<number>(1);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/documentcategory/{doc_cat}`, { params: { doc_cat: docCat } })
            .then(response => {
                setTemplates(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <section className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Bio Data Templates</h1>
                <p className="text-lg text-gray-600">Choose a template that best suits your needs</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map(template => (
                    <div key={template.id} className="template-card bg-white rounded-lg shadow-md p-4">
                        <img src={`http://127.0.0.1:8000${template.image}`} alt={template.name} className="w-full h-auto mb-4"/>
                        <h2 className="text-xl font-semibold">{template.name}</h2>
                        <p className="text-gray-700">{template.description}</p>
                        <Link to={`/resume/editor/${template.id}`} className="btn block w-full text-center">Use Template</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BioDataTemplate;

