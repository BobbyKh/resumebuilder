import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const Pdftotext = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [response, setResponse] = useState<string | null>(null);

    const changeHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('pdf_file', selectedFile);

            axios.post('http://127.0.0.1:8000/api/pdftotext', formData)
                .then(response => setResponse(response.data.text))
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">PDF to Text</h1>
            <div className="flex flex-row-reverse items-center justify-center my-4"
                onDragOver={(event) => event.preventDefault()}
                onDrop={changeHandler}
            >
                <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer border-2 border-dashed border-gray-500">
                    <FontAwesomeIcon icon={faUpload} className="h-6 w-6" />
                    <p className="text-sm font-medium">Drag and Drop PDF file here</p>
                </div>
            </div>
            {isFilePicked ? (
                <div>
                    <p className="text-sm font-medium">Filename: {selectedFile!.name}</p>
                    <p className="text-sm font-medium">Filetype: {selectedFile!.type}</p>
                    <p className="text-sm font-medium">Filesize: {selectedFile!.size} bytes</p>
                    <br />
                    <button onClick={handleSubmission} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Upload
                    </button>
                    <br />
                    {response ? <p className="text-sm font-medium">{response}</p> :
                    <p className="text-sm font-medium">Failed to load PDF document</p>}
                </div>
            ) : (
                <p className="text-sm font-medium">No file selected</p>
            )}
        </div>
    );
};

export default Pdftotext;

