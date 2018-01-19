import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import art from '../assets/arthur.png';

const TestimonialWrapper = styled.div`
  background: #ff5a5f;
  width: 100%;
  min-height: 100vh;
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
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0;
  }
`;
const Typing = keyframes`
from {
  width: 0;
}
to {
  width: 577px;
}
`;
const Typing1 = keyframes`
from {
  width: 0;
}
to {
  width: 400px;
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
  width: 577px;
  font-size: 3em;
  color: white;
  -webkit-font-smoothing: antialiased;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid white; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${Typing} 1.6s steps(30, end), ${BlinkCaret} 0.75s infinite;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 35px;
    width: 400px;
    margin: 0 auto;
    animation: ${Typing1} 1.6s steps(30, end), ${BlinkCaret} 0.75s infinite;
  }
`;
const ImageWrapper = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: 1em auto;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100px;
    height: 100px;
    margin: 1em auto;
  }
`;
const TestimonialTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: rgba(203, 144, 144, 0.45);
  padding: 5em;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 6em 0;
    flex-direction: column;
    align-items: left: ;
  }
`;
const Testimonial = styled.p`
  text-align: justify;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  padding: 0 16em;
  letter-spacing: 1.2px;
  line-height: 33px;
  margin: 0;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0 4.5em;
    text-align: left;
    padding: 0 3.5em;
    font-size: 12px;
  }
`;
const Hl = styled.span`
  color: black;
`;
const ContactP = styled.p`
  padding: 0 12em;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0 2em;
    font-size: 12px;
  }
`;
export default class TestimonialPage extends Component {
  render() {
    return (
      <TestimonialWrapper>
        <TestimonialBlock>
          <TestimonialTextBlock>
            <TestimonialHeader>
              {'{ '}Testimonial{' }'}
            </TestimonialHeader>
            <ImageWrapper src={art} />
            <ContactP>
              <Hl>const</Hl> testimonial = <Hl>{' { '}</Hl>
              <br />
            </ContactP>
            <Testimonial>
              <Hl>Name</Hl>: "Arthur Longbottom",<br />
              <Hl>Message</Hl>: 'Nikko is an ambitious, driven and excellent
              problem solver. As his mentor, he has been an absolute pleasure to
              work with as he constantly strives to achieve his goals creatively
              while using best practices. His ability to work through difficult
              problems is impressive and never gives up. I highly recommend
              Nikko as a full-stack developer! <br />
              <Hl>{' }'}</Hl>
            </Testimonial>
          </TestimonialTextBlock>
        </TestimonialBlock>
      </TestimonialWrapper>
    );
  }
}
