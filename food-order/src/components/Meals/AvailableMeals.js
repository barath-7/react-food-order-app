import React, { useEffect } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
//require('dotenv').config()

const url = process.env.REACT_APP_BACKEND
const getData = async () =>{
  let res = await fetch(url)
  let data = await res.json()
  console.log(data)
}

getData()

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals =() => {
  //useEffect(()=>{getData()},[])
  return <section className={classes.meals}>
      <Card>
      <ul>
      {DUMMY_MEALS.map((meal)=>{
        return <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id}/> //added meal.id
        })}    
      </ul>
      </Card>
  </section>;
}


export default AvailableMeals