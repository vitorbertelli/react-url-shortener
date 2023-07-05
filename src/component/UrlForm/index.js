import UrlInput from "../UrlInput";
import SubmitButton from "../SubmitButton";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 80%;
  background-color: #FFF;
  border-radius: 8px;
  padding: 36px 64px;
`

const UrlForm = (props) => {
  return (
    <Section>
      <Form onSubmit={props.checkUrl}>
        <UrlInput url={props.url} setUrl={props.setUrl} />
        <SubmitButton>
          Shorten URL
        </SubmitButton>
      </Form>
    </Section>
  );
}

export default UrlForm;