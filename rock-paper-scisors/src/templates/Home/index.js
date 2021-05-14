// Dependencies
import { useState } from 'react'

// Styles
import { Container } from 'styles/global'

// Components
import { CustomModal } from 'styles/global'
import { 
  GameBoard,
  Rules,
  RulesModalBody,
  RulesModalHeader,
  Score
} from 'components'

// Component
export default function HomeTemplate() {

  // Hooks
  const [ isOpen, setModalState ] = useState(false)

  // Jsx
  return (
    <>
      <Container style={{ minHeight: '100%', height: '100%' }}>
        <Score score={12} />
        <GameBoard />
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