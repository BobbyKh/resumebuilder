import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CVtemplate {
    id: number;
    name: string;
    description: string;
    image: '';
    category_id: number
}

const CVtemplateComponent = () => {
    const [templates, setTemplates] = useState<CVtemplate[]>([]);
    const [docCat, setDocCat] = useState<number>(1);  // Default category set to 1 for CV
    
    useEffect(() => {
        // Fetch templates based on doc_cat (1 for CV, 2 for Resume, etc.)
        axios.get(`http://127.0.0.1:8000/api/category/${docCat}/templates`)
            .then(response => {
                setTemplates(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [docCat]);  // Fetch new templates every time docCat changes

    return (
        <section className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">CV Templates</h1>
                <p className="text-lg text-gray-600">Choose a template that best suits your needs</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <button 
                        onClick={() => setDocCat(1)} 
                        className={`btn ${docCat === 1 ? 'bg-blue-500' : 'bg-gray-500'} text-white px-4 py-2 rounded`}>
                        CV Templates
                    </button>
                    <button 
                        onClick={() => setDocCat(2)} 
                        className={`btn ${docCat === 2 ? 'bg-blue-500' : 'bg-gray-500'} text-white px-4 py-2 rounded`}>
                        Resume Templates
                    </button>
                </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.length > 0 ? (
                    templates.map(template => (
                        <div className="template-card bg-white rounded-lg shadow-md p-4" key={template.id}>
                            <img src={`http://127.0.0.1:8000${template.image}`} alt={template.name} className="w-full h-auto mb-4"/>
                            <h2 className="text-xl font-semibold">{template.name}</h2>
                            
                            <Link to={`/resume/editor/${template.id}`} className="btn block w-full text-center">Use Template</Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No templates found for this category.</p>
                )}
            </div>
        </section>
    );
};

export default CVtemplateComponent;

