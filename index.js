import express from "express";
const zomato = express();

zomato.use(express.json());

zomato.get("/",(req,res)=>{
    res.json({
        message: "Server is running..",
    });
});

const port = 4000;

zomato.listen(port, ()=>{
    console.log("Server is running !!");
});