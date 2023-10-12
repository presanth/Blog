const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Blogs");


const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true ,
    },
    username:{
        type: String,
        required: true ,
    },
    useremail:{
        type: String,
        required: true ,
    },
    userpassword:{
        type: String,
        required: true ,
    },
    userimage:{
        type: String,
        required:true,
    },
});

module.exports = new mongoose.model("user", userSchema);
