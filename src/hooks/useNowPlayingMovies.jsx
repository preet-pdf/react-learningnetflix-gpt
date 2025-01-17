import React, { useEffect } from 'react'
import {API_CONSTANTS} from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies)

    const fetchMovieList = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_CONSTANTS)
        const res = await data.json();
        console.log(res.results);
        dispatch(addNowPlayingMovies(res.results));
      }
    
      useEffect(() => {
        !nowPlaying && fetchMovieList();
      }, []);
}

export default useNowPlayingMovies