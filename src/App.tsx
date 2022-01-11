import React from 'react';
import styled from 'styled-components';
import * as color from './color';

import { Header as _Header } from './Header';
import { Column } from './Column';

export const App: React.VFC = () => {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column
            title="TODO"
            cards={[
              { id: 'a', text: '朝食をとる🍞' },
              { id: 'b', text: 'SNSをチェックする🐦' },
              { id: 'c', text: '布団に入る (:3[___]' },
            ]}
          />

          <Column
            title="Doing"
            cards={[
              { id: 'd', text: '顔を洗う👐' },
              { id: 'e', text: '歯を磨く🦷' },
            ]}
          />

          <Column title="Waiting" cards={[]} />

          <Column
            title="Done"
            cards={[{ id: 'f', text: '布団から出る (:3っ)っ -=三[＿＿]' }]}
          />
        </HorizontalScroll>
      </MainArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const Header = styled(_Header)`
  flex-shrink: 0;
`;

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`;

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`;

const Card = styled.div`
  position: relative;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 8px 32px;
  background-color: ${color.White};
  cursor: move;
`;
