import { AppProps } from "next/app"; // Import the AppProps type

import "../style/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
