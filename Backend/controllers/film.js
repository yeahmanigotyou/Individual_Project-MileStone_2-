import db from "../db.js"

export const getFilms = (req,res) =>{
    const q = "SELECT * FROM film";

    db.query(q,(err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getFilm = (req, res) =>{
    const q = "SELECT f.film_id, f.title, f.description, f.release_year, f.length, f.rating, f.special_features, l.name AS language, c.name AS category FROM film f JOIN language l ON f.language_id = l.language_id JOIN film_category fc ON f.film_id = fc.film_id JOIN category c ON fc.category_id = c.category_id WHERE f.language_id IS NOT NULL AND c.category_id IS NOT NULL AND f.film_id = ?";

    db.query(q,[req.params.film_id], (err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data[0]);
    })
}

export const createFilm = (req,res) =>{
    res.json("from controlla")
}

export const updateFilm = (req,res) =>{
    res.json("from controlla")
}
export const deleteFilm = (req,res) =>{
    res.json("from controlla")
}
