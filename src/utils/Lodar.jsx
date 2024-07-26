import React from 'react';
import Loading from '/loadingimg.gif';

function Lodar() {
  return (
    <div className='lg:w-screen w-[100%] h-[70vh] lg:h-[100%] flex justify-center items-center bg-[#1F1E24]'>
      <img className='lg:w-full w-full h-full object-cover lg:object-cover' src={Loading} alt="Loading" />
    </div>
  );
}

export default Lodar;
