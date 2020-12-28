/** @jsx jsx */
import { jsx, Grid, Flex } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';
import { cards } from '../../data/deck';

import { effects } from '../../data/effects';
import { doors } from '../../data/doors';
import goPrevious from '../../assets/svg/welcometo/go-previous.svg';
import goNext from '../../assets/svg/welcometo/go-next.svg';

import door1 from '../../assets/svg/welcometo/doors/door-1.svg';
import door13 from '../../assets/svg/welcometo/doors/door-13.svg';
import door8 from '../../assets/svg/welcometo/doors/door-8.svg';
import { useSelector, useDispatch } from 'react-redux';

import {
  nextTurn as nextTurnAction,
  reshuffleDeck as reshuffleDeckAction,
  goPrevious as goPreviousAction,
  goEnd as goEndAction,
  cancelReset as cancelResetAction,
  addEmptyCardToDiscardDeck as addEmptyCardToDiscardDeckAction,
} from '../../actions';
import { useEffect } from 'react';

const ConstructionCards = () => {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.deck);
  console.log(deck);
  const discardDeck = useSelector((state) => state.discardDeck);
  const previousMovementsDone = useSelector(
    (state) => state.previousMovementsDone,
  );

  const actualDoorCards = deck.map((subDeck) =>
    subDeck[0] ? subDeck[0].number : undefined,
  );
  const actualEffectCards = discardDeck.map((subDeck) =>
    subDeck[0] ? subDeck[0].effect : undefined,
  );

  const canGoPrevious = discardDeck[0].length > 0;
  const canGoNext = deck[0].length > 0;

  const effect0 = effects.find(
    (effect) => effect.name === actualEffectCards[0],
  );

  const effect1 = effects.find(
    (effect) => effect.name === actualEffectCards[1],
  );

  const effect2 = effects.find(
    (effect) => effect.name === actualEffectCards[2],
  );

  const next = () => {
    if (previousMovementsDone) {
      return;
    }
    if (canGoNext) {
      dispatch(nextTurnAction());
    } else {
      const lastThreeCards = discardDeck.map(
        (singleDeck) => singleDeck[0],
      );
      const cardWithoutLastThreeCards = cards.filter((card) => {
        return !lastThreeCards.includes(card);
      });
      const shuffledCards = cardWithoutLastThreeCards
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);
      dispatch(
        reshuffleDeckAction({
          cards: [
            shuffledCards.slice(0, 26),
            shuffledCards.slice(26, 26 * 2),
            shuffledCards.slice(26 * 2, 26 * 3),
          ],
        }),
      );
    }
  };

  const previouslyNext = () => {
    if (previousMovementsDone) {
      dispatch(nextTurnAction());
    }
  };

  const previous = () => {
    if (canGoPrevious) {
      dispatch(goPreviousAction());
    }
  };

  return (
    <div
      className="construction-cards"
      sx={{
        gridArea: 'construction-cards',
        display: 'grid',
        gridTemplateColumns: ['100px auto 100px'],
      }}
    >
      <div
        className="actions-left"
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: '20% 20% 20% 20% 20%',

          gridTemplateAreas: `
          '.'
          '.'
          'go-previous'
          'go-previously-next'
          '.'`,
        }}
      >
        <img
          onClick={previous}
          sx={{
            width: '70%',
            justifySelf: 'center',
            alignSelf: 'center',
            opacity: canGoPrevious ? '1' : '0.2',
            gridArea: 'go-previous',
          }}
          src={goPrevious}
          alt="anterior"
        />
        <img
          onClick={previouslyNext}
          sx={{
            gridArea: 'go-previously-next',
            alignSelf: 'center',
            justifySelf: 'center',
            width: '70%',
            opacity: previousMovementsDone ? '1' : '0',
          }}
          src={goNext}
          alt="mover hacia adelante"
        />
      </div>
      <div
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gridTemplateRows: '33% 33% 33%',
          gridTemplateAreas: `
          'door1 effect1'
          'door2 effect2'
          'door3 effect3'
        `,
        }}
      >
        {actualDoorCards[0] && (
          <img
            sx={{
              maxHeight: '50%',
              maxWidth: '80%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'door1',
            }}
            src={doors[parseInt(actualDoorCards[0]) - 1]}
            alt={actualDoorCards[1]}
          />
        )}
        {actualEffectCards[0] && (
          <div
            sx={{
              display: 'grid',
              width: '80%',
              justifySelf: 'center',
              borderRadius: '10px',
              alignSelf: 'center',
              border: `1px solid ${effect0.color}`,
              paddingBottom: '80%',
              position: 'relative',
              gridArea: 'effect1',
            }}
          >
            <img
              sx={{
                position: 'absolute',
                justifySelf: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}
              src={effect0.image}
              alt={effect0.name}
            />
          </div>
        )}
        {actualDoorCards[1] && (
          <img
            sx={{
              maxHeight: '50%',
              maxWidth: '80%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'door2',
            }}
            src={doors[parseInt(actualDoorCards[1]) - 1]}
            alt={actualDoorCards[1]}
          />
        )}
        {actualEffectCards[1] && (
          <div
            sx={{
              display: 'grid',
              width: '80%',
              justifySelf: 'center',
              borderRadius: '10px',
              alignSelf: 'center',
              border: `1px solid ${effect1.color}`,
              paddingBottom: '80%',
              position: 'relative',
              gridArea: 'effect2',
            }}
          >
            <img
              sx={{
                position: 'absolute',
                justifySelf: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}
              src={effect1.image}
              alt={effect1.name}
            />
          </div>
        )}
        {actualDoorCards[2] && (
          <img
            sx={{
              maxHeight: '50%',
              maxWidth: '80%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'door3',
            }}
            src={doors[parseInt(actualDoorCards[2]) - 1]}
            alt={actualDoorCards[2]}
          />
        )}
        {actualEffectCards[2] && (
          <div
            sx={{
              display: 'grid',
              width: '80%',
              justifySelf: 'center',
              borderRadius: '10px',
              alignSelf: 'center',
              border: `1px solid ${effect2.color}`,
              paddingBottom: '80%',
              position: 'relative',
              gridArea: 'effect3',
            }}
          >
            <img
              sx={{
                position: 'absolute',
                justifySelf: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}
              src={effect2.image}
              alt={effect2.name}
            />
          </div>
        )}
      </div>
      <div
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: '20% 20% 20% 20% 20%',

          gridTemplateAreas: `
        '.'
        '.'
        'go-next'
        '.'
        '.'
      `,
        }}
      >
        <img
          onClick={() => next()}
          sx={{
            width: '70%',
            justifySelf: 'center',
            alignSelf: 'center',
            opacity: !previousMovementsDone ? '1' : '0.2',
            gridArea: 'go-next',
          }}
          src={goNext}
          alt="siguiente"
        />
      </div>
    </div>
  );
};

export default ConstructionCards;
