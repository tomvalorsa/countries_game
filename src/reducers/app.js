// having gameStarted/gameFinished will allow for different states when a game is not being played (i.e. before vs after)
const initialState = {
  gameStarted: false,
  gameFinished: false,
  guess: '',
  correct: [],
  duration: null, // only update with final value
  forfeit: false,
  scoreModalOpen: false,
  aboutModalOpen: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        gameStarted: true
      }
    case 'END_GAME':
      return {
        ...state,
        gameFinished: true,
        gameStarted: false
      }
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload
      }
    case 'RESET_GUESS':
      return {
        ...state,
        guess: ''
      }
    case 'ADD_CORRECT_GUESS':
      let correctGuess = action.payload
      return {
        ...state,
        correct: [...state.correct, correctGuess]
      }
    case 'SET_FORFEIT':
      return {
        ...state,
        forfeit: true
      }
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload
      }
    case 'TOGGLE_ABOUT_MODAL':
      return {
        ...state,
        aboutModalOpen: !state.aboutModalOpen
      }
    case 'TOGGLE_SCORE_MODAL':
      return {
        ...state,
        scoreModalOpen: !state.scoreModalOpen
      }
    default:
      return state
  }
}