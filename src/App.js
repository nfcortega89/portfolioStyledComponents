import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Wrapper from './components/Container';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Wrapper>
        {/* <Header /> */}
        <Home />
      </Wrapper>
    );
  }
}

export default App;
