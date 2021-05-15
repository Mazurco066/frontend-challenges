// Dependencies
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { COLORS } from 'helpers'
import { useGame, useWindowDimensions} from 'hooks'

// Styles
import * as S from './styles'

// Components
import { Loading } from 'components'

// Component
export default function Results({ choice, onReset }) {

  // Hooks
  const { dispatch } = useGame()
  const { width } = useWindowDimensions()
  const [ computerChoice, setComputerChoice ] = useState(null)
  const [ win, setWin ] = useState(null)

  // Effects
  useEffect(() => {
    setTimeout(() => {
      const possibleChoices = ['rock', 'paper', 'scissors']
      const result = possibleChoices[Math.floor(Math.random()*3)]

      if (choice === result) {
        setWin(null)
      }
      else if (
        (choice === 'rock' && result !== 'paper') ||
        (choice === 'paper' && result !== 'scissors') ||
        (choice === 'scissors' && result !== 'rock')
      ) {
        setWin(true)
        dispatch({
          type: 'UPDATE_SCORE',
          payload: {}
        })
      } else {
        setWin(false)
        dispatch({
          type: 'RESET_SCORE',
          payload: {}
        })
      }

      setComputerChoice(result)
    }, 1000)
  }, [choice, dispatch])
  
  // JSX
  return (
    <S.Wrapper>
      <S.DisplayResults>
        <S.Display>
          <S.Label>You picked</S.Label>
          <S.Choice winner={win === true} color={COLORS[choice]}>
            <S.Icon src={`/img/icon-${choice}.svg`} alt="choice" />
          </S.Choice>
        </S.Display>
        { width >= 576 && (
          <S.Winner>
            {computerChoice && (
              <>
                <S.BigLabel>{win === null ? 'Match' : win ? 'You win' : 'You lose'  }</S.BigLabel>
                <S.Button type="button" onClick={onReset}>Play Again</S.Button>
              </>
            )}
          </S.Winner>
        ) }
        <S.Display>
          <S.Label>The house picked</S.Label>
          <S.Choice winner={win === false} color={COLORS[computerChoice]}>
            {computerChoice ? (
              <S.Icon src={`/img/icon-${computerChoice}.svg`} alt="choice" />
            ) : (
              <Loading />
            )}
          </S.Choice>
        </S.Display>
      </S.DisplayResults>
      { width < 576 && (
        <S.Winner>
          {computerChoice && (
            <>
              <S.BigLabel>{win === null ? 'Match' : win ? 'You win' : 'You lose'  }</S.BigLabel>
              <S.Button type="button" onClick={onReset}>Play Again</S.Button>
            </>
          )}
        </S.Winner>
      ) }
    </S.Wrapper>
  )
}

// Prop Types
Results.propTypes = {
  choice: PropTypes.string,
  onReset: PropTypes.func
}

Results.defaultProps = {
  choice: '',
  onReset: () => {}
}