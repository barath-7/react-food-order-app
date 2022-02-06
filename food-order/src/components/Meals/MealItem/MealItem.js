import React,{useContext} from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props)=> {
    const price = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContext)
    const addToCartHandler =(amount)=>{
      cartCtx.addItem({
        id:props.id,
        amount:amount,
        price:props.price,
        name:props.name
      })
    }
  return <li className={classes.meal}>
      <div>
          <h3 >{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
            {/* added props.id */}
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>

  </li>;
}

export default MealItem;
