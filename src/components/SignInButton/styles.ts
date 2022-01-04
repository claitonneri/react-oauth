import styled, { css } from 'styled-components'

export const Button = styled.button`
  padding: 16px 26px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #bbbbbb;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.925);
  }
`

export const Icon = styled.img``

export const Divider = styled.div`
  ${({ theme }) => css`
    height: 32px;
    border-right: 1px solid ${theme.colors.border};
    border-radius: 50%;
    margin: 0 12px;
  `}
`