import styled from "styled-components";

const RedContainer = styled.div`
  display: flex;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 16px 32px;
  background-color: #F44236;
  border: none;
  border-radius: 8px;
`

const Message = styled.p`
  color: #FFF;
  font-weight: bolder;
  font-size: 20px;
`

const WarningMessage = (props) => {
  return(
    <RedContainer>
      <Message>
        {props.msg}
      </Message>
    </RedContainer>
  )
}

export default WarningMessage;