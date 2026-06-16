import React from 'react'
import { useNavigate } from 'react-router-dom'
 
export default function ValidateUser({children}) {
    const n=useNavigate()
    let status=localStorage.getItem("loginstatus")
   return(
    <>
        {
            status ? children : n("/login")
        }
    </>
   )
}