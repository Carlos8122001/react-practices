import { Children, useState } from 'react'
import TwiterFollowCard from './components/TwiterFollowCard'

function App() {

  const users = [{
    userName:"midudev",
    name:"Miguel",
    isFollowing:true
  },

  {
    userName:"Luiser_1",
    name:"Luis Rondon",
    isFollowing:true
  },

  {
    userName:"_nasch_",
    name:"Nicolas Shurman",
    isFollowing:false
  }

]
  return (
    <>
     {
      users.map( user =>{
        const {userName,name,isFollowing} = user
        return(
          <TwiterFollowCard userName={userName} initialFolowwing={isFollowing} key={userName}>
          {name}
          </TwiterFollowCard>
        )
      })
     }
    </>
  )
}

export default App
