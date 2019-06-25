export const update_card = cards => dispatch => {
  dispatch({ type: 'UPDATE_CARD', cards });
}

export const start_game = () => dispatch => {
  dispatch({ type: 'START_GAME' });
}
