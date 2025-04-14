import React from 'react'
import ContactHero from '../Component/Contacthero/Contacthero'
import Testimonials from '../Component/Testimonials/Testimonials'; 
import Contactform from '../Component/Contactform/Contactform';
const ContactUs = () => {
  return (
    <div>
      <ContactHero/>
      <Contactform/>
     <Testimonials />
    </div>
  )
}

export default ContactUs
