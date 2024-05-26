import React from "react";
import { Link } from "react-router-dom";
import noimg from "/public/noimg.png";
import Lodar from "../utils/Lodar";

function Card({ trending , title }) {
  
  return trending ?  (
    <div className="w-full  bg-[#1F1E24]">
      
      <div className="flex flex-wrap gap-4 mx-6 px-10  ">
      {trending.map((items, index) => (
        <Link key={index} to={`/${trending.media_type || title}/details/${items.id}`}
         className="w-[15%] h-[47vh] mb-[5%]  ">
          <img
            className="w-full h-full object-cover rounded-lg "
            src={
              items.backdrop_path || items.profile_path
                ? `https://image.tmdb.org/t/p/original${
                    items.backdrop_path || items.profile_path
                  } `
                : noimg
            }
            alt=""
          />
          <h1 className="text-xl text-white tarcking-tighter leading-none mt-2">
            {items.name ||
              items.original_name ||
              items.original_title ||
              items.title}
          </h1>
        </Link>
      ))}
    </div>

    </div>
  
  ) : <Lodar/>
}

export default Card;
