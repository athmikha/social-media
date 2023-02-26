import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewProducts()
{

  useEffect(() => {
    fetch('http://localhost:8000/viewproducts', {
        
    }).then(response=>response.json())
    .then(data => {
        console.log(data)
    });
  }, []);

  

 


  return (
    <div>

      <h1>Lama Book Shop</h1>
     

    
    </div>
  );
};
export default ViewProducts;