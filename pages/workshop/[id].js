import getConfig from "next/config"
import fetch from "isomorphic-unfetch"
import { NextSeo } from "next-seo"

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

  const SEO = {
    title: `Workshop | ${name}`,
    description: `klas yang tersedia (${name})`,

    openGraph: {
      title: `Workshop | ${name}`,
      description: `klas yang tersedia (${name})`,
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{date}</p>
        <p>{duration}</p>
        <p>{location}</p>
        <p> Rp {price},-</p>

        <div className="poster">
          <img src={API_URL + images.url} alt={name} />
        </div>
      </div>
    </>
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
