import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import TableC from '../components/TableC';

const Customer = () => {
    const[customer,setCustomer] = useState([])
    const [query,setQuery] = useState("");

    const search = (data) => {
        return data.filter((item) =>  item.customer_id.toString().includes(query) || item.customer_name.toLowerCase().includes(query));
    }

    useEffect(()=>{
        const fetchAllCustomer = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/Backend/customer/")
                setCustomer(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllCustomer()
    },[])

    return (
    <div className='home'>
        <div className='headRow'>
            <h1>Customers</h1>
            <input type="text" placeholder='Search...' className='search' onChange={e=> setQuery(e.target.value)}/>
                <TableC data={search(customer)}/>
        </div>
    </div>
    );
};

export default Customer

//<div className='customer'>
//{customer.map(customer=>(
 //   <div className="customer" key={customer.customer_id}>
 //       <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Not avaiable." width="200" height="200" />
 //       <h3>{customer.first_name}</h3>
  //      <h3>{customer.last_name}</h3>
 //       <h3>{customer.email}</h3>
 //   </div>
//))}
//</div>
//<button><Link to="/add">Add new customer</Link></button>

//return data.filter((item) =>  item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query));
