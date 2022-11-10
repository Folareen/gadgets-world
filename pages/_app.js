import Layout from "../components/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/signika";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#005792" },
      secondary: { main: "#00BBF0" },
      danger: { main: "#E33E5A" },
      warning: { main: "#FFD739" },
      dark: { main: "#00204A" },
      logo: { main: "#FFB423" },
      light: { main: "#BAE8E8", light: "#E3F6F5" },
      white: { main: "EFFBFF" },
    },
    typography: {
      fontFamily: "Signika",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
