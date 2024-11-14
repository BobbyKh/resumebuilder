import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const documentTypes = [
  { value: 'cv', label: 'CV' },
  { value: 'resume', label: 'Resume' },
  { value: 'bio-data', label: 'Bio-Data' },
];

const categories = ['Work', 'Education', 'Personal'];

const ResumeBuild = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setShowForm(true);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6">
      <nav className="flex justify-around items-center p-4 shadow-lg" data-aos="fade-in">
        <ul className="flex flex-wrap justify-around items-center">
          {documentTypes.map((type) => (
            <li key={type.value} className="flex flex-col items-center m-2" data-aos="fade-in">
              <FontAwesomeIcon icon={faFileAlt} className="text-black text-2xl mb-1" />
              <button onClick={() => handleSelectType(type.value)} className="text-black font-semibold hover:underline transition duration-500">
                {type.label}
              </button>
            </li>
          ))}
          {categories.map((category) => (
            <li key={category} className="flex flex-col items-center m-2" data-aos="fade-in">
              <FontAwesomeIcon icon={faFolderOpen} className="text-black text-2xl mb-1" />
              <button onClick={() => handleSelectCategory(category)} className="text-black font-semibold hover:underline transition duration-500">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6" data-aos="fade-in">
        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Resume" />
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-in">
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            Create a {selectedType} in {selectedCategory}
          </h2>
          {showForm ? (
            <form onSubmit={handleSubmit} data-aos="fade-in">
              <input type="text" name="title" placeholder="Document Title" onChange={handleInputChange} className="mb-4 p-2 border rounded-lg w-full transition duration-500" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-500">
                Save
              </button>
            </form>
          ) : (
            <p data-aos="fade-in">Select a document type and category to start creating.</p>
          )}
        </div>
      </div>

      <div className="mt-6" data-aos="fade-in">
        <h3 className="text-2xl font-bold mb-4">
          <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
          Previous Files
        </h3>
        {/* List or component to display previous files */}
        <p>No previous files available.</p>
      </div>
    </div>
  );
};

export default ResumeBuild;

