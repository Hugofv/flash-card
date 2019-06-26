const initialState = {
  cards: []
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      let { cards } = action;
      return { ...state, cards }

    default:
      return state;
  }
};

export default card;
