import React, { useState, useEffect } from 'react';
import Routes from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
