import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faIdCard } from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'

const options = [
  { value: 'cv', label: 'CV' },
  { value: 'resume', label: 'Resume' },
  { value: 'bio-data', label: 'Bio-Data' },
]

const ResumeBuild = () => {
  const [selectedType, setSelectedType] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({})

  const handleSelectType = (type: string) => {
    setSelectedType(type)
    setShowForm(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div
      className="flex flex-col items-center justify-center text-center p-6"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-10">
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/400"
          alt="Resume"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4">
            <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
            Build Your Resume with ResuMaster
          </h2>
          <p className="text-lg mb-10" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" data-aos-once="false">
            A concise document highlighting relevant skills, experience, and achievements tailored for specific job applications.
          </p>
          <div className="flex flex-wrap justify-center mb-10 space-x-2">
            {options.map((option) => (
              <button
                key={option.value}
                className={`px-4 py-2 rounded-md ${selectedType === option.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleSelectType(option.value)}
              >
                <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                {option.label}
              </button>
            ))}
          </div>
          {showForm && (
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-4">Create Your {selectedType}</h3>
              <label className="mb-4 w-full" htmlFor="name">
                <span className="text-lg">Name</span>
                <input type="text" id="name" name="name" className="border-2 border-gray-200 p-2 rounded-md w-full" onChange={handleInputChange} />
              </label>
              <label className="mb-4 w-full" htmlFor="email">
                <span className="text-lg">Email</span>
                <input type="email" id="email" name="email" className="border-2 border-gray-200 p-2 rounded-md w-full" onChange={handleInputChange} />
              </label>
              <label className="mb-4 w-full" htmlFor="phone">
                <span className="text-lg">Phone</span>
                <input type="tel" id="phone" name="phone" className="border-2 border-gray-200 p-2 rounded-md w-full" onChange={handleInputChange} />
              </label>
              <label className="mb-4 w-full" htmlFor="github">
                <span className="text-lg">GitHub</span>
                <input type="url" id="github" name="github" className="border-2 border-gray-200 p-2 rounded-md w-full" onChange={handleInputChange} />
              </label>
              <label className="mb-4 w-full" htmlFor="linkedin">
                <span className="text-lg">LinkedIn</span>
                <input type="url" id="linkedin" name="linkedin" className="border-2 border-gray-200 p-2 rounded-md w-full" onChange={handleInputChange} />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
              >
                Create
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResumeBuild

