import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const GoogleAnalytics = (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TTX2TFVTCS"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-TTX2TFVTCS');
        `,
        }}
      />
    </>
  );

  return (
    <Html>
      <Head>{GoogleAnalytics}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
