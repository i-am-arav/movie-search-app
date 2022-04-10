import React, {useState,useEffect } from 'react'
import './movie.css'
import axios from 'axios'
import { useGlobalContext } from './context'

export default function SearchForm() {
    const {query, setQuery} = useGlobalContext()
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

  return (
        <div className="searchFormContainer">
             <input className="searchForm" value={query} onChange={handleChange} />
        </div>
  )
}
