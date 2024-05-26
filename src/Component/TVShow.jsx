import React, { useEffect, useState } from "react";
import Topnav from "./Partials/Topnav";
import { Dropdown } from "./Partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Lodar from "../utils/Lodar";

function TVShow() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tvshow, settvshow] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)


    const getTvshow = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
    
          if(data.results.length > 0 ){
             settvshow((prevState)=>[...prevState , ...data.results]);
             setpage(page+1)
          }else{
                  sethasmore(false)
          }
          
         
          console.log(data.page[2]);
        } catch (error) {
          console.log(error);
        }
      };

      const refreshHandler = ()=>{
        if(tvshow.length === 0){
          getTvshow()
        }else{
        setpage(1)
        settvshow([])
        getTvshow()
      }
      }
    
      useEffect(() => {
        refreshHandler()
      }, [category]);


  return tvshow ? (
    <div className="w-full h-screen  ">
    <div className="w-full h-[10vh] p-10 flex items-center justify-between ">
      <div className="flex items-center gap-5 w-[20%] ">
        <i
          onClick={() => navigate(-1)}
          className=" trendingIcon text-white text-2xl ri-arrow-left-line"
        ></i>{" "}
        <h1 className="text-2xl text-white font-bold">TV Shows</h1>
      </div>
      <div className="w-[80%] flex items-center justify-between">
        <Topnav />

        <Dropdown
          title="Category"
          option={["popular", "top_rated" ,"on_the_air", "airing_today"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
    </div>

    <InfiniteScroll
      dataLength={tvshow.length}
      next={getTvshow}
      hasMore={hasmore}
      loader={<h4>Loading...</h4>}
    >
      <Card trending={tvshow} title="tv" />
    </InfiniteScroll>
  </div>
  ) : <Lodar/>
}

export default TVShow