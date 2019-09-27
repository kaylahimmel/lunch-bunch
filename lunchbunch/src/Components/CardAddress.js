import React, { Component } from 'react';

class CardAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantAddress: '123 test st, Cbus, OH 43026'
    }
  }
  render() {
    return (
      <div className="card-restaurantAddress">
        <h4>
          {this.state.restaurantAddress}
        </h4>
      </div>
    );
  };
};

// CardAddress.defaultProps = {
//   restaurantAddress: 'Address is unavailable'
// }

export default CardAddress;