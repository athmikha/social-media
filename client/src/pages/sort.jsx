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

function Sort(){


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
      function sortdes(){
        console.log('sortdes')
       const root = ReactDOM.createRoot(document.getElementById('billList'));
                  // Simple GET request using fetch
                  fetch('http://localhost:8000/sortd').then(response=>response.json())
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
                function sortas(){
                    console.log('gp called')
                   const root = ReactDOM.createRoot(document.getElementById('billList'));
                              // Simple GET request using fetch
                              fetch('http://localhost:8000/sorta').then(response=>response.json())
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
                
                                  
                                
       
    return(
        <div className="maingenerate">
        
        <div className="generatebody4">
        
            <button type="button" className="btn btn-primary add "  onClick={sortdes} >sort desc</button>
            
        
            <button type="button" className="btn btn-primary add " onClick={sortas}>sort asec </button>
        
            </div>
       
        
        <div className="adbillList" id="billList">
           
        </div>
       
       </div>
    )
    
}

export default Sort;