import getConfig from "next/config"
import styled from "@emotion/styled"
import fetch from "isomorphic-unfetch"
import { NextSeo } from "next-seo"
import Link from "next/link"

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
        <ProgramStyled>
          <div className="body">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{date}</p>
            <p>{duration}</p>
            <p>{location}</p>
            <p> Rp {price},-</p>

            <Link href="/registerClass">
              <button>Daftar</button>
            </Link>
          </div>

          <div className="poster">
            <img src={API_URL + images.url} alt={name} />
          </div>
        </ProgramStyled>
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

const ProgramStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 1rem;

  .poster {
    border-radius: 5px;
    flex: 1;
    display: flex;
    align-items: center;
    height: 300px;
    overflow: hidden;
  }

  .body {
    flex: 2;
  }
`
