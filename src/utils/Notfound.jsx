import React from 'react'
import notfound from '/notfound.gif'

function Lodar() {
  return (
    <div className='w-[100%] h-screen flex justify-center bg-[#1F1E24]'>
        <img className='bg-[#1F1E24] w-full h-full object-cover' src={notfound} alt="" />
    </div>
  )
}

export default Lodar