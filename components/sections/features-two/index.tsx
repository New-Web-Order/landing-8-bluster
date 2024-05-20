'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import Link from 'next/link';
import FeatureTwoImage from '@/public/assets/images/feature-two.png';
import data from '@/dictionaries/en.json';

const FeatureOne = () => {
  return (
    <section
      className='w-full flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 lg:py-16 bg-fg-text-contrast '
      aria-label='Feature-One-Section'
      id='subscribe'
    >
      <div className='w-full max-w-screen-xl flex items-center justify-between flex-col md:flex-row gap-16'>
        <div className='flex flex-1 justify-center flex-col gap-3 lg:gap-6 max-w-xl'>

          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-bg-base'>
            {data.featureTwo.heading}
          </h1>
          <p className='text-sm text-fg-solid lg:text-base font-medium max-w-md'>
            {data.featureTwo.subText}
          </p>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            {/* <Button shape='filled'>{data.featureTwo.buttonText}</Button> */}
            <Link href="#" className='text-primary-border hover:text-primary-solid'>{data.featureTwo.buttonText}</Link>
          </a>
        </div>
        <div className='flex flex-1 items-center justify-center md:justify-start w-full'>
          <NextImage src={FeatureTwoImage} alt='Feature Image' />
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
