import React from "react";
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

const History = () => {

    const state = useLocation().state;

    const [customer,setScustomer] = useState(state?.customer_id || "");

    const location = useLocation()

    const customerId = location.pathname.split("/")[2]

        useEffect(()=>{
            const fetchHistory = async ()=>{
                try{
                    const res = await axios.get(`http://localhost:8800/Backend/history/${customerId}`)
                    setScustomer(res.data)
                }catch(err){
                    console.log(err)
                }
            };
            fetchHistory();
        },[customerId])

    return(
        <div className="home">
            <div className="headerRow">
                <h2>Customer Rental History</h2>
            </div>
        </div>
    )
}

export default History