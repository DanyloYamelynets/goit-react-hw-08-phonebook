import styled from 'styled-components';

export const FilterSection = styled.section``;
export const FilterTitle = styled.h3`
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const FilterInput = styled.input`
  height: 20px;
  width: 200px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 6px;
  border-radius: 5px;
  &:hover,
  &:focus {
    border: 1px solid #324a98;
    transition: 250ms;
  }
`;
