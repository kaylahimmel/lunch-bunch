import React from 'react';

function CardAddress (props) {
  return (
    <h4 style={{display: !props.address && "none"}} className="card-address">{props.address}</h4>
  )
};

export default CardAddress;