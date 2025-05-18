import React from 'react'
import './FilmCard.css'
import Chair from './../../assets/director-chair.png'
import Year from './../../assets/calendar.png'
import Rating from './../../assets/stars.png'
import hindi from './../../assets/language.png'
import category from './../../assets/cinema.png'
import Button from '../Button/Button'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

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
}) 
{
  const navigate = useNavigate()
  const deleteFilm = async() =>{
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/films/${_id}`)

      toast.success(response.data.message)
      window.location.reload()
  }
  return (
    <div className='filmcard'>
      <div>
         <img src={poster} alt={title} className='film-card-poster'></img>
      </div>
      <div>
          <h1 className='film-card-info'>{title}</h1>
          <div className='film-card-info-details'>
            <span className='director'>
              <img src={Chair} className='film-info-icon' alt='img'></img>
              <b>{director}</b> 
            </span>
            <span className='year'>
              <img src={Year} className='film-info-icon' alt='img'></img>
               <b>{year}</b> 
            </span>
            <span className='Rating' >
              <img src={Rating} className='stars' alt='img'></img>
              :<b>{rating}</b>
            </span>
          </div>
          <p className='describe' >{shortDescription}</p>
          <div className='film-details'>
            <span className='hindi'>
              <img src={category} className='film-info-icon' alt='img'></img>
              {genre}</span>
            <span className='category'>
              <img src={hindi} className='film-info-icon' alt='img'></img>
              {language}</span>
          </div>
      </div>
      <div className='btn-row'>
         <div className='edit-btn'>
          <Button title= "Edit"  
          onClick={() => {navigate(`/film/edit/${title}`)}}/>
         </div>
         <div className='delete-btn'>
       <Button
        title="Delete"
        onClick={() => deleteFilm ()}
        />
        </div>
        </div>
       <Toaster/>
      
   </div>
  )
}

export default FilmCard