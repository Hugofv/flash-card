import * as player_actions from '../../actions/player';

import { BoxInput, Container, Error, Input, Label, StartButton } from './styles';
import React, { useState } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const Home = ({ add_player }) => {
  const [player, setPlayer] = useState({ nickname: '' })
  const [error, setError] = useState({ })

  const addPlayer = () => {
    if (player.nickname) {
      add_player(player)
    } else {
      setError({nickname: 'Campo Obrigatório'})
    }
  }

  return (
    <Container>
      <BoxInput>
        <Label>Nickname</Label>
        <Input placeholder='Informe um nickname' onChange={({ target: { value } }) => {
          setError({})
          setPlayer({ ...player, nickname: value })
        }} />
        {
          error.nickname && <Error>{error.nickname}</Error>
        }
      </BoxInput>
      <StartButton onClick={() => addPlayer(player)}>
        Start
      </StartButton>
    </Container>
  );
}

function mapStateToProps(state) {
  return { player: state.player }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(player_actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
