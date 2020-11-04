import { Global, css } from "@emotion/core"

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
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
          object-fit: cover;
          width: 100%;
        }

        form {
          margin: 0 2rem;
          display: flex;
          flex: 1;

          input {
            font-size: 0.9rem;
            border-radius: 5px;
            border: 1px solid gray;
            outline: none;
            width: 100%;
            padding: 0.5rem;
          }

          button {
            padding: 0.5rem;
            cursor: pointer;
          }
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
