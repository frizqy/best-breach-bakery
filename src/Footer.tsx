import './App.css'

const Footer = () => {
  return (
    <div className='font-(family-name:--playfair-display) p-[5%] text-(--platinum) font-bold h-[200px] w-full bg-(--caput-mortuum) flex justify-between items-center gap-[20px]'>
      <div className='w-[20%]'>
        <p className='text-4xl'>Best Breach Bakery</p>
      </div>
      <div className='w-[20%]'>
        <ul>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Facebook</a></li>
        </ul>
      </div>
      <div className='w-[20%] text-[10px]'>
        <p>&copy; 2025 - 2025 www.best-breach-bakery.com - All Rights Reserved. Last Updated : 05/22/2025 14:11:52</p>
      </div>
    </div>
  )
}

export default Footer