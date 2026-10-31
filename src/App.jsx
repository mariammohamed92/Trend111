import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Movie from './Component/Movie/Movie'
import Tv from './Component/Tv/Tv'
import Coffe from './Component/Coffe/Coffe'
import Register from './Component/Auth/Register/Register'
import Login from './Component/Auth/Login/Login'
import {Toaster} from 'react-hot-toast'
import DetailesMovie from './Component/Detailes/DetailesMovie'
import DetailesTv from './Component/Detailes/DetailesTv'
import {jwtDecode} from 'jwt-decode'



export default function App() {

  let [logindata,setLoginData]=useState(null)


function SaveLoginData() {
  let encodeToken=localStorage.getItem("TOKEN")
  let decodeToken=jwtDecode(encodeToken)
  console.log(decodeToken);
  setLoginData(decodeToken)
  
}

useEffect(()=>{
  if (localStorage.getItem("TOKEN")) {
    SaveLoginData()

  }
},[])

 let x= createBrowserRouter([
    {path:"",element:<Layout logindata={logindata}  setLoginData={setLoginData}/>,children:[
      {path:"home",element:<Home/>},
      {path:"movie",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"coffe",element:<Coffe/>},
        {path:"detailesmovie/:id",element:<DetailesMovie/>},
        {path:"detailestv/:id",element:<DetailesTv/>},
      {path:"register",element:<Register/>},
        {index:true,element:<Login SaveLoginData={SaveLoginData}/>},


    ]}
  ])
  return <>
  <Toaster/>
  <RouterProvider router={x}></RouterProvider>
  </>
}

