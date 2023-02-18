import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AppThemeProvider } from 'contexts/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}

export default MyApp;
