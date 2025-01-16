import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from "../utils/movieSlice";
import { fetchDataFromTMDB } from './fetchDataFromTMDB';


const usePopularMovie = () => {

  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  console.log(popularMovies);

  const fetchPopularMovies = async() => {
    const res = await fetchDataFromTMDB("popular");
    console.log(res.results);
    dispatch(addPopularMovies(res.results));
  }


  useEffect(() => {
    if (!popularMovies) fetchPopularMovies();
  }, [])
  
}

export default usePopularMovie