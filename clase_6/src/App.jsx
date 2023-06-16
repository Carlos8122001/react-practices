import { useState,useEffect} from 'react'

const dogAPI = "https://dog.ceo/api/breeds/image/random"

function App() {

  const [data,setData] = useState(null);
  const [isLoading,setIsloading] = useState(true)

    useEffect(()=>{
    if(isLoading){
      fetch(dogAPI)
      .then(response => response.json())
      .then(dog => setData(dog.message));
      setTimeout(()=>{
        setIsloading(false);
      },2000)
    }
    },[isLoading])
  
  
  return (
    <>
      <h1>Fetch practices</h1>
      {
        isLoading? <h1>Cargando...</h1> : <img src={data} alt={`image from api dog ${data}`}  />
      }
      <button onClick={()=> setIsloading(true)}>Call API</button>
    </> 
  )
}

export default App
