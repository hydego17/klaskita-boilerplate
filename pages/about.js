import { NextSeo } from "next-seo"

export default function About() {
  const SEO = {
    title: "About",
    description: "Tentang klaskita....",

    openGraph: {
      title: "About",
      description: "Tentang klaskita....",
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <h1>About us</h1>
      </div>
    </>
  )
}
