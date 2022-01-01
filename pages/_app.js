import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import { globalStyles } from 'styles/globals'

function MyApp({ Component, pageProps }) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Fatih Can | Front End Developer</title>
      </Head>
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
