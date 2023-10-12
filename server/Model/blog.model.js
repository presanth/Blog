const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Blogs");


const blogSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true,
    },
    userid: {
        type: String,
        required:true,
    },
    blogtitle: {
        type: String,
        required:true,
    },
    blogsubject: {
        type: String,
        required:true,
    },
    blogcontent: {
        type: String,
        required:true,
    },
    blogimage: {
        type: String,
        required:true,
    },
});

module.exports = new mongoose.model("userBlog",blogSchema);