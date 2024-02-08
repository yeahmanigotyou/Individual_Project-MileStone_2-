import db from "../db.js"

export const getCustomers = (req,res) =>{
    const q = "SELECT * FROM customer";

    db.query(q,(err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getCustomer = (req,res) =>{
    const q = "SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS customer_name, c.email, c.address AS customer_address, c.district AS customer_district, c.city AS customer_city, c.country AS customer_country, c.postal_code AS customer_postal_code, c.phone, s.store_id, s.manager_staff_id, CONCAT(s_a.address, ', ', s_a.district, ', ', s_a.city, ', ', s_a.country) AS store_address FROM customer c JOIN address c_a ON c.address_id = c_a.address_id JOIN store s ON c.store_id = s.store_id JOIN address s_a ON s.address_id = s_a.address_id WHERE c.customer_id = ? ORDER BY c.customer_id = ?";

    db.query(q,(err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const addCustomer = (req,res) =>{
    res.json("from controlla")
}

export const updateCustomer = (req,res) =>{
    res.json("from controlla")
}

export const deleteCustomer = (req,res) =>{
    res.json("from controlla")
}

