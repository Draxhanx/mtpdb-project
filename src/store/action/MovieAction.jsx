export {removemovie} from '../reducers/MovieSlice'
import axios from "../../utils/Axios";
import { loadmovie } from "../reducers/MovieSlice";


export const asyncloadmovie = (id)=> async(dispatch , getState)=>{
    try{
        const detail = await axios.get(`/movie/${id}`);
        const extrernalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

        let theultimatedetails = {
            detail:detail.data,
            recommendation:recommendations.data.results,

            extrernalid:extrernalid.data,
            similar:similar.data.results,
            vidoes:videos.data.results.find(m => m.type === "Trailer"),
            watchproviders:watchproviders.data.results.IN ,


        }

        dispatch(loadmovie(theultimatedetails))

        // console.log(theultimatedetails);

    }
    catch(error){
        console.log(error)
    }
}
