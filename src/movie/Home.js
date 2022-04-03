import React ,{ useState }from 'react'
import Movies from './Movies'
import SearchForm from './SearchForm'

export default function Home() {
    const [movies,setMovies] = useState([])
  return (
    <div>
        <nav className='navbar'>
            <p>Movie App</p>
            <SearchForm setMoviesList={setMovies}/>
        </nav>
        
        <Movies moviesList={movies}/> 

    </div>
  )
}
