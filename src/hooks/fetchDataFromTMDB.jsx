import React from 'react'
import { API_CONSTANTS } from '../utils/constants';

export const fetchDataFromTMDB = async (type) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+type+"?&page=1",
        API_CONSTANTS
      )
  
    const res = await data.json();
    
    return res;
}
