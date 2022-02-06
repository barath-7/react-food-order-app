import React,{useRef,useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef()

const submitHandler =(event)=>{
  event.preventDefault()
  const enteredAmount = amountRef.current.value
  const enteredAmountNumber = +enteredAmount

  if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber >5){
    setAmountIsValid(false)
    return
  }

  props.onAddToCart(enteredAmountNumber)
  //setAmountIsValid(true)

}

  return <form className={classes.form} onSubmit={submitHandler}>
      <Input label='Amount' input={{
          default:'1',
          id:'amount_' + props.id,  //added +props.id
          type:'number',
          min:"1",
          max:'5',
          step:'1',
      }} ref={amountRef}/>
      <button>+Add</button>
      {!amountIsValid && <p>Enter a valid amount</p>}
  </form>;
}

export default MealItemForm;
