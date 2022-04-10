import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';

export default function SingleMovie() {
    const [movie,setMovie] = useState({})
    const [loading,setLoading] = useState(false)
   
    const {id} = useParams();
    const fetchMovie = async (movieId) => {
      setLoading(true)
        const data = await (await fetch(`${React_App_MOVIE_URL}/?i=${movieId}&apikey=${React_App_API_KEY}`)).json();
        if(data.Error) {
          setMovie({Title : "Movie Not found"})
        }
        else {
          setMovie(data);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchMovie(id)
    },[id])
    if(loading) {
      return <div className="center"><CircularProgress color='inherit'/><p>Loading...</p></div>
    }

  return (
    <> 
      <div className="single-movie">
       
        <div className="poster-and-details">
        <div className="poster-header"></div>
        <img className="poster-img" src={movie.Poster} alt={`${movie.Title} Movie`} />
        <div className="meta-container">
        <label className="meta-title">LANGUAGE</label>
        <p>{movie.Language}</p>
        <label className="meta-title">RELEASE IN</label>
        <p>{movie.Released}</p>
        <label className="meta-title">MOVIE CATEGORY</label>
        <p>{movie.Genre}</p>
        <label className="meta-title">LENGTH</label>
        <p>{movie.Runtime}</p>
        <label className="meta-title">OFFICIAL WEBSITE</label>
        <p>{movie.Website}</p>
        <label className="meta-title">WRITER</label>
        <p>{movie.Writer}</p>
        <label className="meta-title">DIRECTOR</label>
        <p>{movie.Director}</p>
        </div>
        <div>
        </div>
        </div>
        <div className="details-container">
        <p className='movie-title'>{movie.Title}</p>
        <p className='movie-plot'>{movie.Plot}</p>
        <label className='details-title'>ACTORS</label>
        <p className="details-ans">{movie.Actors}</p>
        <label className='details-title'>BOX OFFICE COLLECTION</label>
        <p className="details-ans">{movie.BoxOffice}</p>
        <label className='details-title'>AWARDS AND NOMINATIONS</label>
        <p className="details-ans">{movie.Awards}</p>
        <label className='details-title'>IMDB RATING</label>
        <Rating 
          name="movie-rating"
          
          max={10}
          precision={0.2}
          value={7.4}
          readOnly
          size="large"
        />
         <div className="stat-container">
          <div className="icon-container">
         
          <i className="fa fa-star fa-2xl" aria-hidden="true"></i>
          <p className="stat-value">{movie.imdbVotes}</p>
          <p className="stat-info">IMDB Votes</p>
          </div>

          <div className="icon-container">
          <i className="fa fa-comment fa-2xl" aria-hidden="true"></i>
          <p className="stat-value">{331}</p>
          <p className="stat-info">Comments</p>
          </div>

          <div className="icon-container">
          <i className="fa-solid fa-face-smile fa-2xl"></i>
          <p className="stat-value">{movie.Metascore ? `${movie.Metascore}%` : "None"}</p>
          <p className="stat-info">Rotten Tomatoes</p>
          </div>
        
        
        </div>
        </div>
      
      </div>
    </>
  )
}
