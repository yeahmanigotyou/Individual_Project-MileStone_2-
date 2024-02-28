import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
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
            await axios.post("http://localhost:8800/Backend/customer", customer)
            navigate("/customer")
        }catch(err){
            console.log(err)
        }

    };

    console.log(customer)

    return (
        <div className='home'>
            <div className='headRow'>
                <h1>Add New Customer</h1>
                <div className='add'>
                    <form className='form'>
                        <p>ID: <input type="text" placeholder="Customer ID..." onChange={handleChange} name="customer_id"/> </p>
                        <p>Name: <input type="text" placeholder="Full Name..." onChange={handleChange} name="customer_name"/> </p>
                        <p>Email: <input type="text" placeholder="Email..." onChange={handleChange} name="email"/> </p>
                        <p>Address: <input type='text' placeholder='Address...' onChange={handleChange} name="customer_address"/> </p>
                        <p>District: <input type='text' placeholder='District/State...' onChange={handleChange} name="customer_district"/> </p>
                        <p>City: <input type='text' placeholder='City...' onChange={handleChange} name="customer_city"/> </p>
                        <p>Country: <input type='text' placeholder='Country...' onChange={handleChange} name="customer_country"/> </p>
                        <p>Postal: <input type='text' placeholder='Postal Code...' onChange={handleChange} name="customer_postal_code"/> </p>
                        <p>Phone: <input type='text' placeholder='Phone...' onChange={handleChange} name="phone"/> </p>
                    </form>
                    <div className='button'>
                        <button onClick={handleClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add