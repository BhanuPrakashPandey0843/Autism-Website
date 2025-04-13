import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-6 py-10 md:px-20">
        <div className="max-w-screen-xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-semibold">Let’s Connect with us</h2>
              <p className="text-gray-400 mt-2">
                We’re here to provide reliable healthcare information and services.
                Let’s build a healthier future together.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                Contact Us
              </button>
              <button className="flex bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 rounded-full text-white font-semibold transition hover:scale-105 duration-200">
                Make an Inquiry <LuArrowUpRight className='pt-2 text-2xl text-black font-bold'/>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-10 grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">MedEase</h3>
              <p className="text-gray-400 mb-3">Subscribe our newsletter for Update</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="p-2 px-4 rounded-l-full text-white w-full"
                />
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-r-full">
                  Subscribe Now
                </button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>About Us</li>
                <li>Autism Resources</li>
                <li>Meet the Team</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Early Intervention</li>
                <li>Behavioral Therapy (ABA)</li>
                <li>Occupational Therapy</li>
                <li>Sensory Integration</li>
                <li>Speech & Language Therapy</li>
                <li>Social Skills Development</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: +91 7061738562</li>
                <li>Email: vishalyadav29279@gmail.com</li>
                <li>Address: 123 Sakinaka, Andheri East,<br /> Mumbai City, 400072</li>
              </ul>
              <div className="flex space-x-4 mt-4 text-xl">
                <Link to="#"><FaFacebookF className="hover:text-blue-500 cursor-pointer" /></Link>
                <Link to="#"><FaTwitter className="hover:text-blue-400 cursor-pointer" /></Link>
                <Link to="#"><FaLinkedinIn className="hover:text-blue-700 cursor-pointer" /></Link>
                <Link to="#"><FaSkype className="hover:text-sky-400 cursor-pointer" /></Link>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
            © 2025 [MedEase] | Privacy Policy | Terms & Conditions | Accessibility
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
