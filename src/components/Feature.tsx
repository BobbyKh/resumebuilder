import axios from "axios"
import API_URL from "../api/Api"
import { useEffect, useState } from "react"


interface Feature {
    id: number;
    name: string;
    description: string;
    icon: string;
}


const Feature = () => {
    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        fetchFeatures()
    }, [])
    const fetchFeatures =  () => {
        axios.get(`${API_URL}/api/feature`)
        .then(response => {
            console.log("Features:", response.data);
            setFeatures(response.data);
        })
        .catch(error => {
            console.error('Error fetching features:', error);
            // TODO: handle error
        });
            
    }
    return <div><section className="bg-white dark:bg-gray-900 p-8 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className=" mb-8 lg:mb-16 justify-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Features</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center text-justify ">Highlights the unique features of ResuMaven, such as ATS-friendly templates, customization options, cloud saving, and multilingual support.

</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center justify-center text-center">
                    <img src={feature.icon} alt={feature.name} className="w-10 h-10 mb-4" />
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center">{feature.name}</h3>
                    <p className="font-light text-gray-500 dark:text-gray-40 text-center text-justify">{feature.description}</p>
                  
                </div>
            ))}
        </div>
    </div>
  </section></div>
}

export default Feature
