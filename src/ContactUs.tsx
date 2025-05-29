import React, { useState, useEffect, useRef } from 'react';
import './App.css'

import reserve1 from './assets/reserve/reserve1.jpg'

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
}

const contactUs = () => {
  return (
    <div className='w-full h-auto font-(family-name:--playfair-display) bg-(--platinum)'>
      <ScrollAnimatedSection>
        <div className='w-full h-screen flex max-md:flex-col'>
          <div className='max-md:w-full w-1/2 maxmd:h-1/2 h-screen flex flex-col gap-[20px] text-left justify-center items-left p-[5%]'>
            <h1 className='text-[50px] font-bold'>Contact Us</h1>

            <div className='flex flex-col'>
              <label htmlFor="">Name</label>
              <input className='border-2 rounded-2xl' type="text" id='name'></input>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="email">Email</label>
              <input className='border-2 rounded-2xl' type="email" name="" id="email" />
            </div>

            <button className='bg-black rounded-full cursor-pointer text-white p-[10px]'><p>Apply</p></button>
            
          </div>
          <div
          style={{ backgroundImage: `url(${reserve1}) `}}
          className='max-md:hidden max-md:w-full w-1/2 maxmd:h-1/2 h-screen bg-cover bg-no-repeat'>
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  )
}


function ScrollAnimatedSection({ children }: ScrollAnimatedSectionProps) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isElementVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);
        setIsInView(isElementVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div
      ref={sectionRef}
      className={`
        transform transition-all duration-1000 ease-out
        ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      {children}
    </div>
  );
}

export default contactUs