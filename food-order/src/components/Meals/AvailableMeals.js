import React, { useEffect,useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
//require('dotenv').config()

const url = process.env.REACT_APP_BACKEND




const AvailableMeals =() => {

  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    
    const getMeals = async () =>{
      let res = await fetch(url)
      if(!res.ok){
        throw new Error('Something went wrong !')
      }
      let data = await res.json()
      //console.log(data)
      let loadedMeals =[]

      for(let key in data){
        loadedMeals.push({
          id:key,
          name:data[key].name,
          description:data[key].description,
          price:data[key].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
    
      getMeals().catch(error=>{
        setIsLoading(false)
        setError(error?.message)
      })
    
  },[])

  if(isLoading){
    return <section>
      <h2 className={classes.loading}>Loading....</h2>
    </section>
  }
  
  if(error){
    return <section>
      <h2 className={classes.error}>Failed to fetch data <br />{error}</h2>
    </section>
  }
  return <section className={classes.meals}>
      <Card>
      <ul>
      {meals.map((meal)=>{
        return <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id}/> //added meal.id
        })}    
      </ul>
      </Card>
  </section>;
}


export default AvailableMeals