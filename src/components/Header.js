import React, { Component } from 'react';
import styled from 'styled-components';

const HamburgerMenu = styled.div`
  z-index: 999;
  height: 50px;
  width: 50px;
  margin: 0;
  padding: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;

  &:hover {
    cursor: pointer;
  }
`;
export default class Home extends Component {
  render() {
    return (
      <HamburgerMenu>
        <svg
          fill="#FFFFFF"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
        </svg>
      </HamburgerMenu>
    );
  }
}
