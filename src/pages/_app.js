import Layout from "@/components/Layout";
import '../styles/globals.css';

// import RecepieDetails from "./blogs/[slug]";

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}