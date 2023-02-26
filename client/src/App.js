import React from "react";
import Add from "./pages/addproducts";
import ViewProducts from "./pages/viewProducts";
import Reqservice from "./pages/reqservice";

import Add1 from "./pages/bill";
import Userinput from "./pages/userinputs";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Delete from "./pages/delete";
import Update from "./pages/update";
import Updatedetails from "./pages/updatedetails";
import Sort from "./pages/sort";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App()
{


    return(
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup/>}/>
          <Route path="/dashboard/userinput" element={<Userinput/>}/>
          <Route path="/dashboard/delete" element={<Delete/>}/>
          <Route path="/dashboard/update" element={<Update/>}/>
          <Route path="/dashboard/sort" element={<Sort/>}/>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          <Route path="/reqserviece" element={<Reqservice/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/updatedetails" element={<Updatedetails/>}/>
          <Route path="/addproducts" element={<Add />}/>
          <Route path="/viewProducts" element={<ViewProducts />}/>
          

        </Routes>
        </BrowserRouter>
      </div>
 
    );
    
   
}


export default App