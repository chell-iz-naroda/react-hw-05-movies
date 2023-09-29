import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '2ef1fec037fb5d1172aa99fcdacaf237';

const URL_VARIABLES = {
    trand: '/trending/movie/day',
    search: '/search/movie',
    details: `/movie/`,
};



export const fetchTrandMovie = async (page) => {
    const url =`${BASE_URL}${URL_VARIABLES.trand}?api_key=${API_KEY}&page=${page}`;
    const response = await axios.get(url);
    
    return response.data;
}

export const fetchSearchMovie = async (query) => {
    const url =`${BASE_URL}${URL_VARIABLES.search}?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);

    return response.data;
}

export const fetchDetailsMovie = async (movie_id) => {
    const url = `${BASE_URL}${URL_VARIABLES.details}${movie_id}?api_key=${API_KEY}&`;
    const response = await axios.get(url);

    return response.data;
}

export const fetchCreditsMovie = async (movie_id) => {
    const url = `${BASE_URL}${URL_VARIABLES.details}${movie_id}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);

    return response.data;
}

export const fetchReviewsMovie = async (movie_id) => {
    const url = `${BASE_URL}${URL_VARIABLES.details}${movie_id}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);

    return response.data;
}