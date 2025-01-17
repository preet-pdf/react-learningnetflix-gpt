import React, { useEffect } from 'react'
import SignIn from './SignIn'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovie from '../hooks/usePopularMovie'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MainContainer from '../components/NetflixScreen/MainContainer'
import ChildContainer from '../components/NetflixScreen/ChildContainer'
import { useSelector } from "react-redux";
import GPTScreen from './NetflixScreen/GPTSection/GPTScreen'

function Browse() {
  const gptScreen = useSelector((store) => store.gpt.showGPTScreen);
  useNowPlayingMovies();
  usePopularMovie();
  useTrendingMovies();
  useUpcomingMovies();

  return  (
      <div>
        <Header />
        {
          gptScreen ? ( <GPTScreen />):
          ( <>
                        <MainContainer />
                        <ChildContainer />
                </>
          )


        }
        
      </div>
  )
}

export default Browse