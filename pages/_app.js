import fetch from "isomorphic-unfetch"
import { ThemeProvider } from "emotion-theming"

import Header from "components/Header"
import GlobalStyles from "components/GlobalStyles"
import ContextWrapper from "components/ContextWrapper"

import SEO from "../next-seo.config"
import { DefaultSeo } from "next-seo"
import getConfig from "next/config"

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
      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ContextWrapper navs={navs}>
          <Header />
        </ContextWrapper>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

// SSR only works in pages so we'll be using getInitalProps
MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navs = await res.json()

  return { navs }
}

export default MyApp
