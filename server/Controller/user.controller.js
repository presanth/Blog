const userModel = require('../Model/user.model');
const mongoose = require('mongoose')
const express = require('express')
const app = express()


exports.signup = async (req, res) => {
    try{
        const {id,username,useremail,userpassword} = req.body;
        await userModel.create({
            id,
            username,
            useremail,
            userpassword,
            userimage:req.file.filename,
        });
        res.status(201).send('registration successfuly');
    }catch(error){
        res.status(500).send(error);
    }
};

exports.checkUser = (req,res)=>{
    try{
        const mail = req.body.email;
        const password = req.body.pass
        userModel.findOne({useremail:mail}).then((data) => {
            console.log("data",data);
            if(data){      
                if(data.userpassword==password){
                    // res.send("login success")
                    res.send({
                        "data":data,
                        "message":"login success"
                    })
                }else{
                    res.send({
                        "data":"",
                        "message":"invalid username and password"
                    });
                }

            }else{
                res.send({
                    "data":"",
                    "message":"invalid username or password"
                })
            }
        })
    }catch(error){
        res.status(400).send(error);
    }
};

exports.findpersonalData = async (req,res) =>{
    try{
        await userModel.find({id : req.params.id}).then((data)=>{
            res.send(data);
        });
    }catch(error){
        res.status(404).send(error)
    }
}