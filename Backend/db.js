import mysql from "mysql2"

export const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"yippie69",
        database:"sakila"
    })

    export default db;