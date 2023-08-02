import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/auth/userOperations';
import { selectUserData } from 'redux/auth/userSelectors';
import {
  Container,
  RegisterButton,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterP,
  RegisterTitle,
} from './RegisterStyled';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (!userData) return;

    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const children = e.currentTarget.elements;
    const name = children.userName.value;
    const email = children.userEmail.value;
    const password = children.userPassword.value;
    dispatch(registerThunk({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <Container>
      <RegisterTitle>Please, register your account</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterLabel>
          <RegisterP>Name:</RegisterP>
          <RegisterInput
            placeholder="Adrian Cross"
            name="userName"
            type="text"
            required
          />
        </RegisterLabel>
        <RegisterLabel>
          <RegisterP>Email:</RegisterP>
          <RegisterInput
            placeholder="across@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </RegisterLabel>
        <RegisterLabel>
          <RegisterP>Password:</RegisterP>
          <RegisterInput
            placeholder="examplepwd12345"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </RegisterLabel>
        <RegisterButton type="submit">Sign Up</RegisterButton>
      </RegisterForm>
    </Container>
  );
};
export default Register;
