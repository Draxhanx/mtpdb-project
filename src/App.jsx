import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Trending from "./Component/Trending";
import Popular from "./Component/Popular";
import Movie from "./Component/Movie";
import TVShow from "./Component/TVShow";
import Person from "./Component/Person";
import Moviedetails from "./Component/Moviedetails";
import Tvdetails from "./Component/Tvdetails";
import Persondetails from "./Component/Persondetails";
import Trailer from "./Component/Partials/Trailer";
import Notfound from '../src/utils/Notfound'

function App() {
  return (
    <>
      <div className="lg:w-screen h-screen flex bg-[#1F1E24]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />

          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>

          <Route path="/tvshow" element={<TVShow />} />
          <Route path="/tv/details/:id" element={<Tvdetails />} > 
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          
          </Route>

          <Route path="/person" element={<Person />} />
          <Route path="/person/details/:id" element={<Persondetails />} />
          <Route  path="*"  element={<Notfound/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
