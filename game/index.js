import { Map } from 'immutable';

const board = Map()

const move = (player, positiom) => {
 return {
   type : action.type,
   position: action.position,
   player: action.player
 }
}

export default function reducer(state={board : board}, action) {
  if (action.type === "MOVE") {
    return {board: board.setIn(action.position, action.type)}
  }
  return state
}
