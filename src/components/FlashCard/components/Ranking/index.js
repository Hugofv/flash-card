import React from 'react';
import { Container } from './styles';
import RowRank from './components/RowRank';

const Ranking = ({ players }) => {
  return (
    <Container>
      {
        players.map((player, index) => {
          player.rank = index + 1;
          return <RowRank key={index} {...{ player }} />
        })
      }
    </Container>
  )
}

export default Ranking