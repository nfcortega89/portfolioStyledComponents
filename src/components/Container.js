import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background: white;
`;

export default function Container(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
