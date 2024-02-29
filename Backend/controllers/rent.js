import db from "../db.js"

export const updateRent = (req,res) => {
    const q = "INSERT INTO rented_movies (`customer_id`, `customer_name`, `film_id`, `movie_title`, `rental_date`, `return_date`) VALUES (?)";

    const values = [
        req.body.customer_id,
        req.body.customer_name,
        req.body.film_id,
        req.body.movie_title,
        req.body.isoDate,
        req.body.return_date
    ];

    db.query(q, [values], (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).json(err)
        };
        return res.json("Movie has been rented out.");
    });    
     
}