// having gameStarted/gameFinished will allow for different states when a game is not being played (i.e. before vs after)
const initialState = {
  aboutModalOpen: false,
  gameStarted: false,
  gameFinished: false
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
        gameFinished: true
        gameStarted: false
      }
    case 'TOGGLE_ABOUT_MODAL':
      return {
        ...state,
        aboutModalOpen: !state.aboutModalOpen
      }
    default:
      return state
  }
}