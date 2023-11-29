import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "20.195.166.255",
    port: "3306",
    user: "admin2",
    password: "@dm!n",
    database: "senac2303",
})