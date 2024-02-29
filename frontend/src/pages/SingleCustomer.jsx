import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProfilePic from "../img/ProfilePic.png"
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';

const SingleCustomer = () => {

const [customer,setScustomer] = useState({})

const location = useLocation()

const customerId = location.pathname.split("/")[2]

        useEffect(()=>{
            const fetchActorData = async ()=>{
                try{
                    const res = await axios.get(`http://localhost:8800/Backend/customer/${customerId}`)
                    setScustomer(res.data)
                }catch(err){
                    console.log(err)
                }
            };
            fetchActorData();
        },[customerId])

        return(
            <div className='home'>
                    <div className='singlecustomer' key={customer.customer_id}>
                        <div className='img'>
                            <img src={ProfilePic} alt=''/>
                        </div>
                        <div className='content'>
                            <h2>
                                Name: 
                            </h2>
                            <p>
                                {customer.customer_name}
                            </p>
                            <h2>
                                Email:  
                            </h2>
                            <p>
                                {customer.email}
                            </p>
                            <h2>
                                Address:  
                            </h2>
                            <p>
                                {customer.customer_address}
                            </p>
                            <h2>
                                District:  
                            </h2>
                            <p>
                                {customer.customer_district}
                            </p>
                            <h2>
                                City:  
                            </h2>
                            <p>
                                {customer.customer_city}
                            </p>
                            <h2>
                                Country:  
                            </h2>
                            <p>
                                {customer.customer_country}
                            </p>
                            <h2>
                                Postal Code:  
                            </h2>
                            <p>
                                {customer.customer_postal_code}
                            </p>
                            <h2>
                                Phone Number: 
                            </h2>
                            <p>
                                {customer.phone}
                            </p>
                            <h2>
                                Customer ID:  
                            </h2>
                            <p>
                                {customer.customer_id}
                            </p>
                            <Link to={`/update`} state={customer}><button>UPDATE</button></Link>
                            <Link to={`/history/${customerId}`} state={customer}><button>RENTAL HISTORY</button></Link>
                        </div>
                    </div>
            </div>
        )
}

export default SingleCustomer