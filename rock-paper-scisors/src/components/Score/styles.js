// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 3rem;
`

export const ScoreBoard = styled.div`
  border: 3px solid #fdfdfd50;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 700px;
  margin: 0 auto 0;
`

export const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-height: 96px;

  @media(max-width: 576px) {
    max-height: 64px;
  }
`

export const Logo = styled.img`
  max-height: 96px;
  object-fit: contain;
  object-position: left;

  @media(max-width: 576px) {
    max-height: 64px;
  }
`

export const Title = styled.h3`
  color: var(--primary);
  text-transform: uppercase;
  font-weight: bold;

  @media(max-width: 576px) {
    font-size: 1rem;
  }
`

export const Points = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  border-radius: 16px;
  height: 96px;
  width: 25%;

  @media(max-width: 576px) {
    height: 64px;

    span {
      font-size: 2rem!important;
      line-height: 2rem!important;
    }
  }

  span {
    display: block;
    color: var(--darker);
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`