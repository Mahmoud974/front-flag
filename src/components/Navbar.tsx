import {BsMoon} from 'react-icons/bs';



const Navbar = () => {
  return (
   <nav className='h-12 shadow-lg max-w-none lg:px-0 px-4'>
       <div className='mt-4 flex justify-between items-center  max-w-6xl mx-auto'>
         <h1 className='font-bold md:text-xl text-sm'>Where in the world?</h1>
        <div className='flex items-center'>
          <BsMoon/>
          <p className='ml-1 text-sm'>Dark Mode</p>
        </div>
       </div>
      </nav>
  )
}

export default Navbar