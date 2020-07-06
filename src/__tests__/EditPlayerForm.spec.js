import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import EditPlayerForm from '../EditPlayerForm';

describe('<EditPlayerForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    let sendHandler;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<EditPlayerForm data={'New Player'} onSend={sendHandler} />));

      fireEvent.change(
        getByTestId('editNew Player'),
        {
          target: {
            value: 'Player Updated',
          },
        },
      );

      fireEvent.click(getByTestId('updateNew Player'));
    });

    it('updates the text field', () => {
      expect(getByTestId('editNew Player'))
      expect(getByTestId('editNew Player').value).toEqual('Player Updated');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('New Player', false, true, 'Player Updated');
    });
  });
});