const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose.connect("mongodb://localhost/OS_Maneger").then(() => {
        console.log("Sucess Conection");
    }).catch((err) => {
        console.log("Err Conection: " + err);
    })
}

module.exports = connectToDatabase;