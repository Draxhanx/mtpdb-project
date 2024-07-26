import React from "react";
import { Link } from "react-router-dom";
import noimg from "/public/noimg.png";
import Lodar from "../utils/Lodar";

function Card({ trending, title }) {
  return trending ? (
    <div className="w-full  bg-[#1F1E24]">
      <div className="flex flex-wrap gap-4 lg:mx-6 mx-2 px-2 lg:px-10  ">
        {trending.map((items, index) => (
          <Link
            key={index}
            to={`/${trending.media_type || title}/details/${items.id}`}
            className="lg:w-[15%] w-[30%] h-[25vh] lg:h-[47vh] mb-[20%] lg:mb-[5%]  "
          >
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
  ) : (
    <Lodar />
  );
}

export default Card;
