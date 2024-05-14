import Header from '../components/shared/Header/Header';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css';
import Footer from '@/components/shared/Footer/Footer';

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
<<<<<<< HEAD
      <Component {...pageProps} />
      <Footer />
=======
      <Component {...pageProps}/>
>>>>>>> 42f021af8e53afd2bf3378c1b1e543c56fabde12
    </ThemeProvider>
  );
}
 
export default MyApp;