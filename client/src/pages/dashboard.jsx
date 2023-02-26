import React from "react";

import ReactDOM from 'react-dom/client';
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState } from "react";
function Dashboard(){
    const [fname, setData]= useState(null);
    const [id, setId]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:8000/getDet")
        .then((resp)=>resp.json())
        .then((data)=>{
            setData(data.username);
            setId(data.userId)
        });
    }, []);
  /*  function logout(){
        fetch("http://localhost:8000/businesslogout")
        .then((resp)=>resp.json())
        .then((data)=>{
            location.replace('/')
        })*/
    
    return(
        <div className="dash">
            <div className="sidebar">
                <div className="sideBrand">
                   
                    
                </div>
                <div className="dashbuttons">
                    <p>Panel</p>
                    <Link to="/dashboard/userinput"><button><img src=".\images\insert.png" alt="Bootstrap"/>INPUTDETAILS</button></Link>
                    <Link to="/dashboard/update"><button><img src=".\images\updated.png" alt="Bootstrap" />UPDATE</button></Link>
                    <Link to="/dashboard/delete"><button><img src=".\images\trash.png" alt="Bootstrap" />DELETE</button></Link>
                    <Link to="/dashboard/sort"><button><img src=".\images\sort.png" alt="Bootstrap" />SORT</button></Link>
                    <Link to="/dashboard/addProducts"><button><img src=".\images\loupe.png" alt="Bootstrap" />SEARCH</button></Link>
                    {/*<Link to="/dashboard/viewProducts"><button><img src=".\images\investment.png" alt="Bootstrap" />View Products</button></Link>*/}
                    
                    {/*<Link to="/dashboard/Bookings"><button><img src=".\images\task.png" alt="Bootstrap" />Bookings</button></Link>
                    <Link to="/dashboard/Recharge"><button><img src=".\images\recharge.png" alt="Bootstrap" />Recharge</button></Link>
                    <Link to="/dashboard/Entertainment"><button><img src=".\images\video.png" alt="Bootstrap" />Entertainment</button></Link>
                    */}
                </div>
                <div className="sideBottom">
                    <hr className="style14"></hr>
                    
                </div>
                

            </div>
            <div className="main-bar">
            <div className="about">
                <div className="name">
                <p>Welcome Back!</p>
                <h2>athmikha</h2>
                </div>
               
                
            </div>
                <div className="dashcontent">
                    <div id="dashmain">
                        <Outlet />
                        
                    </div>
                </div>
            </div>
        </div>
    )};

export default Dashboard;