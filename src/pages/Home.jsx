import React from 'react';
import HeroSection from '../components/Home/HeroSection';

import Catalog from '../components/Catalog/Catalog';
import TimeLineSection from '../components/TimeLine/TimeLineSection';
import InstructorWelcomeSection from '../components/InstructorWelcomeSection/InstructorWelcomeSection';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  return (
    <div className=''>
        <HeroSection/>
        <Catalog/>
        <TimeLineSection/>
        <InstructorWelcomeSection/>
        <Reviews/>
        
    </div>
  )
}
