import styled from 'styled-components';

export const StyledImage = styled.img``;

export const StyledIconHeaderImage = styled(StyledImage)`
  width: 100px;
  &:hover {
    cursor: pointer;
    transform: scale(0.8) rotate(360deg);
    transition: 2s transform;
  }
`;

export const StyledBannerImage = styled(StyledImage)`
  width: 100%;
`;

export const StyledFloatLeftImage = styled(StyledImage)`
  float: left;
  margin: 30px 15px 30px 30px;
  width: 7em;
`;
