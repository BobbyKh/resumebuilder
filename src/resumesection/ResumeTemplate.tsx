import { Link } from "react-router-dom";

const ResumeTemplates = () => {
    return (
        <section className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Resume Templates</h1>
                <p className="text-lg text-gray-600">Choose a template that best suits your needs</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="template-card bg-white rounded-lg shadow-md p-4">
                    <img src="/path/to/template1.jpg" alt="Template 1" className="w-full h-auto mb-4"/>
                    <h2 className="text-xl font-semibold">Template 1</h2>
                    <p className="text-gray-700">A modern template with a clean design.</p>
                    <Link to="/resume/editor" className="btn block w-full text-center">Use Template</Link>
                </div>
                <div className="template-card bg-white rounded-lg shadow-md p-4">
                    <img src="/path/to/template2.jpg" alt="Template 2" className="w-full h-auto mb-4"/>
                    <h2 className="text-xl font-semibold">Template 2</h2>
                    <p className="text-gray-700">A professional template for a polished look.</p>
                    <Link to="/resume/editor" className="btn block w-full text-center">Use Template</Link>
                </div>
                <div className="template-card bg-white rounded-lg shadow-md p-4">
                    <img src="/path/to/template3.jpg" alt="Template 3" className="w-full h-auto mb-4"/>
                    <h2 className="text-xl font-semibold">Template 3</h2>
                    <p className="text-gray-700">An elegant template with a classic feel.</p>
                    <Link to="/resume/editor" className="btn block w-full text-center">Use Template</Link>
                </div>
            </div>
        </section>
    );
};

export default ResumeTemplates;

