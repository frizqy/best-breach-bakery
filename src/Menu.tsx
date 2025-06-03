import React, { useState, useEffect, useRef } from 'react';
import './App.css'

import donut1 from './assets/donut/donut1.png'
import donut2 from './assets/donut/donut2.png'
import donut3 from './assets/donut/donut3.png'
import donut4 from './assets/donut/donut4.png'
import donut5 from './assets/donut/donut5.png'
import donut6 from './assets/donut/donut6.png'

import bread1 from './assets/breads/bread1.png'
import bread2 from './assets/breads/bread2.png'
import bread3 from './assets/breads/bread3.png'
import bread4 from './assets/breads/bread4.png'
import bread5 from './assets/breads/bread5.png'

import dessert1 from './assets/desserts/dessert1.png'

interface AddImage{
  menuImage: string;
  menuName: string;
}

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
}

const Menu = () => {
  return (
    <div className="w-full h-auto bg-(--platinum) font-(family-name:--playfair-display)">
      <div className='w-full h-auto max-md:pt-[15%] pt-[5%] pb-[5%] justify-center items-center'>
        <NavMenu />
            <div id='breads'>
              <div className='w-full h-auto p-[5%] font-bold text-2xl'>
                <p>Breads</p>
                <div className='w-full h-[1px] bg-(--smoky-black)'></div>
              </div>

              <div className='flex flex-wrap justify-center items-center gap-[5%]'>
                <MenuItem menuImage={`${bread1}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${bread2}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${bread3}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${bread4}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${bread5}`} menuName='keju'></MenuItem>
              </div>
            </div>
            <div id='donuts'>
              <div className='w-full h-auto p-[5%] font-bold text-2xl'>
              <p>Donuts</p>
              <div className='w-full h-[1px] bg-(--smoky-black)'></div>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-[5%]'>
                <MenuItem menuImage={`${donut1}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${donut2}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${donut3}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${donut4}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${donut5}`} menuName='keju'></MenuItem>
                <MenuItem menuImage={`${donut6}`} menuName='keju'></MenuItem>
            </div>
            </div>
            <div id='desserts'>
              <div className='w-full h-auto p-[5%] font-bold text-2xl'>
                <p>Desserts</p>
                <div className='w-full h-[1px] bg-(--smoky-black)'></div>
              </div>
              <div className='flex flex-wrap justify-center items-center gap-[5%]'>
                <MenuItem menuImage={`${dessert1}`} menuName='Martabak Manis'></MenuItem>
              </div>
            </div>
        </div>
    </div>
  )
}
function MenuItem({ menuImage, menuName }: AddImage){
  return(
    <ScrollAnimatedSection>
      <div className='flex flex-col justify-center items-center text-center'>
        <div>
          <div 
          style={{backgroundImage: `url(${menuImage})`}}
          className={`size-[300px] bg-no-repeat bg-cover`}></div>
          <p className='font-bold text-2xl p-[20px]'>{menuName}</p>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
function NavMenu(){
  return(
    <div className='w-full h-auto pt-[5%]'>
      <ul className='flex justify-center items-center gap-[2%]'>
        <a className='w-[100px] bg-black text-white text-center rounded-full' href="#breads">Breads</a>
        <a className='w-[100px] bg-black text-white text-center rounded-full' href="#donuts">Donuts</a>
        <a className='w-[100px] bg-black text-white text-center rounded-full' href="#desserts">Dessert</a>
      </ul>
    </div>
  );
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
export default Menu