// Dependencies
import styled from 'styled-components'

// Styles
export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  border: 1px solid var(--white);
  background-color: transparent;
  color: var(--white);
  &:hover {
    color: var(--primary);
    background-color: var(--white);
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: 0.75;
  }
`