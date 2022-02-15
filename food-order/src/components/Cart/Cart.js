import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const url = process.env.REACT_APP_BACKEND_USER_DATA;

const Cart = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);
  const amount = `$${cartCtx.totalAmount.toFixed(2)}`;
  let hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        // return <li>{item.name}</li>
        return (
          <CartItem
            key={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  const [checkout, setCheckout] = useState(false);
  const checkoutHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitted(true);
    cartCtx.clearCart();
  };
  return (
    <React.Fragment>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount:</span>
          <span>{amount}</span>
        </div>
        {checkout && <Checkout onConfirm={submitOrderHandler} />}

        {!checkout && (
          <div className={classes.actions}>
            <button className={classes["button-als"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={checkoutHandler}>
                Order
              </button>
            )}
          </div>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
