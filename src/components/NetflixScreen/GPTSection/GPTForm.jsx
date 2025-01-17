import React, { useRef } from 'react'
import languageConstants from '../../../utils/languageConstants'
import { useDispatch, useSelector } from "react-redux";
import {GPT_PROMPT, API_CONSTANTS} from '../../../utils/constants'
import openai from "../../../utils/openai";
import {addGptSeacrhedMovie} from '../../../utils/gptSlice'

const GPTForm = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang)
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=true&language=en-US&page=1", API_CONSTANTS
    )
    const data = await res.json()
    return data.results;
  }

  const handleGptSearchClick = async () => {
    const searchQuery = GPT_PROMPT + searchText.current.value
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-4o-mini",
  });
  if (!gptResult.choices) {
    //TODO: Write Some Error
  }

  const gptMovies = gptResult.choices?.[0]?.message?.content.split(',')

  const moviesFromTMDB = gptMovies.map((movie) => searchMovie(movie));

  const allMoviesData = await Promise.all(moviesFromTMDB);

  console.log(allMoviesData);
  dispatch(addGptSeacrhedMovie({
    movieName: gptMovies,
    movieSuggestions: allMoviesData,
  }))

  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()} 
            className='bg-black grid grid-cols-12 w-full md:w-1/2'
        >
          <input
                    ref={searchText}
                    type="text"
                    className="m-4 p-4 col-span-9 rounded-md"
                    placeholder={languageConstants[langKey].gptSearchPlaceholder}
                />
                <button
                    className="m-4 bg-red-700 text-white col-span-3 rounded-md"
                    onClick={handleGptSearchClick}
                >
                    {languageConstants[langKey].search}
                </button>
        
      </form>

    </div>
  )
}

export default GPTForm