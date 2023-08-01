import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 400px;
  height: auto;
  justify-content: center;
  align-items: center;
`;
export const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  margin: 0;
  text-align: center;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
`;
export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const LoginP = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const LoginInput = styled.input`
  background: #f4f4f38a;
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  outline: none;
  transition: 250ms;
  &:hover,
  &:focus {
    border: 1px solid #324a98;
    transition: 250ms;
  }
  &::placeholder {
    color: #a8a8a8;
  }
`;
export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 0px;
  margin-top: 10px;
  max-width: 400px;
  background: #006d97;
  border-radius: 6px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #ffffff;
  transition: 250ms;
  &:hover,
  &:focus {
    background: #004966;
    transition: 250ms;
  }
`;
