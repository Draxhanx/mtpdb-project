import React, { useEffect, useState } from "react";
import Topnav from "./Partials/Topnav";
import { Dropdown } from "./Partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1)
  const [hasmore, sethasmore] = useState(true)

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day?page=${page}`);

      if(data.results.length > 0 ){
         settrending((prevState)=>[...prevState , ...data.results]);
         setpage(page+1)
      }else{
              sethasmore(false)
      }
      
     
      
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = ()=>{
    if(trending.length === 0){
      getTrending()
    }else{
    setpage(1)
    settrending([])
    getTrending()
  }
  }

  useEffect(() => {
    refreshHandler()
  }, [category]);

  return  (
    <div className="w-full h-screen bg-[#1F1E24]  ">
      <div className="lg:w-full h-[10vh] lg:p-10 flex items-center justify-between ">
        <div className="flex items-center gap-5 w-[20%] ">
          <i
            onClick={() => navigate(-1)}
            className=" trendingIcon text-white text-2xl ri-arrow-left-line"
          ></i>{" "}
          <h1 className="text-2xl text-white font-bold">Trending</h1>
        </div>
        <div className="w-[100%]  flex items-center justify-between">
          <div className="hidden lg:block">
           <Topnav /> 
          </div>
          
<div className="lg:hidden">
 
</div>
           <Dropdown
            title="Category"
            option={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

  
   <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
      >
        <Card trending={trending} title={category}/>
      </InfiniteScroll>
   
    </div>
  );
}

export default Trending;
