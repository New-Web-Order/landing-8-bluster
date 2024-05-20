import React from 'react';
import WelcomeBanner from '@/components/sections/welcome-banner';
import FeatureOne from '@/components/sections/features-one';
import Links from '@/components/sections/features';
import FeatureTwo from '@/components/sections/features-two';
import Cta from '@/components/sections/cta';

const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <WelcomeBanner />
      <FeatureOne/>
      <Links/>
      <FeatureTwo/>
      <Cta/>
    </main>
  );
};
export default Homepage;
