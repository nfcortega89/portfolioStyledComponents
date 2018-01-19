import React, { Component } from 'react';
import styled from 'styled-components';
import nikko from '../assets/IMG_7615.JPG';

const AboutWrapper = styled.div`
  background: ${props => props.bgColor};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center
  align-items: center;
  text-align: center;
`;

export default class AboutPage extends Component {
  render() {
    return <AboutWrapper bgColor="#454851" />;
  }
}
