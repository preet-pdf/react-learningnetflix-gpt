import React, { useEffect } from 'react'
import SignIn from './SignIn'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import MainContainer from '../utils/MainContainer'
import ChildContainer from '../utils/ChildContainer'

function Browse() {
  useNowPlayingMovies()

  return  (
      <div>
        <Header />
        <MainContainer />
        <ChildContainer />
      </div>
  )
}

export default Browse