import React from 'react'
import { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
  })

  return (
    <div className='App'>
     <div className='title'>
      <h1>Space News</h1>
     </div>
     <div className='newsContainer'></div>
    </div>
  )
}

export default App
