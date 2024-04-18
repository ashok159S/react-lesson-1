 import React from 'react'
 import { useState } from 'react'

const Content = () => {
  function NameHandele(){
    const names = ['Money','Trust','Heart'];
    const int=Math.floor(Math.random()*3);
    return names[int];
  }
  const[count,setCount]=useState(0);
  function IncreamnetFuction1(){
    setCount(count+1);
  }
  function IncreamnetFuction2(){
    setCount(count+1);
  }
  function DecreamentFunction(){
    setCount(count-1);
  }
  return (
     <main>
     <h1>Lets Earn {NameHandele()}</h1>
     <button onClick={IncreamnetFuction1}>Subscribe</button>
     <button onClick={IncreamnetFuction2}>+</button>
     <span>{count}</span>
     <button onClick={DecreamentFunction}>-</button>
     </main>
  )
}

export default Content