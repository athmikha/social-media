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
/*function handleDisconnect() {
    // Recreate the connection, since
    // the old one cannot be reused.
    connection = mysql.createConnection(dbConfig);

    connection.connect(function(err) {
        // The server is either down
        // or restarting
        if(err) {
            // We introduce a delay before attempting to reconnect,
            // to avoid a hot loop, and to allow our node script to
            // process asynchronous requests in the meantime.
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        }else{
            throw err;
        }
    });
}*/
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12Athmikha@",
    database: "budget"
})

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

app.get("/viewproducts",(req,res)=>{
    console.log("connected")
    const sql="select * from bid1000"
    
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)

    })
})

//const  PORT = 3002;

app.use(express.json())
/*app.get("/data", function(req, res){
    res.json({message: "<h1>server running</h1>"})
})*/

app.post("/add", function(req,res) {
    
    
  var sql = "insert into bid1000 (productname,stock,cost,mrp) values (?);"
    var values = [
    req.body.productName,
    req.body.Qty,
    req.body.Mrp,
    req.body.cost
    ];


    db.query(sql,[values])//,function(err,data,field) {
        //if(err) return res.json(err)
        //res.json("helooo")
    //})
    res.json({message:'inserted'});
     
})

app.post("/hello", function(req,res) {
   var shopid=("select serviceId,serviceName from services where serviceCategory ='"+req.body.Category+"'" );
   /*var shopname=("select serviceName from services where serviceCategory ='"+req.body.Category+"'" );*/
   console.log(shopid)
   var data=0
   var data1=''
   var id=1000
   var name='athmikha'
   var status='NYR'
   var cusno='7604903279'
  
   db.query(shopid,function(err,result, feilds)
   {
   for (let i=0;i<result.length;i++)
   {
   data = (result[i].serviceId)
    data1 = (result[i].serviceName)
    console.log(data);
    console.log(data1);

    console.log(result)
    console.log("result")
    var sql = "insert into serviceRequests (customerId,customerName,custnum,serviceId,serviceName,serviceCategory,request,responseStatus,tillDate) values ("+id+",'"+name+"',"+cusno+","+data+",'"+data1+"','"+req.body.Category+"','"+req.body.reqdetail+"','"+status+"','"+req.body.date+"');"
    /* var values = [
     data,
     req.body.category,
     req.body.reqdetail,
     req.body.date
     ];*/
  console.log(sql)
     db.query(sql)//,function(err,data,field) {
         //if(err) return res.json(err)
         //res.json("helooo")
     //})
    }

   })
   console.log(data)
   console.log('aa')
      res.json({message:'inserted'});
       
  })
  var businessId=1000
  
  var username='nil'
  var mail='nil'
  var OwnerName='nil'
  var businessName='atmikha'
  var billDate='1919-12-07'
app.post("/newbill",function(req,res){
    console.log("entered into server")
    var n='Bill';
    var nums=req.body.CustNo;
    console.log(nums);
    var sql1="INSERT into billdetail (billDate,businessID, businessName, phoneNum) values('"+billDate+"',"+businessId+",'"+businessName+"','"+nums+"');"
    
    console.log(sql1)
    db.query(sql1)
   var sql2="SELECT max(billno) as bn from billdetail";
   console.log(sql2)
   
    
    db.query(sql2,function(err,results,fields){
     var bid=0;   
    if (err)
    {
        console.log(err) ;

    }   
    else
    {   
          bid=results[0].bn;
          
          console.log(bid)
          console.log("bid")
          var num=n+bid.toString();
          res.json(bid);
          console.log(num)
          console.log("num")
          var sql="CREATE table "+num+" (productno int,productname varchar(100),mrp int,qty int);"
          db.query(sql);
          var n='bid'+businessId.toString();
          console.log(n)
         var sql="select productname from "+n+";"
         console.log(sql)
          db.query(sql ,function(err, results, feilds){
              console.log(results);
              
              res.json(results)
          }); console.log("n")
      

        }  
    })
})
app.post("/generatebill",function(req,res){
    var sql="INSERT INTO bill VALUES (?)";
    var values=[req.body.productNo,req.body.productName,req.body.Mrp,req.body.quantity,req.body.cost];
    db.query(sql,[values]) ;
    var sql1= "SELECT * FROM bill where productNo= (?)";
    var value=[req.body.productNo];
    db.query(sql1, [value], function(err, results, feilds){
        console.log(results);
        res.json(results);
    })
        /*var name=req.body.productName*/
        
}
) 
app.post("/gproducts",function(req,res){
    /*var name=req.body.productName*/
    var n='bid'+businessId.toString();
    console.log(n)
   var sql="select disctinct productname from "+n+";"
    db.query(sql ,function(err, results, feilds){
        console.log(results);
        
        res.json(results)
    }); console.log("n")

    
})

app.post("/bill", function(req,res) {
    var sql = "insert into bid"+businessId+" (productname,stock,cost,mrp) values (?);"
    console.log(sql)
      var values = [
      req.body.productName,
      req.body.Qty,
      req.body.Mrp,
      req.body.cost
      ];
      db.query(sql,[values] , function(err, results, feilds){
        console.log(results)
      })//,function(err,data,field) {
          //if(err) return res.json(err)
          //res.json("helooo")
      //})
      res.json({message:'inserted'});     
  })
  app.get("/getProducts", function(req, res){
    console.log('hlooo')
    var sql="SELECT * FROM bid"+businessId;
    db.query(sql, function(err,results2, feilds)
    {
        console.log(results2)
        res.json(results2)
    })

  })

app.get("/updateproduct",function(req,res){
    console.log('update')
    
    var sql="update bid"+businessId+" set stock="+req.body.Qty+" WHERE productname='"+productName+"' ;"
    db.query(sql,function(err, results, feilds){
        {
            console.log(results)
            res.json({message:'inserted'});
        }
    })
    
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

   