import React, { Component } from 'react';

function CardTitle (props) {
  return (
    <div className="card-restaurant">
      <h1 class="card-title">
        {props.title}
      </h1>
    </div>
  );
};

export default CardTitle;