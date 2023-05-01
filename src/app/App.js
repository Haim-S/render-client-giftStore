import React, {useEffect} from "react";
import {deleteLocalStorageValue} from "../utils/localStorage.utils";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// import ProviderContainer from "../context/contextController";


// pages

import {mainRoutes} from "../pages/import";

// layout

import Layout from "../components/layout/Layout";





function App() {


  useEffect(()=> {
    
    return () => {
      deleteLocalStorageValue("token");
      deleteLocalStorageValue("id_client");
    }
  },[])
  


  return (
    <div className="App">

     <BrowserRouter>
     <Routes>
     
      <Route path="/" element={<Layout/>}>

      {mainRoutes.map((routing, index)=> {
        return(
          <Route 
          path={routing.path}
          element={
            routing.isProtected ? (
              <ProtectedRoute>
                <routing.component/>
              </ProtectedRoute>
            ) : (
              <routing.component/>
            )
          }
          key={index}
          />
        )
      })}
        
      </Route>
      
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
