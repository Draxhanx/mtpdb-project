import React from 'react'
import { Link } from 'react-router-dom'

function  Sidenav() {
    
  return (
    
    <div className='nav relative left-[-100%] lg:left-0 w-0  lg:w-[20%] lg:h-full p-5 lg:p-8 border-r-2 border-zinc-500'>
        <h1 className='text-2xl  text-white'>
        <i className="text-[#6556CD]  ri-tv-fill mr-2"></i>
        <span>MTPDB</span>
        </h1>
        <nav className=' flex flex-col text-xl text-zinc-400'>
            <h1 className='text-white text-xl font-semibold mt-10 mb-5'>
                New Feeds
            </h1>
            <Link to='/trending' className='hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg'>
            <i className="mr-2 ri-fire-fill"></i>
                Trending</Link>
            <Link to='/popular' className='hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg'> 
            <i className="mr-2 ri-bard-fill"></i>
            Popular</Link>
            <Link to='/movie' className='hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg'>
            <i className="mr-2 ri-movie-2-fill"></i>
                Movies</Link>
            <Link to='/tvshow' className='hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg'>
            <i className="mr-2 ri-tv-fill"></i>
                TV Show</Link>
            <Link to='person' className='hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg'>
            <i className="mr-2 ri-team-fill"></i>
                People</Link>

        </nav>
        <nav className='flex flex-col text-xl text-zinc-400'>
            <h1 className='text-white text-xl font-semibold mt-5 mb-3'>
               Website Information
            </h1>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg'>
            <i className="mr-2 ri-information-2-fill"></i>
                About Us</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg'> 
            <i className="mr-2 ri-phone-fill"></i>
           Contact Us</Link>
            

        </nav>
        
        
    </div>
    
  )
}

export default Sidenav