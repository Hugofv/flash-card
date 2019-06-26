import * as card_actions from '../../../../actions/card';
import * as player_actions from '../../../../actions/player';

import { BackCard, BoxCard, Card, Container, ContainerCards, FrontCard } from "./styles";
import React, { useEffect, useState } from "react";

import IconCard from "../../../../assets/img/icon-card.png";
import Swal from 'sweetalert2'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getPlayer from "../../../../utils/getPlayer";
import history from "../../../../utils/history";

const Game = ({ card, update_card, start_game, update_player, setPoints, points }) => {

  const [indexCards, setIndexCards] = useState({ indexBack: null, indexCurrent: null });
  const [start, setStart] = useState(false);

  const [countChecked, setCountChecked] = useState(0);
  const { cards } = card;

  useEffect(() => {
    if (!getPlayer()) {
      history.push('/')
    }
  }, [])

  useEffect(() => {
    start_game()
  }, [start_game])

  useEffect(() => {
    if (start && countChecked === (cards.length / 2)) {
      setStart(false);
      let player = getPlayer();
      let better = player.points ? player.points > points : true;
      player.points = points;
      setPoints(0.00);
      setCountChecked(0);
      update_player(player);

      Swal.fire({
        title: better ? 'Parabéns, novo record' : 'Não foi dessa vez que você conseguiu atingir o record, tente novamente',
        text: points,
        type: better ? 'success' : 'error',
        confirmButtonText: 'Reiniciar'
      }).then(() => {
        start_game()
      })
    }
  }, [countChecked, update_player])

  useEffect(() => {
    if ((indexCards.indexBack == null || indexCards.indexCurrent == null)) {
      return
    }
    let newCards = cards;
    if (newCards[indexCards.indexBack].value == newCards[indexCards.indexCurrent].value) {
      setIndexCards({ indexBack: null, indexCurrent: null })
      let count = countChecked + 1
      setCountChecked(count);
      newCards[indexCards.indexBack].checked = true;
      newCards[indexCards.indexCurrent].checked = true;
    } else {
      setIndexCards({ indexBack: null, indexCurrent: null })
      setTimeout(() => {
        newCards[indexCards.indexBack].open = false;
        newCards[indexCards.indexCurrent].open = false;

        update_card(newCards);
      }, 700)
    }
  }, [indexCards.indexBack, indexCards.indexCurrent]);

  const handleCard = index => {
    let newCards = cards;

    if (!start) {
      sessionStorage.setItem('inicio', new Date())
      setStart(true);
    }

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
      let point = points + 1
      setPoints(point);
    } else {
      setIndexCards({ ...indexCards, indexBack: index })
    }
  }

  return (
    <Container>
      <ContainerCards>
        {
          cards.map((card, index) => <BoxCard key={index} onClick={() => handleCard(index)}>
            <Card open={card.open} >
              <FrontCard>
                <span>{card.value}</span>
              </FrontCard>

              <BackCard>
                <img style={{ width: '100%' }} src={IconCard} />
              </BackCard>
            </Card>
          </BoxCard>)
        }
      </ContainerCards>
    </Container >
  );
};

function mapStateToProps(state) {
  return { card: state.card }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...card_actions, ...player_actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
