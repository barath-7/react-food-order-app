import React from 'react';
import classes from './Input.module.css'

const Input= React.forwardRef((props,ref)=> {
  return <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* added defaultValue in below line */}
      <input ref={ref} {...props.input} defaultValue={1}/>
  </div>;
})

export default Input;
