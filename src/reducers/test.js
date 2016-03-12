const initialState = {
  loaded: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOADED':
      return {
        loaded: true
      }
    default:
      return state
  }
}