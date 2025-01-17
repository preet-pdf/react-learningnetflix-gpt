import React from 'react'
import { useSelector } from 'react-redux';
import BackgroundVideo from '../NetflixScreen/MovieComponent/BackugroundVideo'
import VideoTitle from '../NetflixScreen/MovieComponent/VideoTitle'

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies)

  if (!nowPlaying) {
    return
  }

  const movie = nowPlaying[Math.floor(Math.random() * nowPlaying.length)];

  const { original_title, overview, id} = movie;

  
  console.log(movie );
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={original_title} discription={overview}/>
      <BackgroundVideo id={id}/>
    </div>
  )
}

export default MainContainer