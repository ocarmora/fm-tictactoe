import { Outfit } from "next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const outfit = Outfit({ subsets: [], weight: ["600"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
