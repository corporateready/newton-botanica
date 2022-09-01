import Document, {Html, Head, Main, NextScript } from 'next/document';

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
          {/* <script src='../helper/trecker.js'></script> */}
          <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}