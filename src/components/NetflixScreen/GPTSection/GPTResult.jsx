import React from 'react'
import { useSelector } from "react-redux";
import MovieList from '../MovieComponent/MovieList'

const GPTResult = () => {

  const {movieNames, movieSuggestions} = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-60 text-white'>
      <div>
        {
          movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} data={movieSuggestions[index]}/>
          ))
        }
      </div>
    </div>
  )
}

export default GPTResult