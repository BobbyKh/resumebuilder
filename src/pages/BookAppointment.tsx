import Aos from "aos"
import "aos/dist/aos.css"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faCalendarAlt, faClock, faCommentDots, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

interface Appointment {
    id ?: number
    name: string
    email: string
    phone: string
    date: string
    time: string
    message: string
    appointment_type: number
}

const BookAppointment = () => {
    const [appointmentTypes, setAppointmentTypes] = useState<any[]>([])
    useEffect(() => {
        const fetchAppointmentTypes = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/appointment_types')
            const data = await response.data
            setAppointmentTypes(data)
        }
        fetchAppointmentTypes()
    }, [])

    const [appointment, setAppointment] = useState<Appointment>({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
        appointment_type: 0,
    })

    const [isSending, setIsSending] = useState(false)
    const [isBooked, setIsBooked] = useState(false)

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>  ) => {
        event.preventDefault()
        setIsSending(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/appointments', appointment)
            const data = await response.data
            console.log(data)
            setIsBooked(true)
            setIsSending(false)
            setAppointment({
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                message: "",
                appointment_type: 0,
            })
        } catch (error) {
            console.log(error)
            setIsSending(false)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4 p-8 bg-white rounded-lg shadow-md md:grid-cols-2" data-aos="zoom-in">
                <div className="col-span-full" data-aos="fade-up">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600" />
                        <p className="text-3xl font-bold">Book an Appointment</p>
                    </div>
                    <p className="text-lg text-gray-600">Fill out the form below and we will contact you to confirm your appointment.</p>
                </div>
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="100">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                    <input type="text" name="name" id="name" placeholder="Name" defaultValue={appointment.name} onChange={handleInputChange} className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required/>
                </div>
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="200">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
                    <input type="email" name="email" id="email" placeholder="Email" defaultValue={appointment.email} onChange={handleInputChange} className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required/>
                </div>
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="300">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
                    <input type="tel" name="phone" id="phone" placeholder="Phone" defaultValue={appointment.phone} onChange={handleInputChange} className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required/>
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600" data-aos-delay="400" />
                    <input type="date" name="date" id="date" defaultValue={appointment.date} onChange={handleInputChange} className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required min={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faClock} className="text-gray-600" data-aos-delay="500" />
                    <input type="time" name="time" id="time" defaultValue={appointment.time} onChange={handleInputChange} className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required/>
                </div>
                <div className="flex items-center space-x-2 " data-aos-delay="700">
                    <FontAwesomeIcon icon={faPeopleGroup} className="text-gray-600" />
                    <select name="appointment_type" id="appointment_type" defaultValue={appointment.appointment_type} onChange={handleInputChange} className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                        <option value={0}>Select Appointment Type</option>
                        {appointmentTypes.map((type) => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center space-x-2 md:col-span-2">
                    <FontAwesomeIcon icon={faCommentDots} className="text-gray-600"data-aos-delay="600" />
                </div>
                
                <button type="submit" className="col-span-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={isSending}>
                    {isSending ? "Please wait..." : appointment.id ? "Update Appointment" : "Book Appointment"}
                </button>
                {isBooked && <p className="col-span-full text-center text-green-500">Appointment Booked Successfully! We will contact you soon.</p>}
            </form>
        </div>
    )
}

export default BookAppointment
