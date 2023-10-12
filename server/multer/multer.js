const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        // cb(null,'./upload/')
        cb(null,'../client/public/uploads/profile/')
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage:storage
});

module.exports=upload