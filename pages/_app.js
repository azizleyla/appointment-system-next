import LoginLayout from "@/components/layout/LoginLayout";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: open_Sans.style.fontFamily
  }
})

export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && router.pathname === '/') {
      router.push('/login');
    }
    if (isLoggedIn && router.pathname === '/login') {
      router.push('/');
    }
  }, [isLoggedIn, router.pathname]);

  return isLoggedIn ? (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  ) : (
    <LoginLayout>
      <Component {...pageProps} />
    </LoginLayout>
  );


}
