import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Homepage = styled.div`
  min-height: 100vh;
  width: 100%;
  background: grey;
`;
const CategoryWrapper = styled.ul`
  width: 100%;
  min-height: 100vh;
  display: flex;
  list-style-type: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    flex-direction: column;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const slideInFromUp = keyframes`
  0% {
  opacity: 0;
  transform: translateY(-100%);
}
  100% {
    opacity: 1;
  transform: translateX(0);
}
`;
const slideInFromLeft = keyframes`
  0% {
  opacity: 0;
  transform: translateX(-100%);
}
  100% {
    opacity: 1;
  transform: translateX(0);
}
`;
const slideInFromRight = keyframes`
  0% {
  opacity: 0;
  transform: translateX(+100%);
}
  100% {
    opacity: 1;
  transform: translateX(0);
}
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

  &:hover {
    transition: all 0.3s ease-in-out;
    flex: 2;
    & > svg {
      animation: ${rotate360} 2s linear infinite;
    }
  }

  &:first-child {
    background: #454851;
    animation: 0.8s ease-in-out 0.4s 1 ${slideInFromUp};
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
      animation: 0.8s ease-in-out 0.4s 1 ${slideInFromLeft};
    }
  }
  &:nth-child(2) {
    background: #75485e;
    animation: 0.8s ease-in-out 0.3s 1 ${slideInFromUp};
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
      animation: 0.8s ease-in-out 0.3s 1 ${slideInFromRight};
    }
  }
  &:nth-child(3) {
    background: #ff5a5f;
    animation: 0.8s ease-in-out 0.5s 1 ${slideInFromUp};
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
      animation: 0.8s ease-in-out 0.5s 1 ${slideInFromLeft};
    }
  }
  &:last-child {
    background: #56a3a6;
    animation: 0.8s ease-in-out 0.7s 1 ${slideInFromUp};
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
      animation: 0.8s ease-in-out 0.7s 1 ${slideInFromRight};
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem 2rem 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <Homepage>
        <CategoryWrapper>
          <CategoryItem>
            <StyledLink to="/about">About</StyledLink>
            <svg
              fill="#FFFFFF"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <svg
              fill="#FFFFFF"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/testimonial">Testimonial</StyledLink>
            <svg
              fill="#FFFFFF"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <circle cx="7.2" cy="14.4" r="3.2" />
              <circle cx="14.8" cy="18" r="2" />
              <circle cx="15.2" cy="8.8" r="4.8" />
            </svg>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/contact">Contact</StyledLink>
            <svg
              fill="#FFFFFF"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </CategoryItem>
        </CategoryWrapper>
      </Homepage>
    );
  }
}
