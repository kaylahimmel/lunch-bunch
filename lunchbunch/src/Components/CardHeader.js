import React, { Component } from 'react';

const CardHeader = (props) => {
  return (
    <div className="card-restaurant">
      <h1>
        {props.restaurantName}
      </h1>
    </div>
  );
};

export default CardHeader;