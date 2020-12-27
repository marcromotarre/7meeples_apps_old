/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/nav';

import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <div
        className="main-class"
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
