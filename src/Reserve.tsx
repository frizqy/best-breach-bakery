import React, { useState, useEffect, useRef } from 'react';
import './App.css'

import reserve1 from './assets/reserve/reserve1.jpg'
import coffee1 from './assets/coffee1.jpg'
import coffee2 from './assets/coffee2.jpg'

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
}

const Reserve = () => {
  return (
    <div className='w-full h-auto font-(family-name:--playfair-display) bg-(--platinum)'>
      <ScrollAnimatedSection>
        <div className='w-full h-screen flex max-md:flex-col'>
          <div
          style={{ backgroundImage: `url(${reserve1}) `}}
          className='max-md:w-full w-1/2 maxmd:h-1/2 h-screen bg-cover bg-no-repeat'>
          </div>
          <div className='max-md:w-full w-1/2 maxmd:h-1/2 h-screen flex flex-col text-left justify-center items-left p-[5%]'>
            <h1 className='text-[50px] font-bold'>Reservation</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum amet iste, reprehenderit debitis ea ab rerum neque. Pariatur quidem, eaque nam nemo sapiente facilis, molestiae ullam tempora expedita consequuntur beatae.</p>
          </div>
        </div>
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <div className='w-full h-screen max-md:flex-col text-(--smoky-black) bg-(--caput-mortuume) flex items-center justify-center'>
          <div className='max-md:w-[30%] flex max-md:flex-col md:flex-col gap-[20px] md:w-[50%] p-[5%]'>
            <h1 className='text-[50px] font-bold'>Our Coffee</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium earum repellendus possimus dolor nisi hic minus non alias ipsa. Voluptates aliquam culpa sunt doloremque libero neque impedit, consectetur vero!</p>
          </div>
          <div style={{ backgroundImage: `url(${coffee1})`}}
          className={`max-md:w-full max-md:bg-center w-[70%] max-md:h-[50%] h-[80%] bg-cover bg-no-repeat`}>
          </div>
        </div>
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <div className='w-full h-screen flex justify-center items-center'>
          <div style={{ backgroundImage: `url(${coffee2})`}}
          className={`w-full h-[80%] bg-cover bg-no-repeat`}>
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

export default Reserve