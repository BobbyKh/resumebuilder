import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faList, faPencil, faEye } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResumeBuild = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const steps = [
    { icon: faFile, step: "Step 1: Choose Document Type" },
    { icon: faList, step: "Step 2: Choose Categories" },
    { icon: faPencil, step: "Step 3: Fill in the Form" },
    { icon: faEye, step: "Step 4: Preview and Download" },
  ];

  useEffect(() => {
    AOS.init()
  }, [])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigate('/experience'); // replace '/nextpage' with the actual path
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url(https://cdn.enhancv.com/images/1920/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvc2tpbGxzLWJnLTVhZWMwM2UzZTJjZGY5N2FmYmM1YjkzMGY1OWZlYTAyLndlYnA~.webp)',
        backgroundSize: 'cover',
      }}
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <h1 className="text-4xl font-bold mb-6 text-center"> Ste</h1>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <FontAwesomeIcon icon={steps[currentStep].icon} className="w-10 h-10 text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">{steps[currentStep].step}</h2>
        <button
          onClick={handleNext}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="false"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ResumeBuild


