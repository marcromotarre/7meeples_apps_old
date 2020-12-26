/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/nav';

import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="main-class"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'blue',
          alignItems: 'stretch',
          width: '100%',
          height: '100vh',
          position: 'fixed',
        }}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
