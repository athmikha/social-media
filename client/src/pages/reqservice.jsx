import React from "react";
import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

//import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Reqservice()
{
    function handleClick(){
    
        
        const pass1=document.getElementById('Category').value
        const pass2=document.getElementById('reqdetail').value
        const pass3=document.getElementById('date').value
        
        
        console.log(pass3)
        

        const val={Category:pass1, reqdetail:pass2 ,date:pass3};
        console.log(val)
          fetch('http://localhost:8000/hello', {
                        method: 'POST',
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(val),
                    }).then(response=>response.json())
                    .then(data => {
                        console.log(data)
                      
                    });
                }
return(
      
    <div className="maingenerate">
     <div className="generatehead">
         <h1>Requist service</h1>
     </div>
    
     <div className="generatebody2">
        
         <input type="text" className="generatehead3" id="Category" placeholder="Category"  name="Category"></input>
         
     </div>
     <div className="generatebody3">
     <input type="big text" className="generatehead3"  id="reqdetail" placeholder="reqdetail"  name="reqdetail"></input>
     <input type="date" className="generatehead3"  id="date" placeholder="date"  name="till date"></input>

     </div>
     <div className="generatebody4">
     
         <button type="button" className="btn btn-primary add "  onClick={handleClick} >Requist</button>
     </div>
    

 
 </div>
    
    
 )
}

export default Reqservice;