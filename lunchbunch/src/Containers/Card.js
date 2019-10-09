import React, { Component } from 'react';
import CardHeader from '../Components/CardTitle';
import CardTitle from '../Components/CardTitle';
import CardAddress from '../Components/CardAddress';
import CardHours from '../Components/CardHours';
import CardCategories from '../Components/CardCategories';


function Card () {
  return (
    <div className="card">
      <CardHeader />
      <CardTitle title="Restaurant name here" />
      <CardAddress address="Address here" />
      <h4>
        Distance from Office
      </h4>
      <CardHours hours="hours here" />
      <CardCategories categories="categories here" />
    </div>
  )
}

export default Card;