import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import TableF from '../components/TableF';

const Film = () => {
    
    const [query,setQuery] = useState("");

    const searchName = (data) => {
        return data.filter((item) => item.film_title.toLowerCase().includes(query));
    }

    const searchActor = (data) => {
        return data.filter((item) => item.actors.toLowerCase().includes(query));
    }

    const searchGenre = (data) => {
        return data.filter((item) => item.genre.toLowerCase().includes(query));
    }

    const[film,setFilm] = useState([])

    useEffect(()=>{
        const fetchAllFilm = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/Backend/film/")
                setFilm(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllFilm()
    },[])

    return (
        <div className='home'>
            <div className='headRow'>
                <h1>Films</h1>
                <input type="text" placeholder='Title...' className='search' onChange={e=> setQuery(e.target.value)}/>
                <input type="text" placeholder='Actor...' className='search' onChange={e=> setQuery(e.target.value)}/>
                <input type="text" placeholder='Genre...' className='search' onChange={e=> setQuery(e.target.value)}/> 
                    <TableF data={searchName(film)}/>
                    <TableF data={searchActor(film)}/>
                    <TableF data={searchGenre(film)}/>
            </div>
        </div>
    );
};

export default Film

//            <div className='tableShell'>
//<table className='films'>
//<tbody>
//    <tr>
//        <th>Title</th>
 //       <th>Description</th>
 //       <th>Release Year</th>
  //      <th>Rental Rate</th>
   //     <th>Rating</th>
  //      <th>Special Features</th>
 //   </tr>
 //   {film.map((film) =>(
 //   <tr key={film.film_id}>
 //       <td>{film.title}</td>
  //      <td>{film.description}</td>
  //      <td>{film.release_year}</td>
  //      <td>${film.rental_rate}</td>
  //      <td>{film.rating}</td>
  //      <td>{film.special_features}</td>
 //       <Link to="/rent">
   //         <button>Rent Film</button>     
//        </Link>
  //      <Link to={`http://localhost:3000/film/${film.film_id}`}>
  //          <button>More Details</button>
 //       </Link>
 //   </tr>
  //  ))}
//</tbody>
//</table>
//</div>