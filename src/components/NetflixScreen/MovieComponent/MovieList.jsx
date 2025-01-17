import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, data}) => {
  return (
    <div className='px-6'>
      <h1 className='text-lg md:text-3xl py-4 text-white'>
        {title}
      </h1>
      <div className='flex overflow-x-auto scrollbar'>
        <div className='flex'>
        {
          data?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path}/>
          ))
        }
        </div>
        </div>
    </div>

  )
}

export default MovieList