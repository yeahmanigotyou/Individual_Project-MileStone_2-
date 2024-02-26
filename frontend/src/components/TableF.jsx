import React from 'react'
import { Link } from 'react-router-dom';

const TableF = ({data}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Actors</th>
                    <th>Genre</th>
                </tr>
                {data.map((item) => (
                    <tr key ={item.film_id}>
                    <Link to={`http://localhost:3000/film/${item.film_id}`}><td>{item.film_title}</td></Link>
                        <td>{item.actors}</td>
                        <td>{item.genre}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableF