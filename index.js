const Port = 8080;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { response, json } = require("express");
// const fetch =  require("node-fetch");

require("dotenv").config();


const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// get foods
app.get("/foods", () => {
    const url = process.env.ENDPOINT
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            'X-Cassandra-Token': process.env.ASTRA_TOKEN
        }
    }
    fetch(url, options).then(response => response.json()).then(json => res.json(json)).catch(err => console.log("error:" + err));
});

function notFound(req,res,next){
    req.status(404)
    const error = new Error("not found");
    next(error);
}

function errorHandler(error,req,res) {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound);
app.use(errorHandler);


app.listen(Port, () => console.log(`server is running ${Port}`));
