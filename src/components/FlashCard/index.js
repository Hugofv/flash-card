import React, { useEffect } from 'react'
import Game from './components/Game';
import Ranking from './components/Ranking';
import { Container } from './styles';
import { connect } from 'react-redux';
import * as player_actions from '../../actions/player';
import { bindActionCreators } from 'redux'


const FlashCard = ({ fetch_player, player }) => {
  useEffect(() => {
    fetch_player()
  }, [fetch_player])

  return (
    <Container>
      <Game />
      <Ranking players={player.players} />
    </Container>
  )
}

function mapStateToProps(state) {
  return { player: state.player }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(player_actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)