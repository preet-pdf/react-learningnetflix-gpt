import React from 'react'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies)

  if (!nowPlaying) {
    return
  }

  const movie = nowPlaying[Math.floor(Math.random() * nowPlaying.length)];

  const { original_title, overview, id} = movie;
  
  // console.log(original_title + overview + id );
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer