import React from 'react';
import restaurantData from '../restaurantData';

function CardHours (props) {
  return (
    <h5  style={{display: !props.hours && "none"}} className="card-hours">
      {props.hours}
    </h5>
  )
};

export default CardHours;