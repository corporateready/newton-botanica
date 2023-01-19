import Document, { Html, Head, Main, NextScript, Script } from "next/document";

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();

    return { html, head, errorHtml, chunks };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-203040095-1"
          ></script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KRLSSZN"
              height="0"
              width="0"
              styles="display:none;visibility:hidden"
            ></iframe>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}
