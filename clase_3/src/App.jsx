import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled,setEnabled] = useState(false);
  const [position,setPosition] = useState({x:0,y:0})

  useEffect(()=>{
    const handleMove = (event) =>{
     const {clientX,clientY} = event
     setPosition({x:clientX,y:clientY})
     console.log({clientX,clientY})
  }
 
    if(enabled){
     window.addEventListener("pointermove",handleMove)
    }
 
    return () =>{
     console.log("cleanup")
     window.removeEventListener("pointermove",handleMove)
    }
   },[enabled])

  return(
    <main>
    <div style={{
       position: 'absolute',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
       border: '1px solid #fff',
       borderRadius: '50%',
       opacity: 0.8,
       pointerEvents: 'none',
       left: -25,
       top: -25,
       width: 50,
       height: 50,
       transform: `translate(${position.x}px, ${position.y}px)`
     }}
     />
    <h1>Mouse Pointer</h1>
    <button onClick={()=>(setEnabled(!enabled))}>{enabled? "Activated":"Deactivate"}</button>
    </main>
  )
}

function App() {

  const [mounted,setMounted] = useState(true)


  return (
    <>
    { mounted && <FollowMouse/>} 
    <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button>
    </>
  )
}

export default App
