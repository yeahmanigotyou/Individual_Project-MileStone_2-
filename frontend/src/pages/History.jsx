import React from "react";
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import TableH from "../components/TableH";

const History = () => {

    const state = useLocation().state;

    const [history,setHistory] = useState([]);
    const [name, setName] = useState(state?.customer_name || "");
    const [query,setQuery] = useState("");


    const search = (data) => {
        return data.filter((item) =>  item.film_id.toString().includes(query) || item.movie_title.toLowerCase().includes(query));
    }

    const location = useLocation()
    const customerId = location.pathname.split("/")[2]

        useEffect(()=>{
            const fetchHistory = async ()=>{
                try{
                    const res = await axios.get(`http://localhost:8800/Backend/history/${customerId}`)
                    setHistory(res.data)
                }catch(err){
                    console.log(err)
                }
            };
            fetchHistory();
        },[])

    return(
        <div className="home">
            <div className="headerRow">
                <h1>Customer Rental History</h1>
                <h2>Name: {name}</h2> 
                <h2>ID: {customerId}</h2>
                <div className="history">
                    <input type="text" placeholder='Search...' className='search' onChange={e=> setQuery(e.target.value)}/>
                        <TableH data={search(history)}/>
                </div>
            </div>
        </div>
    )
}

export default History