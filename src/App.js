import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Wrapper from './components/Container';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
