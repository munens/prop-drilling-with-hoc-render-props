import React, { Component } from 'react'
import styled from '@emotion/styled';
import BodyElements from './BodyElements';

const BodyContainer = styled.div`
  padding: 20px;
  font-size: 18px;
  color: darkgrey;
`;

export class Body extends Component {
  render() {
    return (
      <BodyContainer>
        Body
        <BodyElements {...this.props} />
      </BodyContainer>
    )
  }
}

export default Body;
