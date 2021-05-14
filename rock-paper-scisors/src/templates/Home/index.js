// Dependencies
import { useState } from 'react'
import { useGame } from 'hooks'

// Styles
import { Container } from 'styles/global'

// Components
import { CustomModal } from 'styles/global'
import { 
  GameBoard,
  Results,
  Rules,
  RulesModalBody,
  RulesModalHeader,
  Score
} from 'components'

// Component
export default function HomeTemplate() {

  // Hooks
  const { state: { score } } = useGame()
  const [ isOpen, setModalState ] = useState(false)
  const [ choice, setChoice ] = useState(null)

  // Jsx
  return (
    <>
      <Container style={{ minHeight: '100%', height: '100%' }}>
        <Score score={score} />
        {!choice ? (
          <GameBoard onPlayerSelect={(choice) => setChoice(choice)} />
        ) : (
          <Results choice={choice} onReset={() => setChoice(null)} />
        ) }
        <Rules onPress={() => setModalState(true)} />
      </Container>
      <CustomModal
        onEscapeKeydown={() => setModalState(false)}
        onBackgroundClick={() => setModalState(false)}
        isOpen={isOpen}
      >
        <RulesModalHeader
          title="Rules"
          onBackPress={() => setModalState(false)}
        />
        <RulesModalBody />
      </CustomModal>
    </>
  )
}