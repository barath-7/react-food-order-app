import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  return <form className={classes.form}>
      <Input label='Amount' input={{
          id:'amount_' + props.id,  //added +props.id
          type:'number',
          min:"1",
          max:'5',
          default:"0",
          step:'1'
      }}/>
      <button>+Add</button>
  </form>;
}

export default MealItemForm;