import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Coffe() {
  let [coffe,setCoffe]=useState([])

  async function CoffeTrend() {
     let {data}=await axios.get(`https://api.sampleapis.com/coffee/hot`)
   console.log(data);
   setCoffe(data)
   }
   useEffect(()=>{
     CoffeTrend()
   },[])
  return <>
  <div className="container">
    <h1 className='text-center auth text-white mt-5 mb-5'>Type Coffe</h1>
    <div className="row">
      {coffe.map((item)=><div className="col-md-3">
<img src={item.image} className='w-100 trend rounded rounded-5' height={300} alt="" />
<h3 className='heading text-center '>{item.title}</h3>
      </div>
)}
    </div>
  </div>
  
  </>
}
