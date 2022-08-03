import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <>
    <NavigationBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>

  </>
);

export default App;
