import React,{useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState ={
    items:[],
    totalAmount:0
}

const cartReducer =(state,action)=>{
    if(action.type==='ADD'){
        let updatedItemsArray = state.items.concat(action.item)
        let updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItemsArray,
            totalAmount:updatedtotalAmount
        }
    }
    return defaultCartState
}

const CartProvider =(props)=> {
    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState);

    const addItemHandler = item =>{
        dispatchCart({
            type:'ADD',
            item:item
        })
    }
    const removeItemHandler = id =>{
        dispatchCart({
            type:'REMOVE',
            id:id
        })
    }
    const cartContextObj ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
  return <CartContext.Provider value={cartContextObj}>
      {props.children}
  </CartContext.Provider>
}

export default CartProvider;
