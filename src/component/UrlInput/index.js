import styled from "styled-components";

const Input = styled.input`
  background-color: #FFF;
  width: 100%;
  font-size: 18px;
  padding: 12px 24px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #2281C2;

  &:focus {
    outline: none;
  }
`

const UrlInput = (props) => {
  return (
    <div>
      <Input value={props.url} onChange={e => props.setUrl(e.target.value)} required={true} placeholder="Enter link here" />
    </div>
  )
}

export default UrlInput;