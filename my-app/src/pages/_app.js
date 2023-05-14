import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { AppContainer } from "react-hot-loader";
import { hot } from "react-hot-loader/root";

const theme = createTheme({
  // your theme options here
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Head>
      <title>Beer Magazine</title>
      <meta name="description" content="This is a description of my page" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default hot(MyApp);
