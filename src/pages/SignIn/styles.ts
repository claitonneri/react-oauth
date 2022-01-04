import styled, { css, keyframes } from 'styled-components'

import signInBackgroundImg from '../../assets/sign-in-background.png';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 500px;
    margin-top: 10%;

    animation: ${appearFromLeft} 1s;

    a {
      display: flex;
      align-items: center;

      color: ${theme.colors.primary};
      margin-top: 42%;
      text-decoration: none;
      transition: color 0.2s;

      svg {
        margin-right: 6px;
      }
    }
  `}
`

export const Title = styled.h3`
  text-align: center;
  margin: 56px 0 32px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`