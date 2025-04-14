import React from 'react';
import Landinghero from '../Component/Landinghero/Landinghero'
import BookingForm from '../Component/BookingForm/BookingForm';
import Testimonials from '../Component/Testimonials/Testimonials'; 
import Faq from '../Component/Faq/Faq';
import Description from '../Component/Description/Description';
import Details from "../Component/Details/Details";
import AutismHero from '../Component/AutismHero/AutismHero';
import Ouroffer from '../Component/Ouroffer/Ouroffer'
const LandingPage = () => {
  return (
    <main className="space-y-8 px-4 md:px-8 py-6">
    
      <section>
        <Landinghero />
      </section>
    <section>
        <Details />
      </section>
      <section>
     <Ouroffer/>
     </section>
     <section>
        <Description />
      </section>
      <section>
        <BookingForm />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Faq />
      </section>
    </main>
  );
};

export default LandingPage;
