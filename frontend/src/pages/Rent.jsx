import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate} from 'react-router-dom'
import Datetime from 'react-datetime'

const Rent = () => {

    const today = new Date();
    const isoDate = today.toISOString().split('T')[0]; // Get the ISO date part
    
    const state = useLocation().state;
    const [film_id, setID] = useState(state?.film_id || "");
    const [movie_title, setTitle] = useState(state?.title || "");
    const [customer_id, setCustomerID] = useState(state?.customer_id || "");
    const [customer_name, setName] = useState(state?.customer_name || "");
    const [return_date, setReturnDate] = useState(null);

    const navigate = useNavigate()

    const handleClickRent = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/Backend/rent", {
                customer_id,
                customer_name,
                film_id,
                movie_title, 
                isoDate,
                return_date
            })
            navigate("/film")
        }catch(err){
            console.log(err)
        }

    };


    return (
        <div className='home'>
            <div className='headRow'>
                <h1>Film: </h1>
                <h2> {state.title} </h2>
                <h1>Price: </h1>
                <h2> ${state.rental_rate} </h2>
                <h1>Additional Information Required: </h1>
                <p>Enter Customer ID: <input type="text" placeholder="Customer ID..." onChange={e=>setCustomerID(e.target.value)}/> </p>
                <p>Enter Full Name: <input type="text" placeholder="Full Name..." onChange={e=>setName(e.target.value)}/> </p>
                <div className='button'>
                    <button onClick={handleClickRent}>Rent</button>
                </div>
            </div>
        </div>
    )
}

export default Rent