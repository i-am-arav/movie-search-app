import React, {useState,useEffect } from 'react'
import './movie.css'

export default function SearchForm({setMoviesList}) {
    const [movieSearch,setMovieSearch] = useState("batman");
    const handleChange = (e) => {
        setMovieSearch(e.target.value)
    }

    const fetchMovie = async (searchTerm) => {
        const result = await (await fetch(`${React_App_MOVIE_URL}?t=${searchTerm}&apikey=${React_App_API_KEY}`)).json()
        setMoviesList([result])
    }
    useEffect(() => {
        fetchMovie(movieSearch)
    },[movieSearch])


  return (
        <div className="searchFormContainer">
             <input className="searchForm" value={movieSearch} onChange={handleChange} />
        </div>
  )
}
