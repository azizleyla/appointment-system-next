import Layout from "@/components/layout";
import "../components/sidebar/style.module.css";
import "../pages/doctors/add-doctor/style.module.css"

import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
