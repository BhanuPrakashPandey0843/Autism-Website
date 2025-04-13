import React from 'react'
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const BookingForm = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-12 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Form Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Book Your Appointment Today</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below to schedule your visit with our expert team.<br />
              We're here to help you stay healthy!
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Enter your full name" className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition" />
                <input type="email" placeholder="Enter your email address" className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Enter your phone number" className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition" />
                <select className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition">
                  <option>Choose a service</option>
                  <option>General Consultation</option>
                  <option>Pediatric Checkup</option>
                  <option>Speech & Language Therapy</option>
                  <option>Behavioral Therapy</option>
                  <option>Sensory Integration</option>
                  <option>Occupational Therapy</option>
                  <option>Social Skills Development</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input type="date" className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition" />
                <select className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition">
                  <option>Select a time slot</option>
                  <option>Morning (9AM - 12PM)</option>
                  <option>Afternoon (12PM - 4PM)</option>
                  <option>Evening (4PM - 7PM)</option>
                </select>
              </div>

              <textarea
                placeholder="Enter any special requests or details..."
                className="w-full p-3 rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition min-h-[100px]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-medium text-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                Schedule My Appointment →
              </button>
            </form>
          </div>

          {/* Right: Image and Info Section */}

          <div className="group overflow-hidden rounded-2xl shadow-xl relative">
            {/* Image */}
            <img
              src="/images/Doctor&Patient.jpg"
              alt="Doctor and patient"
              className="w-full object-cover transition duration-500 transform group-hover:scale-105 group-hover:brightness-110"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
              <p className="text-sm opacity-75 mb-1">Your First Step to Better Health</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Get 50% Off <br />
                Your First Appointment!
              </h2>

              {/* Info Grid */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 text-xl"><FaMapMarkerAlt /></span>
                  <div>
                    <p>123 Chandivali, Sakinaka</p>
                    <p>Mumbai City, 400072</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 text-xl"><FaClock/></span>
                  <div>
                    <p>Monday–Saturday: 8.30am–10.00pm</p>
                    <p>Sunday: 9.30am–10.00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default BookingForm
