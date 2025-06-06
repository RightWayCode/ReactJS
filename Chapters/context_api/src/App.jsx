import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import './App.css'
// import Counter from './component/Counter'
// import { ConterContext } from './context/counter'
import Item from './component/item'
import Cart from './component/cart'
import {CartContext} from './context/cart'

function App() {
  const cartState = useContext(CartContext)
  // console.log("Context",cartState);
  
  return (
    <>
      <h1>Context API</h1>
      {/* <h2>Count: {counterState.count}</h2> */}
      <Item price={1000} name="Vishal"/>
      <Item price={5000} name="Macbook Pro"/>
      <Cart/>
    </>
  )
}

export default App
