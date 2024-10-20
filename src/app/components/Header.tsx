import React from 'react'
import Link from "next/link"
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="text-gray-200 body-font h-24 bg-pink-800 ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  py-2">
    
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/m-logo-png-transparent.png")} alt="m logo" width={100} height={100} className='w-20'/>
      <span className=" text-xl text-gray-200">Designs</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-blue-600">Home</Link>
      <Link href="#About" className="mr-5 hover:text-blue-600">About</Link>
      <Link href="#Portfolio" className="mr-5 hover:text-blue-600">Portfolio</Link>
      <Link href="#Contact" className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Header



// import React from 'react'
// import Link from "next/link"


// const Header = () => {
//   return (
//     <header className='bg-pink-800 text-neutral-50 p-5'>
//     <div className='container mx-auto flex justify-between items-center'>
//         <h1 className='text-3xl font-bold'>Mehwish</h1>
//       <nav>
//         <ul className='flex space-x-6'>
//             <li className='hover:text-blue-600'><Link href="#Header">Home</Link></li>
//             <li className='hover:text-blue-600'><Link href="#About">About</Link></li>
//             <li className='hover:text-blue-600'><Link href="#Contact">Contact</Link></li>
//             <li className='hover:text-blue-600'><Link href="#Portfolio">Portfolio</Link></li>
//         </ul>
//       </nav>
//     </div>
//     </header>
//   )
// }

// export default Header
