import React from 'react';
import { Rank, Name, Color, BoxRank, Points } from './styles';

const RowRank = () => {

  return (
    <BoxRank>
      <Rank>1</Rank>
      <Color />
      <Name>Hugo Fernandes</Name>
      <Points>51515</Points>
    </BoxRank>
  )
};

export default RowRank;
