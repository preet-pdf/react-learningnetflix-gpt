import React from 'react'
import {IMAGE_CDN_URL} from '../utils/constants'

const MovieCard = ({poster}) => {
  if (!poster) {return null;}
  return (
    <div className='w-36 md:w-48 pr-4'>

        <img alt='movie-card' src={IMAGE_CDN_URL + poster}/>
    </div>
  )
}

export default MovieCard