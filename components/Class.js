import styled from "@emotion/styled"

export default function Class({ program }) {
  const { API_URL } = process.env
  const { name, description, images, date, duration, location, price } = program

  console.log(images)
  return (
    <ClassStyled>
      <h1>{name}</h1>
      <div className="poster">
        <img src={API_URL + images.url} alt="" />
      </div>
      <ul>
        <li> {date} </li>
        <li> {duration} </li>
        <li> {location} </li>
        <li>Rp. {price}</li>
      </ul>
      <div>{description}</div>
    </ClassStyled>
  )
}

const ClassStyled = styled.div`
  .poster {
    width: 200px;
  }
`
