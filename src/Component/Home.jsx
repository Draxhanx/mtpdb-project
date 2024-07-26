import React, { useEffect, useState } from "react";
import Sidenav from "./Partials/Sidenav";
import Topnav from "./Partials/Topnav";
import Header from "./Partials/Header";
import axios from "../../src/utils/Axios";
import HorizontalCards from "./Partials/HorizontalCards";
import { Dropdown } from "./Partials/Dropdown";
import Lodar from "../utils/Lodar";

function Home() {
  document.title = "SCSDB | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("movie");

  const wallpaperData = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && wallpaperData();
    getTrending();
  }, [category]);

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="lg:w-[80%]   w-[100%] h-full overflow-auto">
        <Topnav />
        <Header wallpaper={wallpaper} />

        <div className="mb-3 flex mx-5 lg:mx-0 justify-between mt-5 lg:px-5 ">
          <h1 className="text-2xl  font-semibold text-white">Trending</h1>
          <Dropdown
            title="Filter"
            option={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} title={category} />
      </div>
    </>
  ) : (
    <Lodar />
  );
}

export default Home;
