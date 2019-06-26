import React, { useState } from 'react';
import { StartButton, Container, Input, BoxInput, Label } from './styles';
import { connect } from 'react-redux';
import * as player_actions from '../../actions/player';
import { bindActionCreators } from 'redux'

const Home = ({ add_player }) => {
  const [player, setPlayer] = useState({ nickname: '' })

  return (
    <Container>
      <BoxInput>
        <Label>Nickname</Label>
        <Input placeholder='Informe um nickname' onChange={({ target: { value } }) => setPlayer({ ...player, nickname: value })} />
      </BoxInput>
      <StartButton onClick={() => add_player(player)}>
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
