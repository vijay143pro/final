import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useState,useEffect } from 'react'

function Home() {
  const navigate=useNavigate()
  
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])
  return (
    <div>
    <h1>hello</h1>
    </div>
  )
}

export default Home