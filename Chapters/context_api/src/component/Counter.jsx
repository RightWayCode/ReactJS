import React, { useContext } from 'react'
import { ConterContext } from '../context/counter'

const Counter = () => {
  const counterContext = useContext(ConterContext)
  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Inrement</button>
      <button onClick={() => counterContext.setCount(counterContext.count==0?0:counterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
