const express = require('express')
const app = express();
const cors = require('cors');

const blogRouter = require('./Router/blog.router');

app.use(cors({orgin:'http://localhost:3000'}));
app.use(express.json());

app.listen(8000, ()=>{
    console.log("server running...");
});

app.use("/blog",blogRouter)

