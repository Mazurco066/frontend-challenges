// Dependencies
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Components
import Button from '../Button'

// Component
export default function Rules({ onPress }) {

  // JSX
  return (
    <S.Wrapper>
      <Button text="RULES" onClick={onPress} />
    </S.Wrapper>
  )
}

// PropTypes
Rules.propTypes = {
  onPress: PropTypes.func
}

Rules.defaultProps = {
  onPress: () => {}
}