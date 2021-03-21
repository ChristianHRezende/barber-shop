import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: brown;
  font-size: 2.5em;
  font-style: bold;
  line-height: 2.5em;
  text-align: center;
`;

export const StyledSubTitle = styled.h2`
  color: brown;
  font-size: 2em;
  line-height: 2em;
  text-align: center;
`;

export const StyledParagraphy = styled.p`
  line-height: 2em;
  text-align: start;
`;

export const StyledParagraphyInline = styled(StyledParagraphy)`
  display: inline;
`;
