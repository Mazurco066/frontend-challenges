// Dependencies
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Components
import { MdClose } from 'react-icons/md'

// Component
export default function RulesModalHeader({ onBackPress, title }) {

  // JSX
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.IconWrapper onClick={onBackPress}>
          <MdClose />
        </S.IconWrapper>
      </S.Wrapper>
    </>
  )
}

// Prop Types
RulesModalHeader.defaultProps = {
  onBackPress: () => {},
  title: 'Title'
}

RulesModalHeader.propTypes = {
  onBackPress: PropTypes.func,
  title: PropTypes.string
}