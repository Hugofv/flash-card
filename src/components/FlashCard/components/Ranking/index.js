import React from 'react';
import { Container, Points } from './styles';
import RowRank from './components/RowRank';

const Ranking = ({ players, points }) => {

  return (
    <Container>
      <Points id="points">{points}</Points>
      <div>
        {
          players.map((player, index) => {
            player.rank = index + 1;
            return <RowRank key={index} {...{ player }} />
          })
        }
      </div>
    </Container>
  )
}

export default Ranking