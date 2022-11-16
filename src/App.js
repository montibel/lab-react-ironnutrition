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
        return <FoodBox theFood={food} />;
      })}
    </div>
  );
}

export default App;
