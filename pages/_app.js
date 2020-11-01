import Header from "components/Header"
import { ThemeProvider } from "emotion-theming"
import GlobalStyles from "components/GlobalStyles"

const theme = {
  colors: {
    primary: "#222f3e",
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
