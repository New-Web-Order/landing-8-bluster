'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import BannerImage from '@/public/assets/images/fileOne.png';
// import Blob from '@/public/assets/images/blob.webp';
import data from '@/dictionaries/en.json';
const WelcomeBanner = () => {
  return (


    <section
      className='w-[100vw] h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] xl:h-[130vh] lg:py-0 px-3 md:px-8 2xl:px-0 flex items-center justify-center bg-[#00B4D9]'
      aria-label='Welcome Banner'
      id='welcome'
      style={{
        backgroundImage: `url('/assets/images/welcome.png')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        maxWidth:'100vw'
    }} 
    >
      <div className='flex w-full max-w-screen-xl items-center justify-center gap-8 lg:gap-20 flex-col-reverse md:flex-row'>
        <div className='flex flex-col justify-start gap-4 lg:gap-9 w-full'>
        <p className='font-bold text-xl md:text-2xl text-[#fcfcfc]'>{data.heroSection.headingOne}</p>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#fcfcfc] max-w-80 md:max-w-full'>
            {data.heroSection.heading}{' '}
          </h1>
          <p className='font-medium text-base md:text-lg text-[#fcfcfc] max-w-[20rem] md:max-w-[35rem]'>
            {data.heroSection.subheading}
          </p>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='flex w-fit gap-4 items-center'
          >
            <Button shape='filled'>{data.heroSection.buttonText}</Button>
          </a>
        </div>
        {/* <div className='flex justify-end items-center w-full max-w-[30rem] lg:max-w-full absolute md:relative'>
          <NextImage
            src={BannerImage}
            alt='banner-image'
            className=' max-h-[50rem]'
            style={{ objectFit: 'contain' }}
          />
        </div> */}
      </div>
    </section>

    
  );
};

export default WelcomeBanner;