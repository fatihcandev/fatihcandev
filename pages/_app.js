import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

import { globalStyles } from 'styles/globals'

function MyApp({ Component, pageProps }) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Fatih Can | Front End Developer</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://widgets.superpeer.com/widget.css"
        />
      </Head>
      <Script src="https://widgets.superpeer.com/widget.js" />
      <Script id="superpeerWidget">
        {`
              window.addEventListener("load", () => {new Superpeer.Widget({embed:{type:"slide-in"},launcher:{type:"superpeer-logo",options:{}},config:{username:"fatihcandev",serviceSlug:""}})})
            `}
      </Script>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
