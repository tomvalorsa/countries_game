export const load = () => (dispatch, getState) => {
  let { loaded } = getState().test

  if (!loaded) {
    dispatch({
      type: 'LOADED'
    })
  }
}