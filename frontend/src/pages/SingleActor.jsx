import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProfilePic from "../img/ProfilePic.png"
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';

const SingleActor = () => {

const [actor,setSactor] = useState({})

const location = useLocation()

const actorId = location.pathname.split("/")[2]

        useEffect(()=>{
            const fetchActorData = async ()=>{
                try{
                    const res = await axios.get(`http://localhost:8800/Backend/actor/${actorId}`)
                    setSactor(res.data)
                }catch(err){
                    console.log(err)
                }
            };
            fetchActorData();
        },[actorId])

        return(
            <div className='home'>
                    <div className='singleactor' key={actor.actor_id}>
                        <div className='img'>
                            <img src={ProfilePic} alt=''/>
                        </div>
                        <div className='content'>
                            <h2>
                                First Name: 
                            </h2>
                            <p>
                                {actor.first_name}
                            </p>
                            <h2>
                                Last Name: 
                            </h2>
                            <p>
                                {actor.last_name}
                            </p>
                            <h2>
                                Last Name: 
                            </h2>
                            <p>
                                {actor.title}
                            </p>
                        </div>
                    </div>
            </div>
        )
}

export default SingleActor