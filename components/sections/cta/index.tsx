'use client';
import React from 'react';
import Button from '@/components/ui/button';
import data from '@/dictionaries/en.json';

const Cta = () => {
  return (
    <section
      className='w-screen h-[60vh] bg-cover bg-center flex items-center px-4 relative justify-center' aria-label='Cta Section' id='cta'
      style={{
        backgroundImage: `url('/assets/images/cta.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100vw'
      }}
    >
      {/* <div className='w-screen absolute block -inset-1 bg-black bg-opacity-50 max-h-full mt-1 ml-1'></div> */}

      <div className='flex flex-col w-full items-center gap-6 md:gap-9 h-fit justify-center z-10 lg:pt-20 max-w-5xl'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold text-boldtext text-center text-[#fcfcfc]'>
          {data.cta.heading}
        </h1>
        <p className='text-lg font-semibold lg:text-lg text-center max-w-xl text-[#fcfcfc]'>{data.cta.subheading}</p>
        <a
          href='/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex lg:h-14'
        >
          <Button shape='surface'>{data.cta.buttonText}</Button>
        </a>
      </div>
    </section>
  );
};

export default Cta;
