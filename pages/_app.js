import App from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/shared/Layout';

const theme = {
  colors: {
    primary: 'hsl(216, 100%, 69%)',
  },
  padding: {
    sections: '2rem',
  },
  borderRadius: '0.3rem',
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    );
  }
}
