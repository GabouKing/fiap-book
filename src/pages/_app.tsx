import { AppProps } from 'next/app';
import '../app/globals.css';

function Pages({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Pages;
