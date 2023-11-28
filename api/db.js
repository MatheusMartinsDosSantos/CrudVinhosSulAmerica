import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@$$w0rd",
    database: "senac2303",
})