import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="text-gray-200  bg-pink-800 ">
  <div className="container mx-auto flex flex-wrap p-5 justify-between flex-col md:flex-row items-center  py-2">
    
    <h1 className='text-3xl font-bold'>Mehwish</h1>
    <nav className="md:ml-auto flex flex-wrap items-center h-14 justify-center">
    <ul className='flex space-x-6'>
            <li className='hover:text-blue-600'><Link href="#Header">Home</Link></li>
            <li className='hover:text-blue-600'><Link href="#About">About</Link></li>
            <li className='hover:text-blue-600'><Link href="#Contact">Contact</Link></li>
           <li className='hover:text-blue-600'><Link href="#Portfolio">Portfolio</Link></li>
         </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header


