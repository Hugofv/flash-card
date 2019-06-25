const initialState = {
  cards: [
    {
      value: 7,
      icon: 'heart'
    },
    {
      value: 2,
      icon: 'heart'
    },
    {
      value: 45,
      icon: 'heart'
    },
    {
      value: 8,
      icon: 'heart'
    },
    {
      value: 4,
      icon: 'heart'
    },
  ]
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      let { cards } = action;
      return { ...state, cards }

    case 'START_GAME':
      return { ...state, cards: JSON.parse(JSON.stringify(state.cards.concat(state.cards))).sort(() => Math.random() - 0.5) }

    default:
      return state;
  }
};

export default card;
