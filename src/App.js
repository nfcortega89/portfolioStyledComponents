import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Header from "./components/Header";
import Wrapper from "./components/Container";
import "./App.css";

const HomeWrapper = styled.section`
  width: 100%;
  height: 715px;
  padding: 4em;
  background: ${props => (props.primary ? "grey" : "white")};
`;

const Title = styled.h1`
  display: flex;
  font-size: 3em;
  align-items: center;
  justify-content: center;
  color: ${props => (props.primary ? "red" : "black")};
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <HomeWrapper primary>
          <Title>Hello World</Title>
        </HomeWrapper>
      </Wrapper>
    );
  }
}

export default App;
