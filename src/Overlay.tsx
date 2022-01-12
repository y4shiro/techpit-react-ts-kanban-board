import React from 'react';
import styled from 'styled-components';

type Props = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export const Overlay: React.VFC<Props> = ({ onClick, className, children }) => {
  return (
    <Container
      className={className}
      onClick={ev => {
        if (ev.target !== ev.currentTarget) return;
        onClick?.();
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 8%, 0.4);
`;
