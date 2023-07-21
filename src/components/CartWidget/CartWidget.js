import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import '../../App.css'

const CartWidget = () => {
  return (
    <span className='CartWidget'>
      <MdAddShoppingCart />
    </span>
  )
}

export default CartWidget