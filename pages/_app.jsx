/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/nav';
import Head from 'next/head';
import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My page title</title>
        <meta
          meta
          name="viewport"
          content="width=device-width, user-scalable=no"
        />
      </Head>
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
