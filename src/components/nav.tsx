/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

const Nav = () => (
  <nav
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%',
      width: '100%',
    }}
  >
    <img
      sx={{
        height: '80%',
      }}
      src={logoRed}
      alt="logo"
    />
    <img
      sx={{
        height: '60%',
      }}
      src={siguenosEnInstagram}
      alt="siguenos en instagram"
    />
  </nav>
);

export default Nav;
