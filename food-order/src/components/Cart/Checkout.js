import React, { useRef,useState } from "react";
import classes from "./Checkout.module.css";

const isNotEmpty = value => value.trim() !== ''
const isValidPincode = pin=>pin.trim().length === 6

const Checkout = (props) => {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const pinCodeInputRef = useRef();

  const [formValidity, setFormValidity] = useState({
      name:true,
      address:true,
      pincode:true
  })
  const formSubmitHandler = (event) => {
    event.preventDefault();
    let enteredName = nameInputRef.current.value;
    let enteredAddress = addressInputRef.current.value;
    let enteredPincode = pinCodeInputRef.current.value;

    let validName = isNotEmpty(enteredName)
    let validAddress = isNotEmpty(enteredAddress)
    let validPincode = isValidPincode(enteredPincode)
    setFormValidity({
        name:validName,
        address:validAddress,
        pincode:validPincode
    })

    const formIsValid = validName && validAddress && validPincode

    if(!formIsValid){
        return
    }

props.onConfirm({
    name:enteredName,
    address:enteredAddress,
    pincode:enteredPincode
})
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p className={classes.errortext}>Enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formValidity.address && <p className={classes.errortext}>Enter a valid address</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Pincode</label>
        <input type="text" id="postal" ref={pinCodeInputRef} />
        {!formValidity.pincode && <p className={classes.errortext}>Enter a valid pincode</p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
