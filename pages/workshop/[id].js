import getConfig from "next/config"
import fetch from "isomorphic-unfetch"

export default function Program({ program }) {
  const { API_URL } = process.env
  const {
    id,
    name,
    description,
    images,
    date,
    duration,
    location,
    price,
  } = program
  return (
    <div className="container">
      <div className="poster">
        <img src={API_URL + images.url} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(ctx) {
  const { id } = ctx.query

  const res = await fetch(`${publicRuntimeConfig.API_URL}/programs/${id}`)
  const data = await res.json()

  return {
    props: {
      program: data,
    },
  }
}
