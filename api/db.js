import mysql from "mysql"

export const db = mysql.createConnection({
    host: "20.195.166.255",
    port: "3306",
    user: "root",
    password: "P@$$w0rd",
    database: "senac2303",
})