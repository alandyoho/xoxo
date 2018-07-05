import { Map } from 'immutable';
import { createStore } from 'redux';

const MOVE = 'MOVE';
const X = 'X';
const O = 'O';

let board = Map();

const moveAction = move => ({
  type: MOVE,
  position: [],
  player: TURN,
});

export default function reducer(state = { turn: 'X', board: board }, action) {
  switch (action.type) {
    case X:
      return { turn: O, board: board.setIn([1, 1], X) };
    case O:
      return { turn: X, board: board.setIn([1, 1], O) };
    default:
      return state;
  }
}
