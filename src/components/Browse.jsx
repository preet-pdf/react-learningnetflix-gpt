import React, { useEffect } from 'react'
import SignIn from './SignIn'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import usePopularMovie from '../hooks/usePopularMovie'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MainContainer from '../utils/MainContainer'
import ChildContainer from '../utils/ChildContainer'

function Browse() {
  useNowPlayingMovies();
  usePopularMovie();
  useTrendingMovies();
  useUpcomingMovies();

  return  (
      <div>
        <Header />
        <MainContainer />
        <ChildContainer />
      </div>
  )
}

export default Browse