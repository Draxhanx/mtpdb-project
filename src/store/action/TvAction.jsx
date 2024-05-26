export {removetv} from '../reducers/TvSlice'
import axios from "../../utils/Axios";
import { loadtv } from "../reducers/TvSlice";


export const asyncloadtv = (id)=> async(dispatch , getState)=>{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const extrernalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

        let theultimatedetails = {
            detail:detail.data,
            recommendation:recommendations.data.results,

            extrernalid:extrernalid.data, 
            similar:similar.data.results,
            vidoes:videos.data.results.find(m => m.type === "Trailer"),
            watchproviders:watchproviders.data.results.IN ,


        }

        dispatch(loadtv(theultimatedetails))

        // console.log(theultimatedetails);

    }
    catch(error){
        console.log(error)
    }
}
