import React from 'react'
import { useCart } from '../context/cart'
const Cart = () => {
  const carts = useCart();
  let bill = carts.items.reduce((a,b)=>a +b.price,0);
  return (
    <ul className='cart'>
      {carts && carts.items.map(item => {
        return (
          <li key={item.name}>{item.name} - {item.price} </li>
        )
      })}
      <h5>Total Bill: ${bill}</h5>
    </ul>
  )
}

export default Cart
