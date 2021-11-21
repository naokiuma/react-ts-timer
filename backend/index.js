const express = require('express');
const app = express();
const port = process.env.PORT || 3001
const mysql = require('mysql');
//localhost:3000でアクセス

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'root',
    database: 'ex_timer',
    port: 8889
})
let _result;
connection.connect;
connection.query('select * from user',
    (err,result) => {
        if(err) {
            throw err;
        }
        console.log("success");
        _result = result;
    }
)
connection.end();

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
    
    // res.json({message:"hello world"});
    res.json({message:_result});

})

app.listen(port,()=>{
    console.log(`listenning on* : ${port}`);
})