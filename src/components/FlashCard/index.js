import { Card, Container, FrontCard, BackCard, BoxCard } from "./styles";

import IconCard from "../../assets/img/icon-card.png";
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import * as card_actions from '../../actions/card';
import { bindActionCreators } from 'redux'

const FlashCard = ({ card, update_card, start_game }) => {

  const [indexCards, setIndexCards] = useState({ indexBack: null, indexCurrent: null });
  const { cards } = card;

  useEffect(() => {
    start_game()
  }, [])

  useEffect(() => {
    if ((indexCards.indexBack == null || indexCards.indexCurrent == null)) {
      return
    }
    let newCards = cards;
    if (newCards[indexCards.indexBack].value == newCards[indexCards.indexCurrent].value) {
      setIndexCards({ indexBack: null, indexCurrent: null })
      newCards[indexCards.indexBack].checked = true;
      newCards[indexCards.indexCurrent].checked = true;
    } else {
      setIndexCards({ indexBack: null, indexCurrent: null })
      setTimeout(() => {
        newCards[indexCards.indexBack].open = false;
        newCards[indexCards.indexCurrent].open = false;

        update_card(newCards);
      }, 1000)
    }
  }, [indexCards.indexBack, indexCards.indexCurrent]);

  console.log(cards)
  const handleCard = index => {
    let newCards = cards;
    if (newCards[index].checked) {
      return
    }

    newCards[index].open = !newCards[index].open;

    if (indexCards.indexBack && index === indexCards.indexBack) {
      setIndexCards({ ...indexCards, indexBack: null })
      return
    }

    if (indexCards.indexBack != null) {
      setIndexCards({ ...indexCards, indexCurrent: index })

    } else {
      setIndexCards({ ...indexCards, indexBack: index })
    }
  }

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

function mapStateToProps(state) {
  return { card: state.card }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(card_actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard);
