import React, { Component } from 'react'
import styled from '@emotion/styled';

const BodyElementsContainer = styled.div`
  padding: 20px;
  font-size: 18px;
  margin: 20px;
  height: 150px;
  color: ${({theme: {textColor}}) => textColor};
  background: ${({theme: {bgColor}}) => bgColor};
  border: 1px solid ${({theme: {textColor}}) => textColor};
`;

export class BodyElements extends Component {
  render() {
    return (
      <BodyElementsContainer theme={this.props.theme}>
        Body Elements
      </BodyElementsContainer>
    )
  }
}

export default BodyElements;
