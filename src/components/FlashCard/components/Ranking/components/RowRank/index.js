import React from 'react';
import { Rank, Name, Color, BoxRank, Points } from './styles';

const RowRank = ({ player }) => {
  return (
    <BoxRank>
      <Rank>{player.rank}</Rank>
      <Color color={(player.rank === 1 && '#27b49f') || (player.rank === 2 && '#fdb903') || (player.rank === 3 && '#fff') || '#471da2'} />
      <Name>{player.nickname}</Name>
      <Points>{player.points || 0}</Points>
    </BoxRank>
  )
};

export default RowRank;
