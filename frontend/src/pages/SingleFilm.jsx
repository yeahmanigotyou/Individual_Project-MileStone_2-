import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NoMovie from "../img/NoMovie.png"
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';

const SingleFilm = () => {

const [film,setSfilm] = useState({})

const location = useLocation()

const filmId = location.pathname.split("/")[2]

        useEffect(()=>{
            const fetchFilmData = async ()=>{
                try{
                    const res = await axios.get(`http://localhost:8800/Backend/film/${filmId}`)
                    setSfilm(res.data)
                }catch(err){
                    console.log(err)
                }
            };
            fetchFilmData();
        },[filmId])

        return(
            <div className='home'>
                    <div className='singlefilm' key={film.film_id}>
                        <div className='img'>
                            <img src={NoMovie} alt=''/>
                        </div>
                        <div className='content'>
                            <h1>
                                {film.title}
                            </h1>
                            <h2>
                                Description: 
                            </h2>
                            <p>
                                {film.description}
                            </p>
                            <h2>
                                Release Year: 
                            </h2>
                            <p>
                                {film.release_year}
                            </p>
                            <h2>
                                Length: 
                            </h2>
                            <p>
                                {film.length} minutes
                            </p>
                            <h2>
                                Rating:  
                            </h2>
                            <p>
                               {film.rating}
                            </p>
                            <h2>
                                Special Features: 
                            </h2>
                            <p>
                                {film.special_features}
                            </p>
                            <h2>
                                Language: 
                            </h2>
                            <p>
                                {film.language}
                            </p>
                            <h2>
                                Category:
                            </h2>
                            <p >
                                {film.category}
                            </p>
                            <h2>
                                Rental Rate:
                            </h2>
                            <p>
                                ${film.rental_rate}
                            </p>
                            <Link to={`http://localhost:3000/rent`} state={film}><button>RENT OR RETURN FILM</button></Link>
                        </div>
                    </div>
            </div>
        )
}
export default SingleFilm