'use client';
import React from 'react';
// import Link from 'next/link';
import NextImage from 'next/image';

interface FeatureCardProps {
  title: string;
  image: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className='w-full max-w-96 flex gap-4 items-start justify-center'>
      <NextImage
        src={image}
        alt='social media icon'
        width={500}
        height={500}
        className='w-16 h-16 lg:w-24 lg:h-24 '
        aria-label={`Justice-Hub ${title} icon`}
      />

      <div className='w-full flex flex-col gap-1 lg:gap-2 max-w-[15rem]'>
        <h1 className='font-bold text-lg lg:text-2xl text-fg-text-contrast'>{title}</h1>
        <p className='font-normal text-sm lg:text-base text-fg-solid'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
