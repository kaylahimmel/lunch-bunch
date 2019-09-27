import React, { Component } from 'react';

const CardCategories = (props) => {
  return (
    <div className="card-restaurantCategories">
      <h6>
        {props.restaurantCategories}
      </h6>
    </div>
  );
};

export default CardCategories;