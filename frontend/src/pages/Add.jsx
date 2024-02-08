import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [customer,setCustomer] = useState({
        first_name:"",
        last_name:""
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setCustomer((prev) =>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/customer", customer)
            navigate("/")
        }catch(err){
            console.log(err)
        }

    };

    console.log(customer)

    return (
        <div className='form'>
            <h1>Add New Customer</h1>
            <input type="text" placeholder="First Name" onChange={handleChange} name="first_name"/>
            <input type="text" placeholder="Last Name" onChange={handleChange} name="last_name"/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add