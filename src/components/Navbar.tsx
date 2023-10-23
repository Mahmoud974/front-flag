import React from 'react'
import {BiMoon,BiSolidMoon} from 'react-icons/bi';


interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}


const Navbar:React.FC<Props> = ({ darkMode,setDarkMode}) => {
   
  const activeDark = () =>{
   setDarkMode(!darkMode);
    
    if (darkMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }
  return (
   <nav className='h-12 shadow-lg max-w-none lg:px-0 px-4'>
       <div className='mt-4 flex justify-between items-center  max-w-6xl mx-auto'>
        
          <h1 className='font-bold md:text-xl text-sm cursor-pointer' onClick={() => window.location.reload()}>Where in the world?</h1>
       
        <div className='flex items-center cursor-pointer' onClick={activeDark}>
          {
            darkMode ?<BiSolidMoon/> : <BiMoon/>    
          }
          <p className='ml-1 text-sm'>Dark Mode</p>
        </div>
       </div>
      </nav>
  )
}

export default Navbar