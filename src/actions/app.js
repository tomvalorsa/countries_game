export const toggleAboutModal = () => (dispatch, getState) => {
  dispatch('TOGGLE_ABOUT_MODAL')
}

export const toggleScoreModal = () => (dispatch, getState) => {
  dispatch('TOGGLE_SCORE_MODAL')
}

export const startGame = () => (dispatch, getState) => {
  dispatch({type: 'START_GAME'})
}

export const endGame = () => (dispatch, getState) => {
  dispatch({type: 'END_GAME'})
}

export const setGuess = (guess) => (dispatch, getState) => {
  dispatch({
    type: 'SET_GUESS',
    payload: guess
  })
}

export const resetGuess = () => (dispatch, getState) => {
  dispatch({type: 'RESET_GUESS'})
}

export const addCorrectGuess = (correctGuess) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_CORRECT_GUESS',
    payload: correctGuess
  })
}

export const setForfeit = () => (dispatch, getState) => {
  dispatch({type: 'SET_FORFEIT'})
}

export const setDuration = (duration) => (dispatch, getState) => {
  dispatch({
    type: 'SET_DURATION',
    payload: duration
  })
}