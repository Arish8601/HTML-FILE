const express = require("express");
const {genrateNewshortURL} = require("../controller/url");

const router = express.Router();

router.post("/", genrateNewshortURL);

module.exports = router
