import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/userOperations';
import { selectUserData } from 'redux/auth/userSelectors';
import { Container, LogOutBtn, Text } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <Container>
      <Text>{userData.email}</Text>
      <LogOutBtn onClick={handleLogOut}>Log Out</LogOutBtn>
    </Container>
  );
};
