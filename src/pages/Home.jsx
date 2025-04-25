import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Footer from "../components/Footer/Footer";
import Catalog from '../components/Catalog/Catalog';
import TimeLineSection from '../components/TimeLine/TimeLineSection';
import InstructorWelcomeSection from '../components/InstructorWelcomeSection/InstructorWelcomeSection';

export default function Home() {
  return (
    <div className=''>
        <HeroSection/>
        <Catalog/>
        <TimeLineSection/>
        <InstructorWelcomeSection/>
        <Footer/>
    </div>
  )
}
