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
    return <div ><section className="bg-white  p-8  " >
       <h2 className="text-4xl text-blue-800 font-bold text-center mb-3 " >What we offer ?</h2>  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {features.map((feature) => (
            <div 
                key={feature.id} 
                className="bg-white  p-6 "
            >
                <div className="flex items-center justify-center mb-3">
                    <img 
                        src={feature.icon} 
                        alt={feature.name} 
                        className="w-12 h-12" 
                    />
                    <h3 className="text-2xl font-bold tracking-tight text-black dark:text-black ml-4">
                        {feature.name}
                    </h3>
                </div>
                <p className="font-light text-gray-800 dark:text-black text-justify">
                    {feature.description}
                </p>
            </div>
        ))}
    </div>
  </section></div>
}

export default Feature
