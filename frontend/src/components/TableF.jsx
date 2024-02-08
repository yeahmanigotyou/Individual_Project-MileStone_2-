import React from 'react'
import { Link } from 'react-router-dom';

const TableF = ({data}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Realease Year</th>
                    <th>Rental Rate</th>
                    <th>Rating</th>
                    <th>Special Features</th>
                </tr>
                {data.map((item) => (
                    <tr key ={item.film_id}>
                    <Link to={`http://localhost:3000/film/${item.film_id}`}><td>{item.title}</td></Link>
                        <td>{item.description}</td>
                        <td>{item.release_year}</td>
                        <td>${item.rental_rate}</td>
                        <td>{item.rating}</td>
                        <td>{item.special_features}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableF