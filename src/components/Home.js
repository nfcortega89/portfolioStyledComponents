import React, { Component } from 'react';
import styled from 'styled-components';
import ali from '../assets/ali.JPG';

const Homepage = styled.div`
  min-height: 100vh;
  width: 100%;
`;
const CategoryWrapper = styled.ul`
  width: 100%;
  min-height: 100vh;
  display: flex;
  list-style-type: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  transform: translateY(0%);

  &:hover {
    cursor: pointer;
    flex: 3;
    transition: all 0.3s ease-in-out;
    ${'' /* transform: translateY(-100%); */};
  }
  &:first-child {
    background: #4c3b4d;
  }
  &:nth-child(2) {
    background: #ffdbda;
  }
  &:nth-child(3) {
    background: #ada8b6;
  }
  &:last-child {
    background: #56a3a6;
  }
`;
export default class Home extends Component {
  render() {
    return (
      <Homepage>
        <CategoryWrapper>
          <CategoryItem>About</CategoryItem>
          <CategoryItem>Portfolio</CategoryItem>
          <CategoryItem>Testimonial</CategoryItem>
          <CategoryItem>Contact</CategoryItem>
        </CategoryWrapper>
      </Homepage>
    );
  }
}
