import React, {Component} from 'react';
import styled from '@emotion/styled';
import NavItems from './NavItems';
import {Flex} from './elements';
import withUserHOC from './withUserHOC';

const NavLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({textColor}) => textColor};
`;

const NavContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme: {textColor}}) => textColor};
  height: 100px;
  padding: 20px;
  background: ${({theme: {bgColor}}) => bgColor};
`;

const Profile = ({user: {name}}) => (
  <div>{name}</div>
)

const Navbar = (props) => {
  const {user, theme} = props;
  const UserProfile = withUserHOC(Profile)

  return (
    <NavContainer theme={theme}>
      <NavLogo textColor={theme.textColor}>logo</NavLogo>
      <NavItems {...props} />
      <UserProfile />
    </NavContainer>
  );
}

export default Navbar;
