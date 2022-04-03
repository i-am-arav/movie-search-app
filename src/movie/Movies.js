import React, { useState } from 'react'
import data from './temp'

export default function Movies({moviesList}) {

    const [isLoading, setIsLoading] = useState(false)

   

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="movie-list">
            {data.map((movie) => {
                const { Title: title, Released: releasedDate, Language: lang , Poster:url} = movie;
                return (
                    <div className="movie-item" >
                        <img className="movie-img" src={url} />
                        <div style={{padding:"2px 8px"}}>
                        <p><strong>Title : </strong>{title}</p>
                        <p><strong>Release Date : </strong>{releasedDate}</p>
                        <p><strong>Language</strong>{lang}</p>
                        </div>
                    </div>)
            })}

        </div>
    )
}
