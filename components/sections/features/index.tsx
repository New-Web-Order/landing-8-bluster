'use client';
import React from 'react';
// import Button from '@/components/ui/button';
import data from '@/dictionaries/en.json';
import FeatureCard from '@/components/ui/feature-card';

const Features = () => {
  return (
    <section
      className='w-screen flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 pb-16 sm:py-14 lg:py-28 gap-16 lg:gap-24 flex-col'
      aria-label='Social-Media-Links-Section'
      id='features'
    >
      <div className='flex flex-col gap-6 w-full items-center'>
      <p className='text-base font-semibold text-primary-text'>
            {data.features.tag}
          </p>
          <h1 className='text-2xl lg:text-5xl xl:text-6xl font-bold text-primary-text-contrast text-center'>
            {data.features.headingOne}
          </h1>
          <p className='text-lg font-semibold text-fg-solid text-center max-w-lg'>
            {data.features.mainText}
          </p>
      </div>

      <div className='w-full max-w-screen-xl grid md:grid-cols-2 gap-16 lg:gap-24 justify-items-center '>
        {data.features.cardInfo.map((option, index) => (
          <FeatureCard
            key={index}
            title={option.title}
            image={option.image}
            description={option.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
