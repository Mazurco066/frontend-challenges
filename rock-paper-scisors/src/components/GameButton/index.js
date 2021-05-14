// Dependencies
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Component
export default function GameButton({ onPress, imgPath, color }) {

  // JSX
  return (
    <S.Wrapper color={color} onClick={onPress}>
      <S.Icon src={imgPath} alt="Choice" />
    </S.Wrapper>
  )
}

// Prop Types
GameButton.defaultProps = {
  imgPath: '',
  color: '',
  onPress: () => {}
}

GameButton.propTypes = {
  imgPath: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func
}