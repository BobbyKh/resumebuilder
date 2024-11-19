import axios from "axios"
import React, { useEffect, useState } from "react"

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
    })

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

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSending(true)
        fetch('http://127.0.0.1:8000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
        })
        .catch(error => {
            console.log(error)
            setIsSending(false)
        })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col items-center p-8 space-y-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col space-y-2">
                <p className="text-3xl font-bold">Book an Appointment</p>
                <p className="text-lg text-gray-600">Fill out the form below and we will contact you to confirm your appointment.</p>
            </div>
            <div className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-bold mb-2">Name:</label>
                    <input type="text" name="name" id="name" defaultValue={appointment.name} onChange={handleInputChange} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-bold mb-2">Email:</label>
                    <input type="email" name="email" id="email" defaultValue={appointment.email} onChange={handleInputChange} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="appointment_type" className="text-lg font-bold mb-2">Appointment Type:</label>
                    <select name="appointment_type" id="appointment_type" defaultValue={appointment.appointment_type} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setAppointment({...appointment, appointment_type: Number(event.currentTarget.value)})} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        {appointmentTypes.map((type) => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-lg font-bold mb-2">Phone:</label>
                    <input type="tel" name="phone" id="phone" defaultValue={appointment.phone} onChange={handleInputChange} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-bold mb-2">Message:</label>
                    <input type="text" name="message" id="message" defaultValue={appointment.message} onChange={handleInputChange} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="text-lg font-bold mb-2">Date:</label>
                    <input type="date" name="date" id="date" defaultValue={appointment.date} onChange={handleInputChange} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="time" className="text-lg font-bold mb-2">Time:</label>
                    <input type="time" name="time" id="time" defaultValue={appointment.time} onChange={handleInputChange} className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                </div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={isSending}>
                {isSending ? "Please wait..." : appointment.id ? "Update Appointment" : "Book Appointment"}
            </button>
            {appointment.id && <p className="text-green-500">Appointment Booked Successfully! We will contact you soon.</p>}
        </form>
    )
}

export default BookAppointment;


