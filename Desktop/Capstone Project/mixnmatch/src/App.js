import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    );
};

export default App;
