import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../store/action/TvAction";
import Lodar from "../utils/Lodar";
import { Link } from "react-router-dom";
import HorizonatalCards from "../Component/Partials/HorizontalCards";
import noimg from "/public/noimg.png";

function Tvdetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.6)) , url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[210vh] px-32"
    >
      {/* items upper div  */}
      <div className="icon w-[20%] flex items-cneter mt-10  justify-between ">
        <i
          onClick={() => navigate(-1)}
          className=" trendingIcon text-white text-xl ri-arrow-left-line"
        ></i>
        <a target="blank" href={info.detail.homepage}>
          {" "}
          <i className="  text-white text-xl  ri-external-link-fill"></i>
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${info.extrernalid.wikidata_id}`}
        >
          <i className=" text-white text-xl ri-earth-fill"></i>{" "}
        </a>
        <a
          className="  text-white text-xl "
          href={`https://www.imdb.com/title/${info.extrernalid.imdb_id}/`}
        >
          {" "}
          imdb
        </a>
      </div>

      {/* moviecard and details div */}

      <div className="w-full flex mt-10 ">
        <img
          className="w-[18%] rounded-xl h-[45vh] object-cover"
          src={`https://image.tmdb.org/t/p/original${info.detail.backdrop_path}`}
          alt=""
        />
        {/* name and genre div */}
        <div className="w-full mx-10">
          <h1 className="text-4xl font-bold text-white">
            {info.detail.title || info.detail.name}
          </h1>
          <div className="flex gap-5">
            <h1 className="text-2xl font-bold text-white">
              {info.detail.last_air_date}
            </h1>
            <h1 className="text-2xl font-bold text-white">
              <i className="text-xl text-white ri-chat-poll-fill"></i>{" "}
              {info.detail.vote_average}
            </h1>
            <h1 className="text-2xl font-bold  text-white">
              {info.detail.genres.map((g) => g.name).join(",")}
            </h1>
          </div>
          {/* details div */}
          <div>
            <h1 className="text-xl text-white font-italic mt-5">
              {info.detail.tagline}
            </h1>

            <h1 className="text-2xl font-bold  text-white mt-3">Overview</h1>
            <p className="text-white ">{info.detail.overview}</p>
            {/* i have to flex it so i use more than enough div */}

            <div className="flex gap-5 items-center">
              <div>
                <h2 className="text-xl font-bold  text-white mt-3">
                  Production Country
                </h2>
                <h3 className="text-white font-semibold text-lg">
                  {info.detail.production_countries.map((items ) =>  items.name)} 
                </h3>
              </div>
              <div className="mt-6">
                <Link
                  to={`${pathname}/trailer`}
                  className="px-5 py-4 bg-[#6556CD] text-white hover:bg-[#392e80]  rounded-lg   font-semibold"
                >
                  <i className=" text-white ri-play-fill"></i> Watch Tariler
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      
        {/* watch provider or avialaible for watch */}
      {info.watchproviders && <div className="mt-10 ">
        <div className="flex items-center gap-5 ">
          <h1 className="text-xl font-bold  text-white mt-3">
            Avaliable Platfrom{" "}
          </h1>
          {info.watchproviders &&
            info.watchproviders.flatrate &&
            info.watchproviders.flatrate.map((items, index) => (
              <img
              key={index}
                className={`w-[45px] h-[45px] rounded-lg mt-3 hover:${items.provider_name}`}
                src={`https://image.tmdb.org/t/p/original${items.logo_path}`}
                alt=""
              />
            ))}
        </div>
        <div className="flex items-center gap-5 ">
          <h1 className="text-xl font-bold  text-white mt-3">
            Avaliable For Rent{" "}
          </h1>
          {info.watchproviders &&
            info.watchproviders.rent &&
            info.watchproviders.rent.map((items , index) => (
              <img
              key={index}
                className="w-[45px] h-[45px] rounded-lg mt-3"
                src={`https://image.tmdb.org/t/p/original${items.logo_path}`}
                alt=""
              />
            ))}
        </div>
        <div className="flex items-center gap-5 ">
          <h1 className="text-xl font-bold  text-white mt-3">
            Avaliable For Buy{" "}
          </h1>
          {info.watchproviders &&
            info.watchproviders.rent &&
            info.watchproviders.rent.map((items , index) => (
              <img
              key={index}
                className="w-[45px] h-[45px] rounded-lg mt-3"
                src={`https://image.tmdb.org/t/p/original${items.logo_path}`}
                alt=""
              />
            ))}
        </div>
      </div>
}
      {/* seasonss */}

      <h1 className="text-white text-2xl font-semibold mt-10">Seasons</h1>

      <div className=" w-full bg-[#1F1E24] mt-10">
        <div className="w-full flex flex-shrink-0  gap-5  px-10 mt-5 overflow-x-scroll   ">
          {info.detail.seasons.map((items, index) => (
            <Link
              key={index}
              to={`/${"tv"}/details/${items.id}`}
              className="w-[15.55%] h-[47vh] mt-10 mb-[5%] flex-shrink-0   "
            >
              <img
                className="w-full h-full object-cover rounded-lg "
                src={`https://image.tmdb.org/t/p/original${items.poster_path} `}
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

        {/* {info.recommendations ? info.recommendations : info.similar} */}
      </div>

      <h1 className="text-2xl text-white font-bold mt-5">Recommnedations</h1>

      {/* recomndation  */}
      <div className="bg-[#1F1E24] mt-10">
        <HorizonatalCards data={info.similar || info.recommendations} />

        {/* {info.recommendations ? info.recommendations : info.similar} */}
      </div>
      <Outlet />
    </div>
  ) : (
    <Lodar />
  );
}

export default Tvdetails;
