import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        html,
        body {
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          width: 100%;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0.5rem 1rem;
        }
      `}
    />
  </>
)

export default GlobalStyles
