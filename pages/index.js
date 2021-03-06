import styled from "@emotion/styled"

export default function Home() {
  return (
    <HomeStyled>
      <div className="hero">
        <div className="container">
          <h1>We help you learn things you love</h1>
          <p>
            Kelas praktek untuk millenial mengembangkan diri dengan instruktur
            profesional secara cepat dan terjangkau
          </p>
        </div>
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  .hero {
    background: url("images/home.jpg") no-repeat center center/cover;
    width: 100%;
    height: 600px;
    color: white;
    position: relative;
    overflow: hidden;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 600px;
    background: rgba(0, 0, 0, 0.4);
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(20%);
    position: relative;
    z-index: 1;
  }
`
