/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

import pool from '../../assets/svg/welcometo/pool-manufacturer.svg';
import surveyor from '../../assets/svg/welcometo/surveyor.svg';
import temp from '../../assets/svg/welcometo/temp-agency.svg';

const NextEffects = () => {
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
  );
};

export default NextEffects;
