import React,{useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props)=> {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems =cartCtx.items.reduce((current,item)=>{
    return current+ item.amount
  },0)
  const {items} = cartCtx
  const [buttonAnimation, setButtonAnimation] = useState(false);

  const btnClasses =`${classes.button} ${buttonAnimation ? classes.bump : ''}`

   useEffect(() => {
    setButtonAnimation(true)
    if(items.length===0){
      return
    }
    const timer = setTimeout(()=>{
      setButtonAnimation(false)
    },300)
    return ()=>{
      clearTimeout(timer)
    }
   }, [items]);
   

  return <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
      <CartIcon/>
      </span>
      <span>Your Cart</span>
      {/* Toal items in cart */}
      <span className={classes.badge}>{numberOfCartItems}</span> 
  </button>;
}


export default HeaderCartButton