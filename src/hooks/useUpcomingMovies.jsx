import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from "../utils/movieSlice";
import { fetchDataFromTMDB } from './fetchDataFromTMDB';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  console.log(upcomingMovies);

  const fetchupcomingMovies = async() => {
    const res = await fetchDataFromTMDB("upcoming");
    console.log(res.results);
    dispatch(addUpcomingMovies(res.results));
  }

  useEffect(() => {
    if (!upcomingMovies) fetchupcomingMovies();
  }, [])
}

export default useUpcomingMovies