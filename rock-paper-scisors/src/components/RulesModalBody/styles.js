// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  @media(max-width: 576px) {
    height: 80%;
    display: flex;
    align-items: center;
  }
`

export const Rules = styled.img`
  object-position: center;
  object-fit: contain;
`