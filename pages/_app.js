import React from 'react'
import '../styles.css'
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
    
      <Component {...pageProps} />
    </Layout>

  )
}

