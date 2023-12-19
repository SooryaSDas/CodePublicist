import { React, useState } from 'react';

import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'


const Header = () => {
      let [isOpen,setisopen] = useState(false);
  return (
    <div>
         <div className='w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <a className="w-36" href="/"> <img src="./images/logo.png" alt="logo" /> </a>

                
            </div>
            {/* Menu icon */}
            <div onClick={()=>setisopen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>Home</a>
                </li>
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>About</a>
                </li>
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>Service</a>
                </li>
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>Industries</a>
                </li>
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>Blog</a>
                </li>
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>Contact</a>
                </li>
                
            </ul>
           
           </div>
        </div>

    </div>
  )
}

export default Header


// {
//     Links.map((link) => (
//     <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//         <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
//     </li>))
// }

// echo "# CodePublicist" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SooryaSDas/CodePublicist.git
// git push -u origin main
// …or push an existing repository from the command line
// git remote add origin https://github.com/SooryaSDas/CodePublicist.git
// git branch -M main
// git push -u origin main