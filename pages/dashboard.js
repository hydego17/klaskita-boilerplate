import getConfig from "next/config"
import styled from "@emotion/styled"

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Hi, welcome to klaskita dashboard</p>
    </div>
  )
}

const { publicRunTimeConfig } = getConfig()

export async function getServerSideProps() {
  return {
    props: {},
  }
}
