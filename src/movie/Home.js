import React  from 'react'
import Movies from './Movies'
import SearchForm from './SearchForm'

export default function Home() {
  return (
    <div>
        <nav className='navbar'>
            <p>Movie App</p>
            <SearchForm />
        </nav>
        
        <Movies/> 

    </div>
  )
}
