import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Compiler from '../Compiler/compiler';

class Approutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Compiler" element={<Compiler />} />
        </Routes>
      </Router>
    );
  }
}

export default Approutes;
