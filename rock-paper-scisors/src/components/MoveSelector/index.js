// Dependencies
import PropTypes from 'prop-types'
import { COLORS } from 'helpers'

// Styles
import * as S from './styles'

// Components
import GameButton from '../GameButton'

// Component
export default function MoveSelector({ onPlayerSelect }) {

  // JSX
  return (
    <S.Wrapper>
      <S.Board>
        <S.BoardRow mt="0">
          <GameButton
            onPress={() => onPlayerSelect('paper', COLORS['paper'])}
            color={COLORS['paper']}
            imgPath="/img/icon-paper.svg"
          />
          <GameButton
            onPress={() => onPlayerSelect('scissors', COLORS['scissors'])}
            color={COLORS['scissors']}
            imgPath="/img/icon-scissors.svg"
          />
        </S.BoardRow>
        <S.BoardRow mt="3">
          <GameButton
            onPress={() => onPlayerSelect('rock', COLORS['rock'])}
            color={COLORS['rock']}
            imgPath="/img/icon-rock.svg"
          />
        </S.BoardRow>
      </S.Board>
    </S.Wrapper>
  )
}

// Prop Types
MoveSelector.defaultProps = {
  onPlayerSelect: () => {}
}

MoveSelector.propTypes = {
  onPlayerSelect: PropTypes.func  
}