export const toggleAboutModal = () => (dispatch, getState) => {
  dispatch('TOGGLE_ABOUT_MODAL')
}

export const startGame = () => (dispatch, getState) => {
  dispatch({type: 'START_GAME'})
}

export const endGame = () => (dispatch, getState) => {
  dispatch({type: 'END_GAME'})
}