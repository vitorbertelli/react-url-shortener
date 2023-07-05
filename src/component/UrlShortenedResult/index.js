import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 16px 32px;
  background-color: #FFF;
  border: 1px solid #02AF63;
  border-radius: 8px;
`

const Link = styled.a`
  text-decoration: none;
  color: #2281C2;
  font-weight: bolder;
  font-size: 20px;

  &:hover {
    color: #2C96DF;
  }
`

const UrlShortenedResult = (props) => {

  console.log(props.shortUrl)

  return (
    props.shortUrl ? 
      <Container>
        <Link href={props.shortUrl} target="_blank">{props.shortUrl}</Link>
      </Container>
    : ''
  )
}

export default UrlShortenedResult;