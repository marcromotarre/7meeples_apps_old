/** @jsx jsx */
import { jsx } from 'theme-ui';

import NextEffects from './next-effects.tsx';
import CityPlans from './city-plans.tsx';
import ConstructionCards from './contruction-cards.tsx';

import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

import missionL1 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';
import missionL2 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';
import missionL3 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';

import Nav from '../nav';

import pool from '../../assets/svg/welcometo/pool-manufacturer.svg';
import surveyor from '../../assets/svg/welcometo/surveyor.svg';
import temp from '../../assets/svg/welcometo/temp-agency.svg';
import { useSelector, useDispatch } from 'react-redux';

import {
  resetDeck,
  setCityPlans,
  nextTurn as nextTurnAction,
  reshuffleDeck as reshuffleDeckAction,
  goPrevious as goPreviousAction,
  goEnd as goEndAction,
  cancelReset as cancelResetAction,
  addEmptyCardToDiscardDeck as addEmptyCardToDiscardDeckAction,
} from '../../actions';
import { cards } from '../../data/deck';
import { cityPlans as cityPlanCards } from '../../data/city-plans';

const App = () => {
  const dispatch = useDispatch();

  const shuffledCards = cards
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

  const cityPlans = [
    cityPlanCards
      .filter((cityPlan) => cityPlan.level === '1')
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0],
    cityPlanCards
      .filter((cityPlan) => cityPlan.level === '2')
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0],
    cityPlanCards
      .filter((cityPlan) => cityPlan.level === '3')
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0],
  ];

  dispatch(
    resetDeck({
      cards: [
        shuffledCards.slice(0, 27),
        shuffledCards.slice(27, 27 * 2),
        shuffledCards.slice(27 * 2, 27 * 3),
      ],
    }),
  );
  dispatch(setCityPlans({ cityPlans }));
  return (
    <div
      sx={{
        display: 'grid',
        position: 'fixed',
        gridTemplateColumns: ['100%', '30% 70%'],
        gridTemplateRows: ['50px 20% 10% auto', '10% 90%'],
        gridTemplateAreas: [
          `
            'nav'
            'city-plans'
            'next-effects'
            'construction-cards'
          `,
          `
          'city-plans next-effects'
          'city-plans construction-cards'
        `,
        ],
      }}
    >
      <Nav />
      <CityPlans></CityPlans>
      <NextEffects></NextEffects>
      <ConstructionCards></ConstructionCards>
    </div>
  );
};

export default App;
