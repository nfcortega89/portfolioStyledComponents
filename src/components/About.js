import React, { Component } from 'react';
import styled from 'styled-components';
import nikko from '../assets/NO.jpg';

const AboutWrapper = styled.div`
  background: ${props => props.bgColor};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center
  align-items: center;
  text-align: center;
`;
const ImageWrapper = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
`;

export default class AboutPage extends Component {
  render() {
    return (
      <AboutWrapper bgColor="#454851">
        <ImageWrapper src={nikko} />
      </AboutWrapper>
    );
  }
}
