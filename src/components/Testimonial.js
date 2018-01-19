import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import art from '../assets/arthur.png';

const TestimonialWrapper = styled.div`
  background: #ff5a5f;
  width: 100%;
  min-height: 100vh;
  transform: translateX(0%);
`;
const TestimonialBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 4em 4em;
`;
const Typing = keyframes`
from {
  width: 0;
}
to {
  width: 454px;
}
`;

const BlinkCaret = keyframes`
from, to {
  border-color: transparent
}
50% {
  border-color: white;
}
`;

const TestimonialHeader = styled.h1`
  font-size: 3em;
  color: white;
  -webkit-font-smoothing: antialiased;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid white; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${Typing} 1.6s steps(30, end), ${BlinkCaret} 0.75s infinite;
`;
const ImageWrapper = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: 1em;
  transition: all 0.4s ease-in-out

  &:hover {
    width: 150px;
    height: 150px;
    transition: all 0.4s ease-in-out;
  }
`;
const Name = styled.p`
  font-size: 16px;
  color: white;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-weight: 900;
`;
const Testimonial = styled.p`
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  padding: 0 15em;
  letter-spacing: 1.2px;
  line-height: 33px;
`;
const Hl = styled.span`
  color: black;
`;
export default class TestimonialPage extends Component {
  constructor(props) {
    super(props);
  }
  onClickSlideIn() {}
  render() {
    return (
      <TestimonialWrapper>
        <TestimonialBlock>
          <TestimonialHeader>
            {'< '}Testimonial{' / >'}
          </TestimonialHeader>
          <ImageWrapper src={art} />
          <Name>Arthur Longbottom</Name>
          <Testimonial>
            Nikko is an <Hl>ambitious</Hl>, driven and excellent problem solver.
            As his mentor, he has been an absolute pleasure to work with as he
            constantly strives to achieve his goals <Hl>creatively</Hl> while
            using best practices. His ability to work through difficult problems
            is <Hl>impressive</Hl> and never gives up. I highly recommend Nikko
            as a <Hl>full-stack developer</Hl>!
          </Testimonial>
        </TestimonialBlock>
      </TestimonialWrapper>
    );
  }
}
