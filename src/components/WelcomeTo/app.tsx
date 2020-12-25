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

import pool from '../../assets/svg/welcometo/pool-manufacturer.svg';
import surveyor from '../../assets/svg/welcometo/surveyor.svg';
import temp from '../../assets/svg/welcometo/temp-agency.svg';

const App = () => {
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: ['100%', '30% 70%'],
        gridTemplateRows: ['20% 10% 70%', '10% 90%'],
        gridTemplateAreas: [
          `
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
      <CityPlans></CityPlans>
      <NextEffects></NextEffects>
      <ConstructionCards></ConstructionCards>
    </div>
  );
};

export default App;
