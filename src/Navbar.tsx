import { Link } from 'react-router';
import { useState } from 'react';
import './App.css'

interface AnimatedInfoBoxProps {
  isVisible: boolean;
  onClose: () => void;
}

function Navbar() {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState<boolean>(false);

  const toggleInfoBox = (): void => {
    setIsInfoBoxVisible((prev) => !prev);
  };

  return (
    <nav className='flex max-md:flex-col font-(family-name:--playfair-display) transform transition-all duration-1000 ease-out z-10 bg-(--platinum) overflow-hidden border-(--smoky-black) border-solid border-1 fixed w-full h-auto p-[20px] md:gap-[20px] justify-between text-center items-center'>
        <div className='max-md:hidden flex justify-between max-md:w-full transform transition-all duration-1000 ease-out'>
          <ul className='w-[200px] h-[20px] font-bold'>
            <li><a href=""><p>Best Breach Bakery</p></a></li>
          </ul>
        </div>
        <NavMobile isVisible={isInfoBoxVisible} onClose={toggleInfoBox} />
        <ul className='max-md:hidden flex max-md:flex-col max-md:p-[15px] gap-[50px]'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reserve">Reserve</Link></li>
        </ul>
        <ul className='max-md:hidden w-[200px] h-[20px]'>
            <Link className='bg-(--smoky-black) pl-4 pr-4 rounded-2xl text-(--platinum)' to="/contactus">Contact Us</Link>
        </ul>
    </nav>
  )
}

function NavMobile({ isVisible, onClose }: AnimatedInfoBoxProps) {
  
  return (
    <div className='md:hidden flex flex-col w-full h-auto justify-between text-center items-center transform transition-all duration-1000 ease-out'>
      <div className='flex justify-between max-md:w-full transform transition-all duration-1000 ease-out'>
        <ul className='w-[200px] h-[20px] font-bold'>
          <li><a href=""><p>Best Breach Bakery</p></a></li>
        </ul>
        <ul>
          <a onClick={onClose} className='flex flex-col gap-[2px] transform transition-all duration-1000 ease-out cursor-pointer'>
            <div className={`w-[25px] h-[5px] bg-black transition-all ease-in-out duration-300 ${isVisible ? 'opacity-0 translate-y-[7px]' : ''}`}></div>
            <div className={`w-[25px] h-[5px] bg-black transition-all ease-in-out duration-300 ${isVisible ? 'rotate-45' : ''}`}></div>
            <div className={`w-[25px] h-[5px] bg-black transition-all ease-in-out duration-300 ${isVisible ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
          </a>
        </ul>
      </div>
      <ul
      className={`md:hidden flex justify-center items-center flex-col w-full h-[0px] overflow-hidden
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'h-[240px]' : '-translate-y-full h-[0px] opacity-0 pointer-events-none'}
      `}
    >
        <Link className='w-full p-[10px] rounded-full hover:bg-black hover:text-white ease-in-out transition-all duration-400' onClick={() => {onClose()}} to={"/"}>Home</Link>
        <Link className='w-full p-[10px] rounded-full hover:bg-black hover:text-white ease-in-out transition-all duration-400' onClick={() => {onClose()}} to={"/menu"}>Menu</Link>
        <Link className='w-full p-[10px] rounded-full hover:bg-black hover:text-white ease-in-out transition-all duration-400' onClick={() => {onClose()}} to={"/reserve"}>Reserve</Link>
        <Link className='w-full p-[10px] rounded-full hover:bg-black hover:text-white ease-in-out transition-all duration-400' onClick={() => {onClose()}} to={"/contactus"}>Contact Us</Link>
      </ul>
    </div>
  );
}

export default Navbar