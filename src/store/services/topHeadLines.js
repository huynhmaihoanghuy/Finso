import { API_URL, API_KEY } from "../../enviroment";
import Axios from "axios";

export const getTopHeadlinesService = () => {
    return Axios.get(`${API_URL}/top-headlines?country=us&apiKey=${API_KEY}`).then(res => res.data)
}