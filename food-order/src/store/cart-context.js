import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0, //changed 0 to 1,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext