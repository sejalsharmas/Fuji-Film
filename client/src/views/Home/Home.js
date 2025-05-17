import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"
import FilmCard from '../../components/FilmCards/FilmCard'

function Home() {
  const [films, setFilms] = useState([])

  const loadFilms = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/films`)
      setFilms(response.data.data)
      toast.success(response.data.message)
    }
    catch (error) {
      toast.error(error?.response?.data?.message || error?.message)
    }
  }
  useEffect(() => {
    loadFilms()
  }, [])
  return (
    <>
      <div>Home</div>
      {
        films.map((film, index) => {
          const {
            title,
            shortDescription,
            genre,
            director,
            year,
            language,
            poster,
            rating,
            _id
          } = film;
          return (<FilmCard key={index} 
            title={title}
            shortDescription={shortDescription}
            genre={genre}
            director={director}
            year={year}
            language={language}
            poster={poster}
            rating={rating}
            _id={_id}
          />)
        })
      }
      <Toaster />
    </>
  )
}

export default Home