import axios from "axios";

//const URL = "https://api.themoviedb.org/3";
const URL="https://api.themoviedb.org/3"
const API_KEY = "9bdbfecf01c499c92d4dc74ce900fa27";


const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
    ulajka:"/movie/fight-club"
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}