import Head from 'next/head'

import { globalStyles } from 'styles/globals'

function MyApp({ Component, pageProps }) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Fatih Can | Front End Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
