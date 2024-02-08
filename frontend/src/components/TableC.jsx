import React from 'react'
import { Link } from 'react-router-dom'

const TableC = ({data}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {data.map((item) => (
                    <tr key ={item.customer_id}>
                        <Link to={`http://localhost:3000/customer/${item.customer_id}`}><td>{item.customer_id}</td></Link>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableC