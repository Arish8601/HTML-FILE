const shortid = require("shortid");
const url = require("../models/url");

async function genrateNewshortURL(req, res){
    const body = req.body;
    if(!body.URL){
        return res.status(400).json({error: "plz provide url"});
    }
    const shortid = shortid(8);
    await URL.create({
        shortid: shortid
        redirectURL: a, 
        visitHistory:[]
    });
    return res.json({id: shortId})
}
module.exports = {genrateNewshortURL}