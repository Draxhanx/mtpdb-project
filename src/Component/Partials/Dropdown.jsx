import React from 'react';

export const Dropdown = ({ title, option, func }) => {
  return (
    <div className="lg:w-[20%]  p-2">
      <select
        onChange={func}
        defaultValue='0'
        name='format'
        id='format'
        className=" lg:w-full p-2 border border-gray-300 rounded-md"
      >
        <option value='0' disabled>
          {title}
        </option>
        {option.map((op, index) => (
          <option key={index} value={op}>
            {op.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
