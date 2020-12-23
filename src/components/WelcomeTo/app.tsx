/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

import missionL1 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';
import missionL2 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';
import missionL3 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';

import pool from '../../assets/svg/welcometo/pool-manufacturer.svg';
import surveyor from '../../assets/svg/welcometo/surveyor.svg';
import temp from '../../assets/svg/welcometo/temp-agency.svg';

import goPrevious from '../../assets/svg/welcometo/go-previous.svg';
import goNext from '../../assets/svg/welcometo/go-next.svg';

import door1 from '../../assets/svg/welcometo/doors/door-1.svg';
import door13 from '../../assets/svg/welcometo/doors/door-13.svg';
import door8 from '../../assets/svg/welcometo/doors/door-8.svg';

const App = () => {
  const cityPlansCss = {
    width: ['25%', '90%'],
    height: ['90%', '25%'],
  };
  return (
    <>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '30% 70%'],
          gridTemplateRows: ['20vh 10vh 60vh', '10vh 80vh'],
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
          height: ['90vh', '90vh'],
          width: ['100vw', '100vh'],
        }}
      >
        <div
          className="city-plans"
          sx={{
            gridArea: 'city-plans',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <img
            sx={cityPlansCss}
            src={missionL1}
            alt="mission Level 1"
          />
          <img
            sx={cityPlansCss}
            src={missionL2}
            alt="mission Level 2"
          />
          <img
            sx={cityPlansCss}
            src={missionL3}
            alt="mission Level 3"
          />
        </div>
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
              src={pool}
              alt="pool manufacturer"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={surveyor}
              alt="surveyor"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={temp}
              alt="temp agency"
            />
          </div>
        </div>
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
              width: '100%',
              height: '100%',
              display: 'grid',
            }}
          >
            <img
              sx={{
                width: '80%',
                justifySelf: 'center',
                alignSelf: 'center',
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
              gridTemplateColumns: ['50% 50%'],
              gridTemplateRows: ['33% 33% 33%'],
            }}
          >
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={door1}
              alt="door 1"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
                border: '1px black',
              }}
              src={temp}
              alt="temp agency"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={door13}
              alt="door 13"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={pool}
              alt="piscina"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={door8}
              alt="door 8"
            />
            <img
              sx={{
                height: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={temp}
              alt="temp agency"
            />
          </div>
          <div
            sx={{
              width: '100%',
              height: '100%',
              display: 'grid',
            }}
          >
            {' '}
            <img
              sx={{
                width: '80%',
                justifySelf: 'center',
                alignSelf: 'center',
              }}
              src={goNext}
              alt="siguiente"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
