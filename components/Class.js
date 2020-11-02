import Link from "next/link"
import styled from "@emotion/styled"

export default function Class({ program }) {
  const { API_URL } = process.env
  const { name, description, images, date, duration, location, price } = program

  return (
    <ClassStyled>
      <div className="poster">
        <img src={API_URL + images.url} alt={name} />
      </div>
      <div className="body">
        <h1>{name}</h1>
        <p>Tanggal: {date} </p>
        <p>Durasi: {duration} </p>
        <p>Lokasi: {location} </p>

        <Link href="#">
          <button>Lihat Kelas</button>
        </Link>
      </div>
    </ClassStyled>
  )
}

const ClassStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
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
