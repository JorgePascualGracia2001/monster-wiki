// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const UserModel = require("./server/models/user");
// const cors = require("cors");

// require('dotenv').config();

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// mongoose.connect("mongodb+srv://admin:Ljap0cGb0WC0diqt@monsterwiki.bz2u3.mongodb.net/test?retryWrites=true&w=majority");

// app.get("/get", (req, res) => {
//     UserModel.find({}, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });
// });

// app.listen(process.env.PORT, () => {
//     console.log("server running");
// });