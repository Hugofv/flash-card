export const add_player = player => dispatch => {

  let players = JSON.parse(localStorage.getItem('players') || '[]');
  if (!players.filter(e => e.nickname == player.nickname).length > 0) {
    players.push(player);
  }
  localStorage.setItem('players', JSON.stringify(players))
  sessionStorage.setItem('player', JSON.stringify(player))

  dispatch({ type: 'ADD_PLAYER', players });
}

export const update_player = player => dispatch => {

  let players = JSON.parse(localStorage.getItem('players') || '[]');
  players.forEach((element, index) => {
    if (element.nickname == player.nickname) {
      players[index] = player;
      return
    }
  });
  players = players.sort((a, b) => {
    return a.points < b.points ? -1 : a.points > b.points ? 1 : 0;
  });

  localStorage.setItem('players', JSON.stringify(players))
  sessionStorage.setItem('player', JSON.stringify(player))

  dispatch({ type: 'UPDATE_PLAYER', players });
}

export const fetch_player = () => dispatch => {
  let players = JSON.parse(localStorage.getItem('players') || '[]').sort((a, b) => {
    return a.points < b.points ? -1 : a.points > b.points ? 1 : 0;
  });
  dispatch({ type: 'FETCH_PLAYER', players });
}