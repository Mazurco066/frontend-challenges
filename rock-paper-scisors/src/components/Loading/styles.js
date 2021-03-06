// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div``

export const Line = styled.div`
  @keyframes loadingC {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }


  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: var(--primary);

  &:nth-last-child(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
  }

  &:nth-last-child(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
  }

  &:nth-last-child(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
  }
`