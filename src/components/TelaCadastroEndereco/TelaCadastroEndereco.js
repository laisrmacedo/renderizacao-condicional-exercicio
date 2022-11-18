import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "../TelaCadastro/styled";


function TelaUsuarioCadastrado (props){
    return (
      <FormContainer>
      <h1>Cadastro </h1>
      <h3>Endereço e Contato </h3>
      <Form>
        <StyledLabel htmlFor="endereço">
          Endereço:
          <Input id="endereço" />
        </StyledLabel>
        <StyledLabel htmlFor="numero-residencia">
          Número:
          <Input id="numero-residencia" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3)}>Próximo</SendButton>
        {/* <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton> */}
      </Form>
    </FormContainer>
    )
}

export default TelaUsuarioCadastrado;