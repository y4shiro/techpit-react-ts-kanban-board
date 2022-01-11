import React from 'react';
import styled from 'styled-components';
import * as color from './color';

import { Header as _Header } from './Header';

export const App: React.VFC = () => {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column>
            <ColumnHeader>TODO</ColumnHeader>

            <Card>朝食をとる🍞</Card>
            <Card>SNSをチェックする🐦</Card>
            <Card>布団に入る (:3[___]</Card>
          </Column>

          <Column>
            <ColumnHeader>Doing</ColumnHeader>

            <Card>顔を洗う👐</Card>
            <Card>歯を磨く🦷</Card>
          </Column>

          <Column>
            <ColumnHeader>Waiting</ColumnHeader>
          </Column>

          <Column>
            <ColumnHeader>Done</ColumnHeader>

            <Card>布団から出る (:3っ)っ -=三[＿＿]</Card>
          </Column>
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

const Column = styled.div`
  display: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};

  > :not(:last-child) {
    flex-shrink: 0;
  }
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
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
