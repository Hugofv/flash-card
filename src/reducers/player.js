import history from "../utils/history";

const initialState = {
  players: []
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      const { players } = action;
      history.push('/flash-card')
      return { ...state, players }

    case 'UPDATE_PLAYER':
      return { ...state, players: action.players }

    case 'FETCH_PLAYER':
      return { ...state, players: action.players }

    default:
      return state;
  }
};

export default card;
