import axios from "../../utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from '../../../public/noimg.png'

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);
      setsearches(data);

      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[80%]  lg:w-[80%] h-[10vh] flex items-center justify-start relative ml-10   lg:ml-[10%] ">
      <i className=" text-zinc-400 text-3xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] p-3 mx-10 text-xl outline-none rounded-lg bg-transparent text-zinc-200 border-none "
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl ri-close-large-line"
        ></i>
      )}

      <div className="w-full lg:w-[60%] max-h-[50vh] bg-zinc-100 absolute top-[90%] overflow-auto">
        {searches.map((items, index) => (
          <Link to={`/${items.media_type}/details/${items.id}`}
            key={index}
            className="w-full p-10  border-b-2 border-zinc-200 flex items-center justify-start hover:font-semibold  "
          >
            <img
              className="w-28 lg:w-[25vh] lg:h-[25vh] object-cover mr-5 "
              src={ items.backdrop_path || items.profile_path ? `https://image.tmdb.org/t/p/original${
                items.backdrop_path ||  items.profile_path} ` : noimg}
              alt=""
            />
            <span className=" text-xl">
              {items.name ||
                items.original_name ||
                items.original_title ||
                items.title}
            </span>
          </Link>
        ))}
        {/* <Link className="w-full p-10  border-b-2 border-zinc-200 flex items-center justify-center hover:font-semibold  ">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
         */}
      </div>
    </div>
  );
}

export default Topnav;
