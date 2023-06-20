import { useEffect } from 'react';
import { useState } from 'react'

const API_URL = "https://jsonplaceholder.typicode.com/users"

function App() {

  useEffect(()=>{
console.log("despues de renderizar")
  },[])

  return (
    <>
    <h1>Useeffect</h1>
    </>
  )
}

export default App
