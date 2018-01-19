import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from './components/Container';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Portfolio from './components/Portfolio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/testimonial" component={Testimonial} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
