import React from "react";
import { Link } from "react-router-dom";
import Lodar from "../../utils/Lodar";

function HorizontalCards({ data, title }) {
  // console.log(title);

  return data ? (
    <div className="w-full  flex gap-5 overflow-x-scroll flex-shrink-0 px-5  ">
      {data.length > 0 ? (
        data.map((items , index) => (
          <Link 
          key={index}
            to={`/movie/details/${items.id}`}
            className="min-w-[15%] h-[40vh] mt-5  rounded-lg overflow-hidden "
          >
            <img 
              className="w-full h-[20vh] object-cover"
              src={`https://image.tmdb.org/t/p/original${
                items.backdrop_path || items.profile_path
              }`}
              alt=""
            />
            <h1 className="text-xl font-bold text-white mb-2">
              {items.name ||
                items.original_name ||
                items.original_title ||
                items.title}
            </h1>
            <p className="text-sm font-light text-white tracking-thighter leading-none">
              {items.overview.slice(0, 100)}
              <Link className="ml-2 text-zinc-300 font-bold">more</Link>
            </p>
          </Link>
        ))
      ) : (
        <h1 className="text-2xl font-semibold text-white">Nothing To Show</h1>
      )}
    </div>
  ): <Lodar/>
}

export default HorizontalCards;
