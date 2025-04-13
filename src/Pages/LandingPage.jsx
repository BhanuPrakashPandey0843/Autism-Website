import React from 'react';
import BookingForm from '../Component/BookingForm/BookingForm';
import Testimonials from '../Component/Testimonials/Testimonials'; 
import Faq from '../Component/Faq/Faq';

const LandingPage = () => {
  return (
    <main className="space-y-8 px-4 md:px-8 py-6">
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
