import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {
  const value = useContext(GlobalContext)




  /*
  useState - one of the important reat hooks for managing state
  syntax:
          let [stateVariable, function] =useState(initial data)
          -stateVariable- name of the state variable
          -function - function to update state variable
          -useState -to create a useState variable
          -initial data - starting data
          0-9: numbers
          ' ': strings
          [ ]: array
          { }: object

          useEffect(function, dependency)
          function -> side effects to be seen
          dependency -> array of states which trigger the function
          [] -> only at the page load
          [var1,var2] -> triggers when var1 and var2 changes/update
          null -> triggers everytime when any variable changes/update

          



  */
  let [counter, setCounter] = useState(5)
  let [Data, setData] = useState(5)
  const increase = () => {
    setCounter(++counter)
    console.log(counter)
  }

  useEffect(() => {
    window.alert("value updated")
  }, [counter]) 



  return (
    <>
      Name:{value.name}
      <br />
      Address:{value.address}
      <div style={{ justifyContent: 'center', fontSize: '32px', height: '100vh', display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }}>

        Counter:{counter}
        <br />
        <button onClick={increase}>Increase Count</button>

        <button onClick={() => {
          setCounter(--counter)
        }}>Decrease Count</button>

        <button onClick={() => setCounter(0)}>Reset Count</button>

        <br /><br />

        Data: {Data}
        <br />
        <button onClick={() => {
          setData(Data + 10)
        }}>Increase Data</button>

        <button onClick={() => {
          setData(Data - 10)
        }}>Decrease Data</button>
      </div>




    </>
  )
}

export default Counter
