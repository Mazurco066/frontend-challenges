// Dependencies
import { useContext } from 'react'
import { GameContext } from 'providers'

// Hook
export default function useGame() {
  return useContext(GameContext)
}