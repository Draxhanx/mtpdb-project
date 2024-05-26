import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Notfound from '../../utils/Notfound'

function Trailer() {
    const navigate = useNavigate()
   const {pathname } =  useLocation()
   const category = pathname.includes("movie") ? "movie" : "tv"
   const ytvideo = useSelector((state)=> state[category].info.vidoes)

   console.log(useSelector((state)=> state[category].info.vidoes.key));
  return (
    <div className='absolute w-screen h-screen top-0 left-0 bg-transparent flex items-center justify-center'>
        
        <i
            onClick={() => navigate(-1)}
            className="absolute right-[20%] top-[10%] hover:text-purple-400 text-white text-5xl ri-close-fill"
          ></i>
       {ytvideo ?  <ReactPlayer
       
       url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
       /> : <Notfound/>}
        
        </div>
  ) 
}

export default Trailer