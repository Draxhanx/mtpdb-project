import React, { useEffect, useState } from "react";
import Topnav from "./Partials/Topnav";
import { Dropdown } from "./Partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Person() {
    const navigate = useNavigate();
  const [category, setcategory] = useState("day");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1)
  const [hasmore, sethasmore] = useState(true)

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`trending/person/${category}?page=${page}`);

      if(data.results.length > 0 ){
         setpeople((prevState)=>[...prevState , ...data.results]);
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
    if(people.length === 0){
      getPeople()
    }else{
    setpage(1)
    setpeople([])
    getPeople()
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
          <h1 className="text-2xl text-white font-bold">Persons</h1>
        </div>
        <div className="w-[80%] flex items-center justify-between">
          <Topnav />

          <Dropdown
            title="Category"
            option={["day", "week"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
      >
        <Card trending={people} title="person" />
      </InfiniteScroll>
    </div>
  )
}

export default Person