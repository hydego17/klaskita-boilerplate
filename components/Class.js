import Link from "next/link"
import styled from "@emotion/styled"

export default function Class({ program }) {
  const { API_URL } = process.env
  const { name, description, images, date, duration, location, price } = program

  return (
    <ClassStyled>
      <div className="poster">
        <img src={API_URL + images.url} alt="" />
      </div>
      <div className="body">
        <h2>{name}</h2>
        <h3> {date} </h3>
        <p> {duration} </p>
        <p> {location} </p>
        <Link href="#">
          <a>Lihat Kelas</a>
        </Link>
      </div>
    </ClassStyled>
  )
}

const ClassStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 1rem;

  .poster {
    max-width: 500px;
    height: 300px;
    overflow: hidden;
  }

  .body {
  }
`
