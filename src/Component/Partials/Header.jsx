import React from "react";
import { Link } from "react-router-dom";
import Lodar from "../../utils/Lodar";

function Header({ wallpaper }) {
  
  return wallpaper ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.6)) , url(https://image.tmdb.org/t/p/original${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="w-full bg-blue-500  h-[30vh] lg:w-full lg:h-[55vh]  flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="text-2xl font-black text-white">
        {wallpaper.name ||
          wallpaper.original_name ||
          wallpaper.original_title ||
          wallpaper.title}
      </h1>
      <p className=" lg:w-[50%] text-sm font-light mt-2 leading-none tracking-thighter text-white">
        {`${wallpaper.overview.slice(0, 150)}`}...<Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className="text-yellow-300">more</Link>
      </p>
      <p className="text-white  flex items-center justify-start mt-2 gap-3 ">
        <i className="text-yellow-500  ri-megaphone-fill"></i>
        {wallpaper.release_date || "No Information"}
        <i className="text-yellow-500 ri-album-fill"></i>
        {wallpaper.original_language}
      </p>
      <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer`} className=" lg:relative p-2 lg:p-4 text-white font-bold tacking-thighter rounded-lg  mt-4 bg-[#6556CD] hover:bg-[#42378e]">
        Watch Trailer
      </Link>
    </div>
  ) : (
    <Lodar/>
  );
}

export default Header;
