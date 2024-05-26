import React, { useEffect, useState } from "react";
import Topnav from "./Partials/Topnav";
import { Dropdown } from "./Partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
function Movie() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const getMovies = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
    
          if(data.results.length > 0 ){
             setmovies((prevState)=>[...prevState , ...data.results]);
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
        if(movies.length === 0){
          getMovies()
        }else{
        setpage(1)
        setmovies([])
        getMovies()
      }
      }
    
      useEffect(() => {
        refreshHandler()
      }, [category]);


  return (
    <div className="w-full h-screen  ">
    <div className="w-full h-[10vh] p-10 flex items-center justify-between ">
      <div className="flex items-center gap-5 w-[20%] ">
        <i
          onClick={() => navigate(-1)}
          className=" trendingIcon text-white text-2xl ri-arrow-left-line"
        ></i>{" "}
        <h1 className="text-2xl text-white font-bold">Movies</h1>
      </div>
      <div className="w-[80%] flex items-center justify-between">
        <Topnav />

        <Dropdown
          title="Category"
          option={["popular", "top_rated" , "upcoming" , "now_playing" ,]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
    </div>

    <InfiniteScroll
      dataLength={movies.length}
      next={getMovies}
      hasMore={hasmore}
      loader={<h4>Loading...</h4>}
    >
      <Card trending={movies} title="movie" />
    </InfiniteScroll>
  </div>
  )
}

export default Movie