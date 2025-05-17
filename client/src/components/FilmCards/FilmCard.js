import React from 'react'
import './FilmCard.css'

function FilmCard({
    title,
    shortDescription,
    genre,
    director,
    year,
    language,
    poster,
    rating,
    _id
}) {
  return (
    <div className='filmcard'>
   <h1>{title}</h1>
   </div>
  )
}

export default FilmCard