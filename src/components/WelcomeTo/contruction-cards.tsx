/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

import pool from '../../assets/svg/welcometo/pool-manufacturer.svg';
import surveyor from '../../assets/svg/welcometo/surveyor.svg';
import temp from '../../assets/svg/welcometo/temp-agency.svg';

import goPrevious from '../../assets/svg/welcometo/go-previous.svg';
import goNext from '../../assets/svg/welcometo/go-next.svg';

import door1 from '../../assets/svg/welcometo/doors/door-1.svg';
import door13 from '../../assets/svg/welcometo/doors/door-13.svg';
import door8 from '../../assets/svg/welcometo/doors/door-8.svg';

const ConstructionCards = () => {
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
            maxHeight: '50%',
            maxWidth: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={door1}
          alt="door 1"
        />
        <img
          sx={{
            maxHeight: '50%',
            maxWidth: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
            border: '1px black',
          }}
          src={temp}
          alt="temp agency"
        />
        <img
          sx={{
            maxHeight: '50%',
            maxWidth: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={door13}
          alt="door 13"
        />
        <img
          sx={{
            maxHeight: '50%',
            maxWidth: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={pool}
          alt="piscina"
        />
        <img
          sx={{
            maxHeight: '50%',
            maxWidth: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          src={door8}
          alt="door 8"
        />
        <img
          sx={{
            maxHeight: '50%',
            maxWidth: '80%',
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
          display: 'grid',
        }}
      >
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
  );
};

export default ConstructionCards;
