import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideNav = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 320px;
  height: 100vh;
  left: 0px;
  top: 0px;
  color: #fff;
  background: #324a98;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 30px 30px 0px;
`;
export const Nav = styled.nav`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`;
export const SlyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 50px;
  margin-top: 20px;
  text-decoration: none;
  transition: 250ms;

  color: white;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.03em;

  &.active {
    color: #1f3349;
    background-color: #fff;
    transition: 250ms;
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;
