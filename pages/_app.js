import "@/styles/globals.css";
import { Noto_Sans_Hebrew } from "@next/font/google";

import { Layout } from "@/layouts";

const noto = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={noto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
