import { configureStore } from "@reduxjs/toolkit";
import moviereducer from '../../src/store/reducers/MovieSlice'
import tvreducer from '../../src/store/reducers/TvSlice'
import personreducer from '../../src/store/reducers/PersonSlice'


export const store = configureStore({
  reducer: {
    movie: moviereducer,
    tv: tvreducer,
    person: personreducer,
  },
});
