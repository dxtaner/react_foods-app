const Port = 8080;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch =  require("node-fetch");

require("dotenv").config();

morgan("tiny");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());