import express from "express"
import cors from "cors"
import  bcrypt from "bcrypt"
import bodyParser from "body-parser"
const saltRounds = 10;



//const db = require('./config/db')
//const bcrypt = require("bcrypt")
//onst bodyParser=require("body-parser");
const app=express()
app.use(cors());

import mysql from "mysql"

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12Athmikha@",
    database: "budget"
})

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})



////////////////////////////////////////////////////////////////////////
var id=0;
app.post("/userinput", function(req, res){
    console.log('hlooo')
    var sql = "insert into user"+id+" (title,detail,date1) values (?)";
    console.log(sql);
    var values =[req.body.title,req.body.Detail,req.body.date1]
    console.log(values);
    db.query(sql, [values]);
  })

  app.get("/viewdetails", function(req, res){
    console.log('view')
   var sql="SELECT * FROM user"+id+";";
    console.log(sql)
    db.query(sql, function(err,results2, feilds)
    {   
        console.log(results2)
        res.json(results2)
    })
  })


  app.get("/sorta", function(req, res){
    console.log('sorta')
   var sql="SELECT * FROM user"+id+" order by date1;";
    console.log(sql)
    db.query(sql, function(err,results2, feilds)
    {   
        console.log(results2)
        res.json(results2)
    })
    
  })
  app.get("/sortd", function(req, res){
    console.log('sortd')
   var sql="SELECT * FROM user"+id+" order by date1 desc ;";
    console.log(sql)
    db.query(sql, function(err,results2, feilds)
    {   
        console.log(results2)
        res.json(results2)
    })
  })


  
  app.post("/signup", function(req, res){

    var sql="insert into userDetail (userName,contact,email,instaid,password) values (?)";
    console.log('signup')
    console.log(sql)
    var values =[req.body.userName,req.body.Contact,req.body.email,req.body.instaid,req.body.password]
    console.log(values);
    db.query(sql, [values]);
    console.log('inserted')
    var sql1= "SELECT userId FROM userDetail where username = (?)";
    console.log(sql1)
    var values1=[req.body.userName];
    console.log(values1)
    db.query(sql1, [values1], function(err, results, feilds){
        var bid = results[0].userId;
        console.log(bid)
       id=bid;
        console.log(id)
        
        console.log('id')

        var bidString = 'user'+bid.toString();
        console.log(bidString)
       
        var sql2 = "CREATE TABLE "+ bidString +" (postnumber int primary key auto_increment, title varchar(60),detail varchar(500),date1 date)";
        db.query(sql2, function (err, result) {
            if(err){
                console.log(err)
                res.send("error")
            }
            else{
                console.log("Table created"); 
                res.send("successful")
            }
           
        }) 
      }
    )
    })  ;

app.get("/getDet", function(req, res){
    console.log('getdet')
    console.log(logged)
    res.json({message: logged})
});

app.get("/deletedetails", (req, res) => {
    const q = "SELECT * FROM user"+id+" ;";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(data);
      return res.json(data);
      
    });
  });
    
app.post("/delete", (req, res) => {
    console.log('delete')
    
    const postid = req.body.postnumber;
    var q = " DELETE FROM user"+id+" WHERE postnumber = "+postid+" ";
   
    console.log(q)

    db.query(q, [postid], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
      
    });
    
  });
  app.get("/updatedetail", (req, res) => {
    const q = "SELECT * FROM user"+id+" ;";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log(data);
      return res.json(data);
      
    });
  });
  
  app.post("/update", (req, res) => {
    const postid = req.body.postnumber;
    console.log(postid)
    const q = "UPDATE user"+id+" SET `title`= ?, `detail`= ?, `date1`= ?  WHERE postid = "+postid+"";
    console.log(q)
  
    const values = [
      req.body.title,
      req.body.detail,
      req.body.date1,
     
    ];
  
    db.query(q, [...values,postid], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
      console.log(data)
    });
  });
  app.listen(8000, ()=>{
    console.log("connected to backend")
})

   
