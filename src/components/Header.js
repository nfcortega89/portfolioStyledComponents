import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import logo from "../assets/NFCO_02.png";

const NavWrapper = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  background: transparent;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 62px;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;
const LinkBar = styled.nav`
  width: 506px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled.a`
  letter-spacing: 1px;
  padding: 10px 1em;
  color: black;

  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <NavWrapper>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <LinkBar>
          <StyledLink>Home</StyledLink>
          <StyledLink>About</StyledLink>
          <StyledLink>Portfolio</StyledLink>
          <StyledLink>Testimonial</StyledLink>
          <StyledLink>Contact</StyledLink>
        </LinkBar>
      </NavWrapper>
    );
  }
}
