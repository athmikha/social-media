import React from "react";
import { Link } from "react-router-dom";


function Signup(){
    function handleClick(){
        //const billNum = document.getElementByName('generatehead3')[0].value
        const user1=document.getElementById('userName').value
        console.log(user1)
        const pass1=document.getElementById('Contact').value
        console.log(pass1)
        const pass2=document.getElementById('email').value
        console.log(pass2)
        const pass3=document.getElementById('instaid').value
        console.log(pass3)
        const pass4=document.getElementById('password').value
        
        console.log(pass4)
        const pass5=document.getElementById('confirmpassword').value
        
      
        
        

        const val={userName:user1, Contact:pass1, email:pass2, instaid:pass3, password:pass4, confirmpassword:pass5};
        console.log(val)
                    console.log(user1)
                    
                      fetch('http://localhost:8000/signup', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(val),
                                    
                                  
                                })
                                  
                                
       }
    return (
        <div className="signupmain">
        <div className="sucontainer">
        
        <div className="sucontainer2">
            <h2>User  Registration</h2>
        <form action="http://localhost:8000/signup" method="POST">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12"><input type="text" name="userName" className="fname" id="userName" placeholder="userName"></input></div>
                
                <div className="col-lg-6 col-md-6 col-sm-12">  <input type="text" name="contact" className="phnum" id="Contact" placeholder="Contact"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12">   <input type="email" name="mail" className="mail" id="email" placeholder="email"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12">   <input type="password" name="password" className="pass" id="instaid" placeholder="instaid"></input></div>
                
                <div className="col-lg-6 col-md-6 col-sm-12">   <input type="password" name="password" className="pass" id="password" placeholder="password"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12">  <input type="password" name="cpassword" className="pass" id="confirmpassword" placeholder="confirm password"></input></div>
                  <Link to="/dashboard"><button type="submit" className="btn btn-primary" name="submit" onClick={handleClick}>Register</button>          
                  </Link>
            </div>
        </form>
        
        </div>
        </div>
    </div>
    )
}

export default Signup;