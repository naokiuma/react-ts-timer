const express = require('express');
const app = express();
const port = process.env.PORT || 3001
//localhost:3000でアクセス

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();

});

app.get('/',(req,res) =>{
    res.send('へローワールド');
})


app.get('/api',(req,res) => {//api専用のurl
    
    res.json({message:"hello world"});
})

app.listen(port,()=>{
    console.log(`listenning on* : ${port}`);
})