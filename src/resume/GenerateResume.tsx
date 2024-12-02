import axios from "axios";
import { useEffect, useState } from "react";

const GenerateResume = () =>{


    interface Resume {
        id : number;
        image: string;
        template: string;
        html : string;  
        name: string;
        email: string;
        phone: string;
        address: string;
        skills: string;
        education: string;
        work_experience: string;
        achievements: string;
        hobbies: string;
        references: string;
    }

const [ resumes, setResumes] = useState<Resume  []>([])


        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/resume');
                    setResumes(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error('Error fetching resumes:', error);
                }
            };
            fetchData();
        }, []);

    return ( 
        <div>
                <h1>Resume Generate View </h1>

            {resumes.map((resume) => (
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" key={resume.id}>
                   
                {resume.html && <div className="prose" dangerouslySetInnerHTML={{ __html: resume.html }} />}
            
                </div>
    ))}

        </div>
    )
}


export default GenerateResume

