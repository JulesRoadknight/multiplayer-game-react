import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import NewPlayerForm from '../NewPlayerForm';

describe('<NewPlayerForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    let sendHandler;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<NewPlayerForm onSend={sendHandler} data={'One'} />));

      fireEvent.change(
        getByTestId('playerName'),
        {
          target: {
            value: 'New Player',
          },
        },
      );

      fireEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('playerName').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('New Player');
    });
  });
});