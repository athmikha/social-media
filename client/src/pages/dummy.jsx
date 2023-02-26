import React from "react";
/*import products from "./products";*/
import { useMemo, useState } from "react";
import {Link, Outlet} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Select from 'react-select'

var businessId=0
var logged='false'
var username='nil'
var mail='nil'
var OwnerName='nil'
var businessName='nil'
function Mutualfund()
{
  const [val,setValue] = useState("")
    
    function changeHandler(e) {
          setValue(e)
    }
  /*function answer(data)
  {
    return(
      <tr key={data.productNo}>
          <td>{data.productNo}</td>
          <td>{data.productName}</td>
          <td>{data.Mrp}</td>
          <td>{data.Qty}</td>
          <td>{data.cost}</td>
      </tr>
  )
  }*/
  function input1(){
    
    const root =ReactDOM.createRoot(document.getElementById('generatebody'));
    console.log("Entered1");
    const custnum=document.getElementById('CustNo').value
    console.log(custnum);
    const value={CustNo:custnum};
    console.log("value")
    console.log(value);
   
    
    fetch('http://localhost:8000/newbill',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),

    }).then(response=>response.json())
    .then(data => {
        console.log(data);
        console.log("data")
       
        root.render(
          <div className="maindiv">
          <h4 className="generatehead1">BillNo:{data}</h4>
          {/*<button type="button" class="btn btn-primary otp" data-toggle="modal" data-target="#exampleModalCenter">Generate OTP</button>*/}
          <div className="generatebody2">
              <input type="number" className="generatehead3" id="productNo" placeholder="ProductNo"></input>
              {/* <input type="text" className="generatehead3" id="productName" onChange={input} placeholder="ProductName"></input>*/}
              < div class="mb-3">
                 <Select options={data} value={val} onChange={changeHandler}/>
              </div>
              <input type="number" className="generatehead3"  id="Mrp" placeholder="Mrp"></input>
              <input type="number" className="generatehead3" id="Qty" placeholder="Qty"></input>
              <button type="button" className="btn btn-primary add" onClick={input}>ADD</button>
          </div>
          </div>
        );
        
    })
  }

  function input()
  {
    const root = ReactDOM.createRoot(document.getElementById('tableprint'));
    console.log("Entered");
    
    const proname=document.getElementById('productName').value;
  
    
    console.log(proname)

    const value={ productName:proname};
    fetch('http://localhost:8000/gproducts',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),

    }).then(response=>response.json())
    .then(data => {
        console.log(data);


        /*root.render(
          <table className="table">
            <thead>
                <tr>
                    <th>Product NO</th>
                    <th>Product Name</th>
                    <th>Mrp</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map(createCard)
            }
            </tbody>
        </table>
        );*/
        
    })
  }
   function Card(props)
    {
        return(
                <tr>
                    <td>{props.productNo}</td>
                    <td>{props.productName}</td>
                    <td>{props.Mrp}</td>
                    <td>{props.Qty}</td>
                </tr>
        )
    }
    
    function createCard(data)
    {
        return <Card 
                    key={data.productNo}
                    productNo={data.productNo}
                    productName={data.productName}
                    Mrp={data.Mrp}
                    Qty={data.Qty}
                />  
    }

    
    return(
       <div className="maingenerate">
        <div className="generatehead">
            <h1>Generate bill</h1>
            <input type="number" className="generatehead2" id="CustNo" placeholder="Customer No" ></input>
            <button type="button" className="btn btn-primary add" onClick={input1}>Newbill</button>
        </div>
        <div className="generatebody" id="generatebody">
        </div>
       
        <div className="tableprint" id="tableprint">

        </div>
        <div className="totalamt">
            <h4>Totalamount:</h4>
        </div>
     
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
    
       </div>
       
       
    )
    
    
   
}


export default Mutualfund;