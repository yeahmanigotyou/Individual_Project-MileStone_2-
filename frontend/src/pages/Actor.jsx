import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Actor = () => {
    const[actor,setActor] = useState([])

    useEffect(()=>{
        const fetchAllActor = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/Backend/actor/")
                setActor(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllActor()
    },[])

    return (
        <div className='home'>
            <div className='headRow'>
                <h1>Actors</h1>
                <input type="text" placeholder='Search...' className='search'/>
            </div>
            <div className='tableShell'>
                <table className='actor'>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        {actor.map((actor) =>(
                        <tr key={actor.actor_id}>
                            <td>{actor.first_name}</td>
                            <td>{actor.last_name}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {actor.map((actor) =>(
                <div>
                    <Link to={`http://localhost:3000/actor/${actor.actor_id}`}>
                        <button>More Details</button>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Actor