import { Html, Head, Main, NextScript } from "next/document";
import {
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <title>Doctor Appointment Booking  System</title>
        <meta name="description" content="A short description of your page's content" />
        <meta property="og:title" content="Make appointment" />
        <meta property="og:description" content="A detailed description of your page's content" />
        <meta property="og:image" content="https://example.com/thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};