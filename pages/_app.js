import Header from "components/Header"
import { ThemeProvider } from "emotion-theming"
import GlobalStyles from "components/GlobalStyles"

const theme = {
  colors: {
    primary: "#222f3e",
    orange: "#ffa502",
    light_gray: "#ced6e0",
    dark_gray: "#a4b0be",
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
