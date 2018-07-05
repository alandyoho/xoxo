import { Map } from 'immutable';

const board = Map()

const MOVE = 'MOVE'

export const move = (player, position) => {
  return {
    type: MOVE,
    position: position,
    player: player
  }
}

export function reducer(state = { board: board, turn: "X" }, action) {
  if (action.type === MOVE) {
    return { board: state.board.setIn(action.position, action.player), turn: state.turn === 'X' ? 'O' : 'X' }
  }
  return state
}
