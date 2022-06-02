import React, { useState, useEffect } from "react";
import classes from "./AvilableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

const AvilableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodapp-692c8-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const respnseData = await response.json();

      const loadMeals = [];
      for (const key in respnseData) {
        loadMeals.push({
          id: key,
          name: respnseData[key].name,
          description: respnseData[key].description,
          price: respnseData[key].price,
        });
      }
      setMeals(loadMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      updatedDescription={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvilableMeals;
