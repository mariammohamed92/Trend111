import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailesTv() {
    const [detailes,setDetailes]=useState({})

let {id}=useParams()

 async   function MovieTrend(id) {
        let {data}=await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`)
        console.log(data);
        setDetailes(data)
        
    }

    useEffect(()=>{
        MovieTrend(id)
    },[])

  return <>
    <div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
     <img src={'https://image.tmdb.org/t/p/w500/'+detailes.poster_path} className='w-100 trend rounded rounded-5' alt="" />

        </div>

        <div className="col-md-8">
<h3>Title : <span className='notfound'>{detailes.name}</span></h3>
<ul className='d-flex list-unstyled'>{detailes.genres?.map((x)=><div className='p-3 mx-2 rounded rounded-2 auth text-white'>{x.name}</div>)}</ul>
<p className=' py-2 h5'>vote_Average:  <span className='notfound'>{detailes.vote_average?.toFixed(1)}</span></p>
<p className=' py-2 h5'>vote_count:  <span className='notfound'>{detailes.vote_count}</span></p>
<p className=' py-2 h5'>release_date:  <span className='notfound'>{detailes.first_air_date}</span></p>
<p className=' py-2 h5'>overview:  <span className='notfound'>{detailes.overview}</span></p>
       
        </div>
    </div>
  </div>

  
  </>
}
