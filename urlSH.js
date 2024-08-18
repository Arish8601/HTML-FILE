const mongoose = require("express");
const url = new mongoose.Schema({
    ShortId :{
        type: String,
        require: true,
        unique: true,
    },
    redirectURL:{
        type: String,
        require: true,
    },
    visitHistory:[
        {
            timestamp:{
                type: Number,
            },
        },
    ],
},
{timestamps: true}
);
const url = mongoose.model("url", urlSchema);
module.exports = URL;           