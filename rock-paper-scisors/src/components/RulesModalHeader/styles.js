// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const Title = styled.p`
  font-size: 2rem;
  color: var(--darker);
  text-transform: uppercase;
  font-weight: bold;
`

export const IconWrapper = styled.div`
  flex: 0 0 auto;

  svg {
    font-size: 2rem;
    color: var(--gray);
  }

  &:hover {
    cursor: pointer;

    svg {
      color: var(--primary);
    }
  }
`