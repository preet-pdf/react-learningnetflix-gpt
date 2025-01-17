import React from 'react'
import useMovieTrailer from '../../../hooks/useMovieTrailer.jsx' 
import { useSelector } from 'react-redux';

const BackugroundVideo = ({id}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  console.log(id)

  useMovieTrailer(id);

  return (
    <div className="w-screen">
        <iframe
            className="w-screen aspect-video"
            src={
                "https://www.youtube.com/embed/" +
                trailerVideo?.key +
                "?rel=0&&autoplay=1&mute=1&loop=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
);

}

export default BackugroundVideo