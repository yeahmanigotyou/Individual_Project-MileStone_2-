import React from 'react'

const TableH = ({data}) => {


    return(
        <table>
            <tbody>
                {data.map((item) => (
                    <tr key ={item.film_id}>
                        <td>{item.film_id}</td>
                        <td>{item.movie_title}</td>
                        <td>{(item.rental_date).toLocalDateString}</td>
                        <td>{item.return_date ? 'RETURNED' : 'NOT RETURNED'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableH