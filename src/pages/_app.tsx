import Header from '../components/shared/Header/Header';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css';

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;