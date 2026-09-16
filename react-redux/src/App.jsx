

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from './redux/ActionType'

function App() {

    const data = useSelector((state)=>state)
    // console.log(data)

    const dispatch = useDispatch()

  return (
    <>

        <h1>COUNTER : {data.count} </h1>
        <button onClick={()=>dispatch({type:INCREMENT,payload:1})}>+</button>
        <button onClick={()=>dispatch({type:DECREMENT,payload:1})}>-</button>

    </>
  )
}

export default App
