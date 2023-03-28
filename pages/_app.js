import React from 'react';
import Head from 'next/head';
import ZestyHead from 'components/zesty/ZestyHead';
import ZestyStyleVariables from 'components/ZestyStyleVariables';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* logic to run zesty head if it detects zesty meta data patterns in props, else load alternate head for you to edit */}
      {(pageProps?.meta?.web && <ZestyHead content={pageProps} />) || (
        <Head>
          <meta charSet="utf-8" />
          <title>Zesty.io Next.js Marketing Technology Example Starter</title>
        </Head>
      )}
      <ThemeProvider theme={ZestyStyleVariables()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
