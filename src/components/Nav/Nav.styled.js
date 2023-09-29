import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  width: 300px;
  justify-content: space-evenly;
`;

export const StyledLink = styled(NavLink)`

font-size: 20px;
  scale: 1;
  color: #9f4636;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 200ms linear;

  padding: 4px 0;

&:hover:not(.active) {
    color: #6c2d2c;
    border-bottom: 2px solid #6c2d2c;
  }

  &.active {
    color: #6c2d2c;
    border-bottom: 2px solid #6c2d2c;
  }`;