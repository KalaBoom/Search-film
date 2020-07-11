import React from 'react'
import './Films.css'

function ShowFilms({films}) {
    console.log(films)
    return (
        <ul className="films">
            {
                films.map((film,index) => {
                    return <li key={index} className="film">
                            {film.Poster !== 'N/A' ? 
                                <img className="film__poster" src={film.Poster} alt="Poster film"/> : 
                                <div className="film__no-poster"><span className="film__no-poster__text">no poster</span></div>
                            }

                            <div className="film__text">
                                <span>{film.Title}</span>
                                <br/>
                                <span>{film.Year}</span>
                            </div>
                        </li>
                })
            }
        </ul>
    )
}

export default ShowFilms