const express = require('express').Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

const router = express;

//read
router.get('/', (req, res) => {
try{
const cars = db('cars')
res.json(cars)
}catch(error){
    res.status(500).json({message: "You messed up my server"})
}
})

//create


module.exports = router;