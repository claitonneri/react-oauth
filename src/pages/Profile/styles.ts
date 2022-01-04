import styled, { css } from 'styled-components'

import headerBackground from '../../assets/background.png'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    max-width: 960px;
    width: 92%;
    height: 24%;
    
    background: url(${headerBackground}) center;
    background-size: cover;
    border-radius: 36px;
    box-shadow: 2px 2px 2px ${theme.colors.border};
    margin-top: 32px;
    position: fixed;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 6px solid white;
      box-shadow: 2px 2px 2px ${theme.colors.border};
      
      position: absolute;
      bottom: -20%;
      left: 8%;

      @media (max-height: 760px) {
        width: 100px;
        height: 100px;
      }

      @media (max-height: 460px) {
        width: 80px;
        height: 80px;
      }
    }
  `}
`;

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 960px;
    margin-top: 320px;
    margin-bottom: 24px;

    width: 90%;

    background-color: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 1px 1px 2px ${theme.colors.border};
  `}
`;

export const ProfileContent = styled.div`
  margin-bottom: 8px;
`;

export const ProfileTitle = styled.h4``;

export const ProfileInfo = styled.span``;

export const ProfileTokenContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin-top: 32px;
    padding: 24px;
    border-radius: 12px;
    background-color: ${theme.colors.secondary};

    transition: filter 0.4s;

    &:hover {
      filter: brightness(1.1);
    }
  `}
`;

export const ProfileTokenTitle = styled.h4``;

export const ProfileTokenInfo = styled.span`
  word-wrap: break-word;
  text-align: center;
`;


