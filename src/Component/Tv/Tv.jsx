import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Tv() {
  let [tv,setTv]=useState([])

 async function TvTrend() {
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setTv(data.results)
  }
  useEffect(()=>{
    TvTrend()
  },[])
  return<>
   <div className="container">
    <h1 className='text-center auth text-white mt-5 mb-5'>Trend Tv</h1>
    <div className="row">
      {tv.map((item)=><div className="col-md-3">

<Link to={`/detailestv/${item.id}`}>

                <div className=" position-relative">
<img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 trend rounded rounded-5' alt="" />

{/* Hover */}
<div className="imagelayer">
  <div className="imginfo">
    <h5>{item.name}</h5>
  </div>
</div>

{/* vote */}
{item.vote_average?<div className=' p-2 position-absolute top-0 end-0 auth text-white'>{item.vote_average?.toFixed(1)}</div>:""}


</div>
</Link>
<h3 className='heading text-center '>{item.name}</h3>
      </div>
)}
    </div>
  </div>
  
  </>
}
