import React, { useState } from 'react'
import './AddFilm.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"
import BackImg from './../../assets/back-button.png'
import { Link } from 'react-router-dom'

function AddFilm() {
    const [film, setFilm] = useState({
        title:'',
        shortDescription:'',
        genre:'',
        director:'',
        year:'',
        language:'',
        poster:'',
        rating:'',

    });

    const addFilm = async() =>{
         const response = await axios.post(`${process.env.REACT_APP_API_URL}/films`,{
            title: film.title,
            shortDescription: film.shortDescription,
            genre: film.genre,
            director: film.director,
            year: film.year,
            language: film.language,
            poster: film.poster,
            rating: film.rating
         }
        );
        toast.success(response.data.message);
        console.log(response);

         

         setFilm({
            title:'',
            shortDescription:'',
            genre:'',
            director:'',
            year:'',
            language:'',
            poster:'',
            rating:'',
         })
    };
    return (
        <>
        <Link to='/'>
        <img src={BackImg} alt='back-btn-icon' className='back-icon'></img>
        </Link>
        <div className='add-film-form'>
            <span>Add Film 🎥</span>
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

       

        
       
            
            <Button title="Add Film"
            onClick={()=>{addFilm()}}
            />
               <Toaster/>
        </div>
       </>

    )
}

export default AddFilm