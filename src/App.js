import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [allFood, setAllFood] = useState(foods);
  return (
    <div className="App">
      {allFood.map((food) => {
        return (
          <div>
            <img src={food.image} style={{ width: '100px', height: '100px' }} />
            <p> {food.name} </p>

            <FoodBox
              food={{
                name: 'Orange',
                calories: 85,
                image: 'https://i.imgur.com/abKGOcv.jpg',
                servings: 1,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
