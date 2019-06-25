import React from 'react'
import Game from './components/Game';
import Ranking from './components/Ranking';
import { Container } from './styles';

const FlashCard = props => {

  return (
    <Container>
      <Game />
      <Ranking />
    </Container>
  )
}

export default FlashCard