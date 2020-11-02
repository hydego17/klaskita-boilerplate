import styled from "@emotion/styled"
import fetch from "isomorphic-unfetch"

import Class from "components/Class"

export default function Program({ programs }) {
  return (
    <div className="container">
      <WorkshopStyled>
        <h1>Our Program</h1>
        <ul>
          <li>F & B</li>
          <li>Woodworking</li>
          <li>Texttile</li>
          <li>Kriya</li>
          <li>Besi</li>
        </ul>
        <h1>Available Class</h1>
      </WorkshopStyled>

      {programs.map((program) => (
        <Class key={program.id} program={program} />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/programs`)
  const data = await res.json()

  return {
    props: {
      programs: data,
    },
  }
}

const WorkshopStyled = styled.div`
  text-align: center;

  li {
    display: inline-block;
    padding: 0.75rem;
  }
`
