// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  background-color: var(--white);
  width: 150px;
  height: 150px;
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 16px solid ${({ color }) => color};
  margin-right: 6rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    border-color: var(--darker);

    box-shadow:
    0 0 0 8px #fdfdfd40,
    0 0 0 16px #fdfdfd30,
    0 0 0 24px #fdfdfd20,
    0 0 0 32px #fdfdfd10;
  }

  @media(max-width: 576px) {
    width: 100px;
    height: 100px;
  }

  transition: all 0.3s;
`

export const Icon = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;

  @media(max-width: 576px) {
    width: 36px;
    height: 36px;
  }
`