import fetch from "isomorphic-unfetch"

import Class from "components/Class"

export default function Program({ programs }) {
  return (
    <div className="container">
      <h1>Available Class</h1>
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
