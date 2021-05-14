// Dependencies
import PropTypes from 'prop-types'
import { createContext, useEffect, useReducer } from 'react'

// Utils
const SCORE_KEY = '@next:ScorePoints'

// Game initial state
const initialState = {
  score: 0
}

// Reducer
function reducer(state, action) {
  
  // Verify action
  switch (action.type) {
    case 'RESET_SCORE':
      if (window !== undefined) {
        window.localStorage.setItem(SCORE_KEY, (0).toString())
      }
      return { score: 0 }
    case 'UPDATE_SCORE':
      if (window !== undefined) {
        window.localStorage.setItem(SCORE_KEY, (state.score + 1 ).toString())
      }
      return { score: (state.score + 1 ) }
    case 'LOAD_STORED':
      const storedScore = window.localStorage.getItem(SCORE_KEY) !== null
        ? parseInt(window.localStorage.getItem(SCORE_KEY))
        : 0
      return { score: storedScore }
    default:
      return state
  }
}

// Context
export const GameContext = createContext()

// Provider
export default function GameProvider({ children }) {

  // Reducers
  const [state, dispatch] = useReducer(reducer, initialState)

  // Effects
  useEffect(() => {
    dispatch({
      type: 'LOAD_STORED',
      payload: {}
    })
  }, [])

  // Provides
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

// Prop Types
GameProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}