'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import FeatureOneImage from '@/public/assets/images/feature-one.png';
import FeatureOneImageSecond from '@/public/assets/images/feature-one-second.png';
import data from '@/dictionaries/en.json';

const FeatureOne = () => {
  return (
    <section
      className='w-full flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 lg:py-16  '
      aria-label='Feature-One-Section'
      id='about'
    >
      <div className='w-full max-w-screen-lg flex justify-between flex-col md:flex-row gap-6 '>
        <div className='flex  justify-center md:justify-end w-full'>
          <div className='w-fit h-fit flex flex-col gap-12'>
    <div className='flex flex-col gap-6 w-full max-w-lg '>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-fg-text-contrast'>
            {data.featureOne.tag}
          </h1>
          <p className='text-base font-semibold text-fg-solid'>
            {data.featureOne.heading}
          </p>
          </div>
          <NextImage src={FeatureOneImageSecond} alt='Feature Image'  />
        </div>
        </div>
        <div className='flex justify-center w-full'>
        <NextImage src={FeatureOneImage} alt='Feature Image'  className='max-h-[33.625rem]'/>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
