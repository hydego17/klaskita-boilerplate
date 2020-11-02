import Header from "components/Header"

import { ThemeProvider } from "emotion-theming"
import GlobalStyles from "components/GlobalStyles"

import getConfig from "next/config"
import fetch from "isomorphic-unfetch"

const theme = {
  colors: {
    primary: "#222f3e",
    orange: "#ffa502",
    light_gray: "#ced6e0",
    dark_gray: "#a4b0be",
  },
}

function MyApp({ Component, pageProps, navs }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navs={navs} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// SSR only works in pages so we'll be using getInitalProps
const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navs = await res.json()

  return { navs }
}

export default MyApp
