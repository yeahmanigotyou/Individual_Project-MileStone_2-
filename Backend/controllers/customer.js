import db from "../db.js"

export const getCustomers = (req,res) =>{
    const q = "SELECT * FROM single_customer ORDER BY customer_id ASC";

    db.query(q,(err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getCustomer = (req,res) =>{
    const q = "SELECT * from single_customer sc WHERE sc.customer_id = ?";

    db.query(q,[req.params.customer_id], (err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json(data[0]);
    })
}

export const addCustomer = (req,res) =>{
    const q = "INSERT INTO single_customer (`customer_id`, `customer_name`, `email`, `customer_address`, `customer_district`, `customer_city`, `customer_country`, `customer_postal_code`, `phone`) VALUES (?)";

    const values = [
        req.body.customer_id,
        req.body.customer_name,
        req.body.email,
        req.body.customer_address,
        req.body.customer_district,
        req.body.customer_city,
        req.body.customer_country,
        req.body.customer_postal_code,
        req.body.phone
    ];

    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.json("Customer has been creatd.");
    });
};

export const updateCustomer = (req,res) =>{
    const customerID = req.params.customer_id
    const q = "UPDATE single_customer SET `customer_name`=?, `email`=?, `customer_address`=?, `customer_district`=?, `customer_city`=?, `customer_country`=?, `customer_postal_code`=?, `phone`=? WHERE `customer_id`=?";

    const values = [
        req.body.customer_name,
        req.body.email,
        req.body.customer_address,
        req.body.customer_district,
        req.body.customer_city,
        req.body.customer_country,
        req.body.customer_postal_code,
        req.body.phone,
        req.body.customer_id
    ]

    db.query(q,[...values, customerID], (err,data) =>{
        if(err)
            return res.status(500).json(err);
            return res.json("Customer has been updated.");
    })
}

export const deleteCustomer = (req,res) =>{
    res.json("from controlla")
}

