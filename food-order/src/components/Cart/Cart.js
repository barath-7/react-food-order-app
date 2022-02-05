import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props)=> {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                [{id:'1',name:'chicken',amount:1,price:12,}].map((item)=>{
                    return <li>{item.name}</li>
                })
            }
        </ul>
    )
  return <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount:</span>
          <span>45.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-als']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
  </Modal>;
}

export default Cart;
