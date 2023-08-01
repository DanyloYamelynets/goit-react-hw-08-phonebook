import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/userOperations';
import { Container, LoginButton, LoginForm, LoginInput, LoginLabel, LoginP, LoginTitle } from './LoginStyled';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    if (!userData) return;

    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const children = e.currentTarget.elements;
    const email = children.userEmail.value;
    const password = children.userPassword.value;
    dispatch(loginThunk({ email, password }))
    e.currentTarget.reset();
  };

  return (
    <Container>
      <LoginTitle>Login into your account</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel>
          <LoginP>Email:</LoginP>
          <LoginInput
            placeholder="across@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </LoginLabel>
        <LoginLabel>
          <LoginP>Password:</LoginP>
          <LoginInput
            placeholder="examplepwd12345"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </LoginLabel>
        <LoginButton type="submit">Sign In</LoginButton>
      </LoginForm>
    </Container>
  );
};
export default Login;
