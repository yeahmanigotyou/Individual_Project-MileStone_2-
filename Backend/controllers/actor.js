import db from "../db.js"

export const getActors = (req, res) => {
    const q = "SELECT * from actor";

    db.query(q,(err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getActor = (req, res) => {
    const q = "SELECT a.actor_id, a.first_name, a.last_name, f.film_id, f.title, f.description, f.release_year, f.length, f.rating, f.special_features, COUNT(r.rental_id) AS rental_count FROM actor a JOIN film_actor fa ON a.actor_id = fa.actor_id JOIN film f ON fa.film_id = f.film_id JOIN inventory i ON f.film_id = i.film_id JOIN rental r ON i.inventory_id = r.inventory_id WHERE a.actor_id = ? GROUP BY a.actor_id, f.film_id ORDER BY rental_count DESC LIMIT 5";

    db.query(q,[req.params.actor_id], (err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })

}

export const getTopFiveActor = (req, res) => {
    const q = "SELECT fr.film_id, fr.title, fr.description, fr.release_year, fr.length, fr.rating, fr.special_features, fr.rental_count FROM ( SELECT f.film_id, f.title, f.description, f.release_year, f.length, f.rating, f.special_features, COUNT(r.rental_id) AS rental_count, ROW_NUMBER() OVER (ORDER BY COUNT(r.rental_id) DESC) AS row_num FROM film f JOIN film_actor fa ON f.film_id = fa.film_id JOIN actor a ON fa.actor_id = a.actor_id JOIN inventory i ON f.film_id = i.film_id JOIN rental r ON i.inventory_id = r.inventory_id WHERE a.actor_id = ? GROUP BY f.film_id) AS fr WHERE row_num <= 5 ORDER BY fr.rental_count DESC";
    db.query(q,[req.params.actor_id], (err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })

}