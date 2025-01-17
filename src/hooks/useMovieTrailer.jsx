import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {API_CONSTANTS} from '../utils/constants';
import {addTrailerVideo} from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideo)
  const getMovie = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US",
      API_CONSTANTS);

      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
  );
  const trailer =
  filterData.length === 0 ? json.results[0] : filterData[0];
  console.log(trailer);
  dispatch(addTrailerVideo(trailer));
    
  }
  useEffect(() => {

    !movieTrailer && getMovie();

  }, [])
}

export default useMovieTrailer