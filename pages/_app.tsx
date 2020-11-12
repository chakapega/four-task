import { AppProps } from 'next/dist/next-server/lib/router/router';

import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
