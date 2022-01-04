import React from 'react'
import { FiHelpCircle } from 'react-icons/fi'


import SignInButton from '../../components/SignInButton'

import { Guararapes } from '../../assets'

import { Container, Content, Title, Background } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Guararapes />
        <Title>Faça login com <br /> suas credencias de domínio</Title>

        <SignInButton />

        <a href="mailto:suporte@guararapes.com.br">
          <FiHelpCircle />
          Algum problema? Clique aqui!
        </a>
      </Content>

      <Background />
    </Container>
  );
}

export default SignIn;