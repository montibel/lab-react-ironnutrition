import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFood, setAllFood] = useState(foods);
  const createFood = (newFood) => {
    const updatedFood = [newFood, ...allFood];
    setAllFood(updatedFood);
  };
  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      {allFood.map((food) => {
        return <FoodBox theFood={food} />;
      })}
    </div>
  );
}

export default App;
