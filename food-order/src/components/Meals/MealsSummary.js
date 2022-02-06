import React from 'react';
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return <section className={classes.summary}>
      <h2>Order your delicious food now</h2>
      <p>
          Choose your favourite food from our wide range of cusines
      </p>
      <p>
          All our meals are home cooked with high quality ingredients
      </p>
  </section>
}

export default MealsSummary