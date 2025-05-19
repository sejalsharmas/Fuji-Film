import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import BackImg from './../../assets/back-button.png'
import toast ,{Toaster} from 'react-hot-toast'

function EditFilm() {
  const [film, setFilm] = useState({
    title: '',
    shortDescription: '',
    director: '',
    poster:'',
    year:'',
    genre:'',
    language:'',
    rating: '',

  });

  const {id} = useParams();

  const loadFilmDetails = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/films/${id}`)
    setFilm(response.data.data);
    toast.success(response.data.message);
  }

  useEffect(() => {
    loadFilmDetails();
  },[])

  const updateFilm = async() => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/films/${id}`,{
title: film.title,
shortDescription: film.shortDescription,
director: film.director,
poster: film.poster,
year: film.year,
genre: film.genre,
language: film.language,
rating: film.rating,
    })
    toast.success(response.data.message);
    setFilm(response.data.data);
  }
  return (
    <>
      <Link to='/'>
        <img src={BackImg} alt='back-btn-icon' className='back-icon'></img>
        </Link>
      <div className='add-film-form'>
        <span>Update Film 🎥</span>
        <Input
                   value={film.title}
                   setValue={(val)=>{setFilm({...film , title:val})}}
                   placeholder='Title'
                   type='text'
                   />
       
                   <Input
                   value={film.shortDescription}
                   setValue={(val)=>{setFilm({...film , shortDescription:val})}}
                   placeholder='Short Description'
                   type='text'
                   />
       <Input
                   value={film.director}
                   setValue={(val)=>{setFilm({...film , director:val})}}
                   placeholder='Director'
                   type='text'
                   />
        <Input
          value={film.poster}
          setValue={(val) => { setFilm({ ...film, poster: val }) }}
          placeholder='Poster Link'
          type='text'
        />

         <Input
                    value={film.year}
                    setValue={(val)=>{setFilm({...film ,year:val})}}
                    placeholder='Year'
                    type='text'
                    />
        
        <Input
                    value={film.genre}
                    setValue={(val)=>{setFilm({...film , genre:val})}}
                    placeholder='Genre'
                    type='text'
                    />

          <Input
            value={film.language}
            setValue={(val)=>{setFilm({...film , language:val})}}
            placeholder='Language'
            type='text'
            />
          <Input
                     value={film.rating}
                     setValue={(val)=>{setFilm({...film , rating:val})}}
                     placeholder='Rating'
                     type='text'
                     />

       

        
       

        
        <Button title="Update Film"
          onClick={() => { updateFilm() }}
        />
        <Toaster/>
      </div>
    </>

  )

}

export default EditFilm