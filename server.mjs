import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const api = process.env.ArticleSearchAssign5 //Acesses the API 

app.use(
    cors({
       origin: "http://localhost:3001"
    })
)

app.get("/api/data", async (req, res) => { 
    const {month} = req.query; 
    //grabs data from the API
    const response = await fetch(`https://api.nytimes.com/svc/archive/v1/2024/${month}.json?api-key=${api}`);
    const data = await response.json(); 
    res.json(data); 
});

app.get("/api/search", async (req, res) => {
    const {query} = req.query; 
    //grabs data from the API
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${api}`);
    const data = await response.json(); 
    res.json(data);
})
//the server runs on port 3000 and gives the message to user
app.listen(3000, () => console.log("Server is running on port 3000"));