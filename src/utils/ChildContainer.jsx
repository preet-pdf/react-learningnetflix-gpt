import React from 'react';
import { useSelector } from "react-redux";
import MovieList from '../components/MovieList'

const ChildContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && <>
    
      <div className='bg-black'>
        <div className='mt-0 md:-mt-52 pl-2 md:pl-12 relative z-20'>
          <MovieList title="Popular" data={movies.popularMovies}/>
          <MovieList title="Trending" data={movies.tredningMovies}/>
          <MovieList title="Now Playing" data={movies.nowPlayingMovies}/>
          <MovieList title="Upcoming" data={movies.upcomingMovies}/>


        </div>

      </div>
    </>
  )
}

export default ChildContainer