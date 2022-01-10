import React from 'react';
import styled from 'styled-components';
import * as color from './color';

type Props = {
  className?: string;
};

export const CardFilter: React.FC<Props> = ({ className }) => {
  return (
    <Container>
      <Input placeholder="Filter cards" />
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  align-items: center;
  min-width: 300px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
`;

const Input = styled.input.attrs({ type: 'search' })`
  width: 100%;
  padding: 6px 8px 6px 0;
  color: ${color.White};
  font-size: 14px;

  :focus {
    outline: none;
  }
`;
