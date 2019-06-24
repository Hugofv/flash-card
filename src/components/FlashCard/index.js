import { Card, Container, FrontCard, BackCard, BoxCard } from "./styles";

import IconCard from "../../assets/img/icon-card.png";
import React, { useState, useEffect } from "react";

var cards = [
  {
    value: 7,
    icon: 'heart'
  },
  {
    value: 2,
    icon: 'heart'
  },
  {
    value: 45,
    icon: 'heart'
  },
  {
    value: 8,
    icon: 'heart'
  },
  {
    value: 32,
    icon: 'heart'
  },
  {
    value: 9,
    icon: 'heart'
  },
  {
    value: 4,
    icon: 'heart'
  },
  {
    value: 5,
    icon: 'heart'
  },
  {
    value: 3,
    icon: 'heart'
  },
  {
    value: 0,
    icon: 'heart'
  },
]

const FlashCard = () => {

  const [indexCards, setIndexCards] = useState({ indexBack: null, indexCurrent: null });

  useEffect(() => {
    if (!(indexCards.indexBack && indexCards.indexCurrent)) {
      return
    }
    if (cards[indexCards.indexBack].value == cards[indexCards.indexCurrent].value) {
      cards[indexCards.indexBack].checked = true;
      cards[indexCards.indexCurrent].checked = true;
    } else {
      setIndexCards({ indexBack: null, indexCurrent: null })
      setTimeout(() => {
        cards[indexCards.indexBack].open = false;
        cards[indexCards.indexCurrent].open = false;
      }, 500)
    }
  });

  const handleCard = index => {
    cards[index].open = !cards[index].open;

    if (indexCards.indexBack) {
      setIndexCards({ ...indexCards, indexCurrent: index })
    } else {
      setIndexCards({ ...indexCards, indexBack: index })
    }
  }

  console.log(cards);

  return (
    <Container>
      {
        cards.map((card, index) => <BoxCard key={index} onClick={() => handleCard(index)}>
          <Card open={card.open} >
            <FrontCard>
              <span>{card.value}</span>
            </FrontCard>

            <BackCard>
              <img src={IconCard} />
            </BackCard>
          </Card>
        </BoxCard>)
      }

    </Container >
  );
};

export default FlashCard;
