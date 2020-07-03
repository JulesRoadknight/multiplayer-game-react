import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Game from '../Game';

describe('<Game />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('Starting the game', () => {
    let sendHandler;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<Game data={['New Player', 'Player 2']} />));
    });

    it('Current player is the first player entered', () => {
      expect(getByTestId('currentPlayer').getAttribute('value')).toEqual('New Player');
    });
  });
});