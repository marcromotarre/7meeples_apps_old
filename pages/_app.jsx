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
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: '150px auto',
          backgroundColor: 'red',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
