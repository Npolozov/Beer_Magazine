import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import Layout from "@/components/Layout";

const theme = createTheme({
  // your theme options here
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
