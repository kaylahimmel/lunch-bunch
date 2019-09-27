import React, { Component } from 'react';
// import CardHeader from '../Components/CardHeader';
import CardAddress from '../Components/CardAddress';
// import CardHours from '../Components/CardHours';
// import CardCategories from '../Components/CardCategories';


class Card extends React.Component {
  constructor(props) {
    super.props;
  }
  render() {
    return (
      <div className="card">
        {/* <CardHeader {props.restaurantName} /> */}
        <CardAddress />
        <h4>
          Distance from Office
        </h4>
        {/* <CardHours {props.restaurantHours} />
        <CardCategories {props.restaurantCategories} /> */}
      </div>
    );
  };
}

export default Card;