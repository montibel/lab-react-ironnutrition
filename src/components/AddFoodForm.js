import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ createFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const createOnSubmit = (e) => {
    e.preventDefault();

    let newFood = { name, image, calories, servings };

    createFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <form onSubmit={createOnSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Image</label>
        <Input
          value={image}
          type="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <label>Calories</label>
        <Input
          min={1}
          max={900}
          value={calories}
          type="number"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />

        <label>Servings</label>
        <Input
          min={1}
          max={900}
          value={servings}
          type="number"
          onChange={(e) => {
            setServings(e.target.value);
          }}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
