import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Speciality from '../components/Speciality';
import Team from '../components/Team';
import StatsBand from '../components/StatsBand';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Blog from '../components/Blog';
import AppointmentForm from '../components/AppointmentForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Speciality />
        <Team />
        <StatsBand />
        <Testimonials />
        <Features />
        <Blog />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
