import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';

function App() {
  const [allFood, setAllFood] = useState(foods);
  return (
    <div className="App">
      {allFood.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} style={{ width: '100px', height: '100px' }} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
