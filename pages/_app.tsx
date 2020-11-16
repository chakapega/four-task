import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import '../styles/globals.css';

const theme = createMuiTheme({});

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
