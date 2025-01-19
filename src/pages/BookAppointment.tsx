import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import API_URL from "../api/Api";

interface Appointment {
  id?: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  appointment_type: number;
}

const BookAppointment = () => {
  const [appointmentTypes, setAppointmentTypes] = useState<any[]>([]);
  useEffect(() => {
    const fetchAppointmentTypes = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/appointment_types`);
        const data = await response.data;
        setAppointmentTypes(data);
      } catch (error) {
        console.error("Error fetching appointment types:", error);
      }
    };
    fetchAppointmentTypes();
  }, []);

  const [appointment, setAppointment] = useState<Appointment>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    appointment_type: 0,
  });

  const [isSending, setIsSending] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setErrorMessage(""); // Reset error message

    try {
      const response = await axios.post(`${API_URL}/api/appointments`, appointment);
      const data = await response.data;
      console.log(data);
      setIsBooked(true);
      setIsSending(false);
      setAppointment({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
        appointment_type: 0,
      });
    } catch (error) {
      setIsSending(false);
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(`Error: ${error.response.data.message || "Something went wrong."}`);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
      console.error("Error booking appointment:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (

    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover p-6 "
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367276.jpg&fm=jpg')" }}
    >
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Book Your Appointment</h1>
          <p className="text-gray-600">Schedule your appointment quickly and easily by filling out the form below.</p>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="John Doe" 
                  value={appointment.name} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="example@mail.com" 
                  value={appointment.email} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="mt-1 relative">
                <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="number" 
                  name="phone" 
                  id="phone" 
                  placeholder="1234567890" 
                  value={appointment.phone} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Appointment Date</label>
              <div className="mt-1 relative">
                <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="date" 
                  name="date" 
                  id="date" 
                  value={appointment.date} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400" 
                  required 
                  min={new Date().toISOString().split('T')[0]} 
                />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Appointment Time</label>
              <div className="mt-1 relative">
                <FontAwesomeIcon icon={faClock} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="time" 
                  name="time" 
                  id="time" 
                  value={appointment.time} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="appointment_type" className="block text-sm font-medium text-gray-700">Appointment Type</label>
              <select 
                name="appointment_type" 
                id="appointment_type" 
                value={appointment.appointment_type} 
                onChange={handleInputChange} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400" 
                required
              >
                <option value={0}>Select Type</option>
                {appointmentTypes.map((type) => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              id="message" 
              placeholder="Additional information..." 
              value={appointment.message} 
              onChange={handleInputChange} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-transform transform hover:scale-105 ${isSending ? "cursor-not-allowed" : ""}`}
              disabled={isSending}
            >
              <span className={`${isSending ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                {appointment.id ? "Update Appointment" : "Book Appointment"}
              </span>
              {isSending && (
                <svg className="absolute left-1/2 top-1/2 -ml-4 -mt-4 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10s4.477 10 10 10v-2a8 8 0 01-8-8z"></path>
                </svg>
              )}
            </button>
          </div>
          {isBooked && (
            <p
              className="text-center text-green-600 font-medium mt-4 animate-fade-in"
              style={{
                animation: "fade-out 5s forwards",
                animationDelay: "5s",
              }}
            >
              Appointment Booked Successfully!
            </p>
          )}
          {errorMessage && <p className="text-center text-red-600 font-medium mt-4">{errorMessage}</p>}

<style>{`
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .animate-fade-in {
    animation: fade-out 5s forwards;
    animation-delay: 5s;
  }
`}</style>
</form>
      </div>
    </div>
  );
};

export default BookAppointment;
