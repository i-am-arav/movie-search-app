import React from 'react';
import {Link} from 'react-router-dom';
import { useGlobalContext } from './context';

export default function Movies() {
    const {movies, isLoading} = useGlobalContext();
  
    if(isLoading) {
        return <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }
    
    return (
        <div className="movie-list" >
        {movies.map((movie) => {
            const { imdbID:id, Title: title, Year : year, Poster:url }  = movie;
            return (
                    <Link to={`/movies/${id}`} key={id} className="movie-item">
                    <img className="movie-img" src={url} />
                    <div style={{padding:"2px 8px"}}>
                    <p><strong>Title : </strong>{title}</p>
                    <p><strong>Release Date : </strong>{year}</p>
                    </div>
                    </Link>
               )
        })}

    </div>
    )
}
