import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          <meta
            name="description"
            content="Hi. I'm Fatih. I'm a front end developer based in İzmir, Turkey."
          />
          <meta property="og:url" content="https://fatihcan.dev" />
          <meta property="og:title" content="Fatih Can | Front End Developer" />
          <meta
            property="og:description"
            content="Hi. I'm Fatih. I'm a front end developer based in İzmir, Turkey."
          />
          <meta property="og:image" content="/images/meta-image.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://fatihcan.dev" />
          <meta
            name="twitter:title"
            content="Fatih Can | Front End Developer"
          />
          <meta
            name="twitter:description"
            content="Hi. I'm Fatih. I'm a front end developer based in İzmir, Turkey."
          />
          <meta name="twitter:image" content="/images/meta-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
