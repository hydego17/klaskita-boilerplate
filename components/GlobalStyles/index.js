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

        ul {
          list-style: none;
        }

        img {
          width: 100%;
        }

        form {
          margin: 0 2rem;
          display: flex;
          flex: 1;
        }
        input {
          border-radius: 5px;
          border: 1px solid gray;
          outline: none;
          width: 100%;
          padding: 0.45rem;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0.5rem 1rem;
          padding-top: 5rem;
        }
      `}
    />
  </>
)

export default GlobalStyles
