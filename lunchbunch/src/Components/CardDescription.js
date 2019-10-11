import React from 'react';

function CardDescription (props) {
  return (
    <h6 style={{display: !props.description && "none"}} className="card-description">{props.description}</h6>
  )
};

export default CardDescription;