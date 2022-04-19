import MainLayout from "../components/MainLayout";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8M0MV4GMY6"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8M0MV4GMY6');
 `}
        </Script>
        <Component {...pageProps} />
      </MainLayout>
      {/* adsterra social bar ad */}
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="//stickervillain.com/de/c6/ae/dec6ae1c3ec3d938847634afdffebc5f.js"
      ></Script>
    </>
  );
}

export default App;
