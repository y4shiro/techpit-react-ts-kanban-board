import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { randomID, reorderPatch } from './utils';
import { api, CardID, ColumnID } from './api';
import * as color from './color';
import { Button, ConfirmButton } from './Button';
import { useAutoFitToContentHeight } from './hooks/useAutoFitToContentHeight';

type Props = {
  columnID: ColumnID;
  onCancel?: () => void;
  className?: string;
};

export const InputForm: React.VFC<Props> = ({
  columnID,
  onCancel,
  className,
}) => {
  const dispatch = useDispatch();
  const value = useSelector(
    state => state.columns?.find(c => c.id === columnID)?.text,
  );
  const cardsOrder = useSelector(state => state.cardsOrder);

  const onChange = (value: string) =>
    dispatch({
      type: 'InputForm.SetText',
      payload: {
        columnID,
        value,
      },
    });

  const disabled = !value?.trim();
  const handleConfirm = () => {
    if (disabled) return;

    const text = value;
    const cardID = randomID() as CardID;
    const patch = reorderPatch(cardsOrder, cardID, cardsOrder[columnID]);

    dispatch({
      type: 'InputForm.ConfirmInput',
      payload: {
        columnID,
        cardID,
      },
    });

    api('POST /v1/cards', {
      id: cardID,
      text,
    });
    api('PATCH /v1/cardsOrder', patch);
  };

  const ref = useAutoFitToContentHeight(value);

  return (
    <Container className={className}>
      <Input
        ref={ref}
        autoFocus
        placeholder="Enter a note"
        value={value}
        onChange={ev => onChange(ev.currentTarget.value)}
        onKeyDown={ev => {
          if (!((ev.metaKey || ev.ctrlKey) && ev.key === 'Enter')) return;
          handleConfirm();
        }}
      />

      <ButtonRow>
        <AddButton disabled={disabled} onClick={handleConfirm} />
        <CancelButton onClick={onCancel} />
      </ButtonRow>
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
  padding: 6px 8px;
  background-color: ${color.White};
  font-size: 14px;
  line-height: 1.7;

  :focus {
    outline: none;
    border-color: ${color.Blue};
  }
`;

const ButtonRow = styled.div`
  display: flex;

  > :not(:first-child) {
    margin-left: 8px;
  }
`;

const AddButton = styled(ConfirmButton).attrs({
  children: 'Add',
})``;

const CancelButton = styled(Button).attrs({
  children: 'Cancel',
})``;
