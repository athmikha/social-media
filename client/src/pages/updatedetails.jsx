import React from "react";
import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';

//import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Updatedetails(){


   
    function handleClick(){
        //const billNum = document.getElementByName('generatehead3')[0].value
        const user1=document.getElementById('title').value
        console.log(user1)
        const pass1=document.getElementById('Detail').value
        const pass2=document.getElementById('date1').value
        

        const val={title:user1, Detail:pass1, date1:pass2};
        console.log(val)
                    console.log(user1)
                    
                      fetch('http://localhost:8000/update', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(val),
                                    
                                  
                                })
                                  
                                
       }
    return(
        <div className="maingenerate text-center">
        <div className="generatehead">
            <h1>User Details </h1>
        </div>
       
        <div className="generatebody3">
           
            <input type="text" className="generatehead3" id="title" placeholder="title"  name="title"></input>
            
        </div>
        <div className="generatebody3">
        <input type="longtext" className="generatehead3"  id="Detail" placeholder="Detail"  name="Detail"></input>
           
        </div>
        <div className="generatebody3">
        <input type="date" className="generatehead3" id="date1" placeholder="date1"   name="date1" ></input>
            
        </div>
        <div className="adgeneratehead3 ">
        <button type="button" className="btn btn-primary add "  onClick={handleClick} >CHANGE</button>
            
            </div>
       
        
        <div className="adbillList" id="billList">
           
        </div>
        
       </div>
    )
    
}

export default Updatedetails;