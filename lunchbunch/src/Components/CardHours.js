import React, { Component } from 'react';

const CardHours = (props) => {
  return (
    <div className="card-restaurantHours">
      <h5>
        {props.restaurantHours}
      </h5>
    </div>
  );
};

export default CardHours;