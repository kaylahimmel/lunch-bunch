import React from 'react';
import Card from '../src/Containers/Card';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="page-container__card-view">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
