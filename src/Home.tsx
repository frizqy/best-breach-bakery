import React, { useState, useEffect, useRef } from 'react';

import bread1 from './assets/bread1.png'
import bread2 from './assets/bread-bg1.jpg'
import bread3 from './assets/bread-bg2.jpg';
import bread4 from './assets/bread-bg3.jpg';

import './App.css'

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
}

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current?.offsetHeight) {
        setScrollY(window.scrollY);
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const calculateParallaxTransform = (speed: number) => {
    return `translateY(${scrollY * speed}px)`;
  };

  return (
      <div className='h-auto w-full bg-(--platinum) font-(family-name:--playfair-display)'>
        <div ref={containerRef} className='overflow-hidden max-md:flex-col h-screen w-full flex max-md:justify-center justify-between p-[10%] items-center drop-shadow-2xl'>
          <div 
          style={{ transform: calculateParallaxTransform(0.2) }}
          className={`font-bold text-[70px] w-[20%] flex justify-center translate-y-0 opacity-100 items-center transform transition-all duration-1000 ease-out`}>
            <div>
              <p>Best</p>
              <p>Breach</p>
              <p className='md:hidden'>Bakery</p>
            </div>
          </div>
          <div style={{ transform: calculateParallaxTransform(0.3) }}
           className='max-md:w-full w-[50%] flex justify-center items-center max-md:fixed transform transition-all duration-1000 ease-out'>
            <img className='max-md:w-[600px] max-md:translate-y-[300px] md:w-[400px]' src={bread1} alt="" />
          </div>
          <div 
          style={{ transform: calculateParallaxTransform(0.4) }}
          className='max-md:hidden font-bold text-[70px] w-[20%] flex justify-center items-center transform transition-all duration-1000 ease-out'>
            <p className='max-md:hidden'>Bakery</p>
          </div>
        </div>

        <div className='w-full text-center text-[20px] h-fit max-md:flex-col text-(--smoky-black) bg-(--light-french-beige) flex items-center justify-center'>
          <p className='m-[10%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur sint similique explicabo qui aut eius commodi distinctio repudiandae corporis numquam, maiores repellendus, tempore nostrum quasi eum quia. Quae, vitae?</p>
        </div>

        <div ref={containerRef} className='w-full h-screen max-md:flex-col-reverse text-(--smoky-black) bg-(--light-french-beige) flex items-center justify-center'>
          <div style={{ backgroundImage: `url(${bread3})`,  transform: calculateParallaxTransform(-0.1) }}
          className='w-full max-md:bg-center h-[50%] bg-cover bg-no-repeat transform transition-all duration-1000 ease-out'>
          </div>
        </div>

        <ScrollAnimatedSection>
          <div className='w-full h-screen max-md:flex-col text-(--smoky-black) bg-(--caput-mortuume) flex items-center justify-center'>
            <div className='max-md:w-[70%] flex max-md:flex-col md:flex-col gap-[20px] md:w-[50%] p-[5%]'>
              <h1 className='text-[50px] font-bold'>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium earum repellendus possimus dolor nisi hic minus non alias ipsa. Voluptates aliquam culpa sunt doloremque libero neque impedit, consectetur vero!</p>
            </div>
            <div ref={containerRef} style={{ backgroundImage: `url(${bread2})`}}
            className={`max-md:w-full max-md:bg-center w-[50%] max-md:h-[50%] h-[90%] bg-cover bg-no-repeat`}>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection>
          <div className='w-full h-screen max-md:flex-col-reverse text-(--smoky-black) bg-(--caput-mortuume) flex items-center justify-center'>
            <div style={{ backgroundImage: `url(${bread4})` }}
            className={`max-md:w-full max-md:bg-center w-[50%] max-md:h-[50%] h-[90%] bg-cover bg-no-repeat`}>
            </div>
            <div className='max-md:w-[70%] flex max-md:flex-col md:flex-col gap-[20px] md:w-[50%] p-[5%]'>
              <h1 className='text-[50px] font-bold'>Service</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium earum repellendus possimus dolor nisi hic minus non alias ipsa. Voluptates aliquam culpa sunt doloremque libero neque impedit, consectetur vero!</p>
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

export default Home