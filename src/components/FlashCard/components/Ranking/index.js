import React from 'react';
import { Container } from './styles';
import RowRank from './components/RowRank';

const Ranking = props => {

  return (
    <Container>
      <RowRank />
      <RowRank />
      <RowRank />
      <RowRank />
      <RowRank />
      <RowRank />
    </Container>
  )
}

export default Ranking