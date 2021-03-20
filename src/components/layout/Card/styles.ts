import styled from 'styled-components';

export const StyledContainer = styled.div`
  align-items: center;
  border-color: brown;
  border-radius: 10px;
  border-style: dashed;
  border-width: 2px;
  box-shadow: 10px 10px 30px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  padding: 50px;
  transition: 1s all;
  width: auto;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 1s transform;
  }
`;
