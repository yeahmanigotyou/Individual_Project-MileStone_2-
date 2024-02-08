import React, { useEffect, useState } from 'react'
import NoMovie from "../img/NoMovie.png"
import ProfilePic from "../img/ProfilePic.png"
import axios from "axios"
import 'reactjs-popup/dist/index.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const fetchT5MData = async ()=>{
            try{
                const res = await axios.get('http://localhost:8800/Backend/home/topMovies')
                setPosts(res.data)
            }catch(err){
                console.log(err)
            }
        };
        fetchT5MData();
    },[])

    const [actors,setActors] = useState([])

    useEffect(()=>{
        const fetchActorData = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/Backend/home/topActors")
                setActors(res.data)
            }catch(err){
                console.log(err)
            }
        };
        fetchActorData();
    },[])


    return (
        <div className='home'>
            <div className="posts">
                <h1>
                    Top 5 Rented Films    
                </h1>
                {posts.map((post)=>(
                    <div className="post" key={post.film_id}>
                        <div className='img'>
                            <img src={NoMovie} alt=''/>
                        </div>
                        <div className='content'>
                            <h2>
                                {post.title}
                            </h2>
                            <p>
                                Category: {post.name}
                            </p>
                            <p>
                                Rental Count: {post.rented}
                            </p>
                            <Link to ={`http://localhost:3000/film/${post.film_id}`}>
                                <button>More Details</button>
                            </Link>
                        </div>   
                    </div>    
                ))}
                <h1>
                    Top 5 Actors
                </h1>
                {actors.map((actor)=>(
                    <div className='actor' key={actor.actor_id}>                            
                        <div className='img'>
                            <img src={ProfilePic} alt=''/>
                        </div>
                        <div className='content'>
                            <div>
                                <h2>
                                    {actor.first_name}
                                </h2>
                                <h2>
                                    {actor.last_name}
                                </h2>
                            </div>
                            <p>
                                Movie Count: {actor.movies}
                            </p>
                            <Link to ={`http://localhost:3000/actor/${actor.actor_id}`}>
                                <button>More Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default Home