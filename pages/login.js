import { useState } from "react"
import styled from "@emotion/styled"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <LoginStyled>
      <div className="some-images">
        <img
          src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="test-login"
        />
      </div>

      <div className="form-login">
        <h1>Login</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <label htmlFor="email">Email</label>
          <input type="email" onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Masuk</button>
        </form>
      </div>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  padding-top: 5rem;

  .some-images {
    flex: 1;
  }
  .form-login {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: block;
      margin: 0 auto;
    }

    button {
      width: 100%;
      margin: 1rem 0;
    }
  }
`
