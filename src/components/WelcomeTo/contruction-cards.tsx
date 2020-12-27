/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

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

const ConstructionCards = () => {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);

  const actualDoorCards = deck.map((subDeck) =>
    subDeck[0] ? subDeck[0].number : undefined,
  );
  const actualEffectCards = discardDeck.map((subDeck) =>
    subDeck[0] ? subDeck[0].effect : undefined,
  );

  const next = () => {
    if (canGoNext) {
      dispatch(nextTurnAction());
    }
  };

  const previous = () => {
    if (canGoPrevious) {
      dispatch(goPreviousAction());
    }
  };

  const canGoPrevious = discardDeck[0].length > 0;
  const canGoNext = deck[0].length > 0;

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
        sx={{
          width: '90%',
          display: 'grid',
        }}
      >
        <img
          onClick={previous}
          sx={{
            width: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
            opacity: canGoPrevious ? '1' : '0.2',
          }}
          src={goPrevious}
          alt="anterior"
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
              border: '1px solid black',
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
              src={
                effects.find(
                  (effect) => effect.name === actualEffectCards[0],
                ).image
              }
              alt={
                effects.find(
                  (effect) => effect.name === actualEffectCards[0],
                ).name
              }
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
              border: '1px solid black',
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
              src={
                effects.find(
                  (effect) => effect.name === actualEffectCards[1],
                ).image
              }
              alt={
                effects.find(
                  (effect) => effect.name === actualEffectCards[1],
                ).name
              }
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
              border: '1px solid black',
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
              src={
                effects.find(
                  (effect) => effect.name === actualEffectCards[2],
                ).image
              }
              alt={
                effects.find(
                  (effect) => effect.name === actualEffectCards[2],
                ).name
              }
            />
          </div>
        )}
      </div>
      <div
        sx={{
          width: '100%',
          display: 'grid',
        }}
      >
        <img
          onClick={() => next()}
          sx={{
            width: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
            opacity: canGoNext ? '1' : '0.2',
          }}
          src={goNext}
          alt="siguiente"
        />
      </div>
    </div>
  );
};

export default ConstructionCards;
