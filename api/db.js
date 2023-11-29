import mysql from "mysql"

export const db = mysql.createConnection({
    host: "20.195.166.255",
    user: "admin",
    password: "@dm!n",
    database: "senac2303",
})