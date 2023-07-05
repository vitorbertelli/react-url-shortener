import styled from "styled-components";

const Button = styled.button`
  background-color: #2281C2;
  padding: 13px 36px;
  margin: 0 0 0 4px;
  border-radius: 8px;
  border: none;
  font-weight: bolder;
  font-size: 18px;
  color: #FFF;
  cursor: pointer;

  &:hover {
    background-color: #2C96DF;
  }
`

const SubmitButton = (props) => {
  return (
    <Button>
      {props.children}
    </Button>
  )
}

export default SubmitButton;