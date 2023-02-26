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

function Add()
{
 const [add,addproduct] = useState({
  ProductName: "",
  Mrp: "",
  Qty: "",
  cost: "",
 });

 //const navigate = useNavigate()
function handleClick(){
  //const billNum = document.getElementByName('generatehead3')[0].value
              const user1=document.getElementById('productName').value
              console.log(user1)
              const pass1=document.getElementById('Mrp').value
              const pass2=document.getElementById('Qty').value
              const pass3=document.getElementById('cost').value

              const val={productName:user1, Qty:pass2, Mrp:pass1,cost:pass3};
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
  
 
    /*const handleChange = (e) =>{
      addproduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    console.log(add)*/
    return(
      
       <div className="maingenerate">
        <div className="generatehead">
            <h1>Add product</h1>
        </div>
       
        <div className="generatebody2">
           
            <input type="text" className="generatehead3" id="productName" placeholder="ProductName"  name="ProductName"></input>
            
        </div>
        <div className="generatebody3">
        <input type="number" className="generatehead3"  id="Mrp" placeholder="Mrp"  name="Mrp"></input>
            <input type="number" className="generatehead3" id="Qty" placeholder="Qty"  name="Qty"></input>
        </div>
        <div className="generatebody4">
        <input type="number" className="generatehead3" id="cost" placeholder="cost"   name="cost"></input>
            <button type="button" className="btn btn-primary add "  onClick={handleClick} >ADD</button>
        </div>
       
        <div className="totalamt">
            <h4>Totalstock:</h4>
      </div>
      {/*<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    */}
    </div>
       
       
    )
    
   
}


export default Add;