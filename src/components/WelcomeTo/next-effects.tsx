/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

import { effects } from '../../data/effects';
import { useSelector } from 'react-redux';
import { couldStartTrivia } from 'typescript';

const NextEffects = () => {
  const deck = useSelector((state) => state.deck);
  const nextEffects = deck.map((deckPile) =>
    deckPile[0] ? deckPile[0].effect : undefined,
  );
  const nextEffect0 = effects.filter(
    (symbol) => symbol.name === nextEffects[0],
  )[0];

  const nextEffect1 = effects.filter(
    (symbol) => symbol.name === nextEffects[1],
  )[0];

  const nextEffect2 = effects.filter(
    (symbol) => symbol.name === nextEffects[2],
  )[0];

  return (
    <div
      className="next-effects"
      sx={{
        gridArea: 'next-effects',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '33% 33% 33%',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '90%',
          height: '80%',
          border: '1px solid #707070',
          borderRadius: '10px',
        }}
      >
        <img
          sx={{
            height: '50%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={nextEffect0.image}
          alt="pool manufacturer"
        />
        <img
          sx={{
            height: '50%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={nextEffect1.image}
          alt="surveyor"
        />
        <img
          sx={{
            height: '50%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={nextEffect2.image}
          alt="temp agency"
        />
      </div>
    </div>
  );
};

export default NextEffects;
