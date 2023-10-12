const blogModel = require('../Model/blog.model');

exports.newBlog = async (req,res) =>{
    try{
        const {id,userid,blogtitle,blogsubject,blogcontent} = req.body;
        await blogModel.create({
            id,
            userid,
            blogtitle,
            blogsubject,
            blogcontent,
            blogimage:req.file.filename
        });
        res.status(201).send("blog saved successfully")
    }catch(error){
        res.status(500).send(error)
    }
}

exports.findBlog = async (req,res)=>{
    try{
        await blogModel.find().then((data) =>{
            res.send(data);
        });
    }catch(error){
        res.status(404).send(error)
    }
};

exports.findpersonalBlog = async (req,res) =>{
    try{
        await blogModel.find({userid : req.params.id}).then((data)=>{
            res.send(data);
        });
    }catch(error){
        res.status(404).send(error)
    }
}