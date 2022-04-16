import MainLayout from "../components/MainLayout";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App;
