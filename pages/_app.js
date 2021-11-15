import Head from 'next/head'

import { useStore } from 'hooks'
import { globalStyles } from 'styles/globals'
import { darkTheme } from 'stitches.config'

function MyApp({ Component, pageProps }) {
  globalStyles()
  const theme = useStore(state => state.theme)
  return (
    <>
      <Head>
        <title>Fatih Can | Front End Developer</title>
      </Head>
      <div className={theme === 'dark' ? darkTheme : ''}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
