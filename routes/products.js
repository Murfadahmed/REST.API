const express = require('express')
// import express from "express";


const {getAllProduct , getAllTesting} = require('../controller/products')
// import {getAllProduct , getAllTesting } from "../controller/products.js";

const router = express.Router();

router.route("/").get(getAllProduct);

router.route('/testing').get(getAllTesting)

module.exports = router;

// export default {router}

