import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ theFood }) {
  return (
    <Col>
      <Card
        title={theFood.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={theFood.image} height={60} alt="" />
        <p>Calories: {theFood.calories}</p>
        <p>Servings: {theFood.servings}</p>
        <p>
          <b>Total Calories: {theFood.calories * theFood.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
