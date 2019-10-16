import React, { Component } from 'react';
import CardTitle from './CardTitle';
import CardAddress from './CardAddress';
import CardHours from './CardHours';
import CardDescription from './CardDescription';
import restaurantData from '../restaurantData';


function Card () {
  const restaurantComponents = restaurantData.map(restaurant => {
    return (
      <div  key={restaurant.id} className="card">
        <CardTitle title={restaurant.title} />
        <CardAddress address={restaurant.address} />
        <h4>
          Distance from Office
        </h4>
        <CardHours hours={restaurant.hours} />
        <CardDescription description={restaurant.description} />
      </div>
    )
  })

  return (
    <div>
      {restaurantComponents}
    </div>
  
  )
}

export default Card;