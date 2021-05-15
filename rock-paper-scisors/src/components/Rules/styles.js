// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 128px;

  @media(max-width: 576px) {
    left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`