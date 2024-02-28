import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate} from 'react-router-dom'

console.log()
const Update = () => {

    const state = useLocation().state
    const [customer_id, setID] = useState(state?.customer_id || "");
    const [customer_name, setName] = useState(state?.customer_name || "");
    const [email, setEmail] = useState(state?.email || "");
    const [customer_address, setAddress] = useState(state?.customer_address || "");
    const [customer_district, setDistrict] = useState(state?.customer_district || "");
    const [customer_city, setCity] = useState(state?.customer_city || "");
    const [customer_country, setCountry] = useState(state?.customer_country || "");
    const [customer_postal_code, setPostal] = useState(state?.customer_postal_code || "");
    const [phone, setPhone] = useState(state?.phone || "");

    const navigate = useNavigate()

    const handleClick = async e=>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:8800/Backend/customer/${state?.customer_id}`, {
                customer_id,
                customer_name,
                email,
                customer_address,
                customer_district,
                customer_city,
                customer_country,
                customer_postal_code,
                phone
            });
            navigate("/customer");

        }catch(err){
            console.log(err)
        }
    };
    
    return (
        <div className='home'>
            <div className='update'>
                    <form className='form'>
                        <p>ID: <input type="text" value={customer_id} readOnly placeholder=""/></p>
                        <p>Name: <input type="text" value={customer_name} placeholder="" onChange={e=>setName(e.target.value)}/></p>
                        <p>Email: <input type="text" value={email} placeholder="" onChange={e=>setEmail(e.target.value)}/></p>
                        <p>Address: <input type="text" value={customer_address} placeholder="" onChange={e=>setAddress(e.target.value)}/></p>
                        <p>District: <input type="text" value={customer_district} placeholder="" onChange={e=>setDistrict(e.target.value)}/></p>
                        <p>City: <input type="text" value={customer_city} placeholder="" onChange={e=>setCity(e.target.value)}/></p>
                        <p>Country: <input type="text" value={customer_country} placeholder="" onChange={e=>setCountry(e.target.value)}/></p>
                        <p>Postal: <input type="text" value={customer_postal_code} placeholder="" onChange={e=>setPostal(e.target.value)}/></p>
                        <p>Phone: <input type="text" value={phone} placeholder="" onChange={e=>setPhone(e.target.value)}/></p>
                    </form>
                    <div className='button'>
                        <button onClick={handleClick}>SUBMIT</button>
                    </div>
            </div>
        </div>
    )
}

export default Update