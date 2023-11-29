import express from "express";
import userRoutes from "./routes/users.js";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login')

app.use("/", userRoutes);

app.listen(5000);

