// Dependencies
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Component
export default function Score({ score }) {

  // JSX
  return (
    <S.Wrapper>
      <S.ScoreBoard>
        <S.Info>
          <S.Logo
            src="/img/logo.svg"
            alt="Rock, paper and scisors logo"
          />
        </S.Info>
        <S.Points>
          <S.Title>Score</S.Title>
          <span>{score}</span>
        </S.Points>
      </S.ScoreBoard>
    </S.Wrapper>
  )
}

// Prop Types
Score.propTypes = {
  score: PropTypes.number
}

Score.defaultProps = {
  score: 0
}