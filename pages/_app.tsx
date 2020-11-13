import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import '../styles/globals.css';

const theme = createMuiTheme({});

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const jssServerSide = document.querySelector('#jss-server-side');

    if (jssServerSide) {
      jssServerSide.parentElement.removeChild(jssServerSide);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Four task</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
