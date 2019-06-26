import getRandomInt from "../utils/getRandomInt";

export const update_card = cards => dispatch => {
  dispatch({ type: 'UPDATE_CARD', cards });
}

export const start_game = () => dispatch => {
  let cards = [];
  for (let index = 0; index < 5; index++) {
    cards.push({ value: getRandomInt(0, 99) })
  }

  dispatch({ type: 'UPDATE_CARD', cards: JSON.parse(JSON.stringify(cards.concat(cards))).sort(() => Math.random() - 0.5) });
}
