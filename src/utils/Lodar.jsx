import React from 'react';
import Loading from '/loadingimg.gif';

function Lodar() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#1F1E24]'>
      <img className='w-full  object-contain' src={Loading} alt="Loading" />
    </div>
  );
}

export default Lodar;
