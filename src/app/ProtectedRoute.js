import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuthContext } from '../context/contextAuth'

const ProtectedRoute = ({children}) => {

    const isAuth = UseAuthContext().isAuth;
  

  return (

   isAuth ? children : <Navigate to={"/login"} replace/>

  )
}

export default ProtectedRoute