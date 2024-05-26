import React from 'react';
import Loading from '/loadingimg.gif';

function Lodar() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#1F1E24]'>
      <img className='w-auto h-auto max-w-full max-h-full object-contain' src={Loading} alt="Loading" />
    </div>
  );
}

export default Lodar;
