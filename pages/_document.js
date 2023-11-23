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
          <script
            async
            id="roistat-script"
            dangerouslySetInnerHTML={{
              __html: `
            (function (w, d, s, h, id) {
        w.roistatProjectId = id;
        w.roistatHost = h;
        var p = d.location.protocol == "https:" ? "https://" : "http://";
        var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie)
          ? "/dist/module.js"
          : "/api/site/1.0/" +
            id +
            "/init?referrer=" +
            encodeURIComponent(d.location.href);
        var js = d.createElement(s);
        js.charset = "UTF-8";
        js.async = 1;
        js.src = p + h + u;
        var js2 = d.getElementsByTagName(s)[0];
        js2.parentNode.insertBefore(js, js2);
      })(
        window,
        document,
        "script",
        "cloud.roistat.com",
        "e39442a8581e616d741b8f0786da960e"
      )
          `,
            }}
            strategy="beforeInteractive"
          ></script>
        </body>
      </Html>
    );
  }
}
