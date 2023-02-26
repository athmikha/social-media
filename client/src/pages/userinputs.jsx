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

function Userinput(){


    function Card(props) {
        return (
            <tr>
                  <td className="postnumber">{props.postnumber}</td>
                 
                  <td className="title">{props.title}</td>
                  <td className="detail">{props.detail}</td>
                  <td className="date1">{props.date1}</td>
                 
            </tr>
        );
      }
      function createCard(data){
              
        return (
            <Card
              key={data.postnumber}
              postnumber={data.postnumber}
              title={data.title}
              detail={data.detail}
              date1={data.date1}
             
              />
          );
      }
      function getProducts(){
        console.log('gp called')
       const root = ReactDOM.createRoot(document.getElementById('billList'));
                  // Simple GET request using fetch
                  fetch('http://localhost:8000/viewdetails').then(response=>response.json())
                  .then(data => {
                      console.log(data);
                      root.render(
                          <div className="billList">
                              
                              <table >
                      <tr>
                      <th className="postnumber">postnumber</th>
                      <th className="title">title </th>
                      <th className="detail">detail</th>
                      <th className="date1">date1</th>
                      
                      
                  </tr>
                  {data.map(createCard)}
                  
                  </table>
                          </div>)
                  });
        
                }
    function handleClick(){
        //const billNum = document.getElementByName('generatehead3')[0].value
        const user1=document.getElementById('title').value
        console.log(user1)
        const pass1=document.getElementById('Detail').value
        const pass2=document.getElementById('date1').value
        

        const val={title:user1, Detail:pass1, date1:pass2};
        console.log(val)
                    console.log(user1)
                    
                      fetch('http://localhost:8000/userinput', {
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
        <button type="button" className="btn btn-primary add "  onClick={handleClick} >ADD</button>
            <button type="button" className="btn btn-primary add " onClick={getProducts}>View </button>
            </div>
       
        
        <div className="adbillList" id="billList">
           
        </div>
        
       </div>
    )
    
}

export default Userinput;