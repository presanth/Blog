const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        // cb(null,'./upload/')
        cb(null,'../client/public/uploads/blog/')
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now() + path.extname(file.originalname))
    },
});

const uploadBlog = multer({
    storage:storage
});

module.exports=uploadBlog