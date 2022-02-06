import React,{useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState ={
    items:[],
    totalAmount:0  //changed 0 to 1
}

const cartReducer =(state,action)=>{
    if(action.type==='ADD'){
        // let updatedItemsArray = state.items.concat(action.item)
        const existingCartItemIndex = state.items.findIndex(item=> item.id===action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        //let updatedItem
        let updatedItemsArray

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            updatedItemsArray = [...state.items]
            updatedItemsArray[existingCartItemIndex] = updatedItem
        }else{
            updatedItemsArray = state.items.concat(action.item)
        }

        let updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItemsArray,
            totalAmount:updatedtotalAmount
        }
    }
    if(action.type==='REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item=> item.id===action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedtotalAmount = state.totalAmount - existingCartItem.price
        let updatedItemsArray
        if(existingCartItem.amount===1){
            updatedItemsArray = state.items.filter(item => item.id !== action.id)
        }else {
            let updatedItem ={...existingCartItem, amount:existingCartItem.amount-1}
            updatedItemsArray = [...state.items]
            updatedItemsArray[existingCartItemIndex] = updatedItem
        }
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
