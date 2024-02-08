import db from "../db.js"

export const getTopFiveRentedMovies = (req,res) => {
    const q = "select film.film_id, film.title, category.name, count(rental.rental_id) as rented from film join inventory on film.film_id = inventory.film_id join rental on inventory.inventory_id = rental.inventory_id join film_category on film.film_id = film_category.film_id join category on film_category.category_id = category.category_id group by film.film_id, film.title, category.name order by rented desc limit 5";

    db.query(q,(err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getTopFiveActor = (req,res) =>{
    const q = "select actor.actor_id, actor.first_name, actor.last_name, count(film_actor.film_id) as movies from actor join film_actor on actor.actor_id = film_actor.actor_id group by actor.actor_id, actor.first_name, actor.last_name order by movies desc limit 5";

    db.query(q,(err,data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getFilmDetail = (req, rees) =>{
    const q = req.query.film ? "select * from film where film_id=?": "select * from film_id";

    db.query(q,[res.query.film],(err,data) => {
        if(err) return res.send(err)

        return res.status(200).json(data)
    });
}

export const getActorDetail = (req, res) =>{
    const q = "SELECT fr.film_id, fr.title, fr.description, fr.release_year, fr.length, fr.rating, fr.special_features, fr.rental_count FROM ( SELECT f.film_id, f.title, f.description, f.release_year, f.length, f.rating, f.special_features, COUNT(r.rental_id) AS rental_count, ROW_NUMBER() OVER (ORDER BY COUNT(r.rental_id) DESC) AS row_num FROM film f JOIN film_actor fa ON f.film_id = fa.film_id JOIN actor a ON fa.actor_id = a.actor_id JOIN inventory i ON f.film_id = i.film_id JOIN rental r ON i.inventory_id = r.inventory_id WHERE a.actor_id = @actor_id GROUP BY f.film_id) AS fr WHERE row_num <= 5 ORDER BY fr.rental_count DESC;"

    db.query(q,[res.query.actor_id],(err,data) => {
        if(err) return res.send(err)

        return res.status(200).json(data)
    });
}