import db from "../db.js"

export const getHistory = (req, res) => {
    const q = "SELECT * from rental_history WHERE customer_id = ?";

    db.query(q,[req.params.customer_id], (err, data) =>{
        if(err) {
            console.log(err);
            return res.json(err);
        }
        return res.status(200).json(data);
    })
}