import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies } from "../utils/movieSlice";
import { fetchDataFromTMDB } from './fetchDataFromTMDB';


const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.tredningMovies);

  console.log(trendingMovies);

  const fetchtrendingMovies = async() => {
    const res = await fetchDataFromTMDB("top_rated");
    console.log(res.results);
    dispatch(addTrendingMovies(res.results));
  }


  useEffect(() => {
    if (!trendingMovies) fetchtrendingMovies();
  }, [])
}

export default useTrendingMovies