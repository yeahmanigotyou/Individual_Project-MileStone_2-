import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate} from 'react-router-dom'

const Delete = () => {

    const [customer,setCustomer] = useState({
        customer_id:"",
        customer_name:"",
        email:"",
        customer_address:"",
        customer_district:"",
        customer_city:"",
        customer_country:"",
        customer_postal_code:"",
        phone:""
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setCustomer((prev) =>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.delete(`http://localhost:8800/Backend/customer/${customer.customer_id}`, customer)
            navigate("/customer")
        }catch(err){
            console.log(err)
        }

    };

    return (
        <div className='home'>
            <div className='headRow'>
                <h1>Delete Customer</h1>
                <div className='add'>
                    <form className='form'>
                        <p>ID: <input type="text" placeholder="Customer ID..." onChange={handleChange} name="customer_id"/> </p>
                        <p>Name: <input type="text" placeholder="Full Name..." onChange={handleChange} name="customer_name"/> </p>
                    </form>
                    <div className='button'>
                        <button onClick={handleClick}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
)}

export default Delete