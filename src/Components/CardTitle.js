import React, { Component } from 'react';

function CardTitle (props) {
  return (
    <div className="card-restaurant">
      <h1 style={{display: !props.title && "none"}} className="card-title">
        {props.title}
      </h1>
    </div>
  );
};

export default CardTitle;