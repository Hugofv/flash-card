import { Card, Container } from "./styles";

import IconCard from "../../assets/img/icon-card.png";
import React from "react";

const FlashCard = () => {
  return (
    <Container>
      <Card heart open={false}>
        {false ? (
          <p>5</p>
        ) : (
          <div>
            <img src={IconCard} />
          </div>
        )}
      </Card>

      <Card diomont>
        <p>7</p>
      </Card>
    </Container>
  );
};

export default FlashCard;
