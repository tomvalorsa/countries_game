const initialState = {
  data: [],
  loading: false,
  loaded: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_COUNTRIES':
      return {
        ...state,
        loading: true
      }
    case 'LOADED_COUNTRIES':
      let worldMap = action.payload
      let feature = topojson.feature(worldMap, worldMap.objects['worldMap'])
      return {
        ...state,
        loaded: true,
        data: feature
      }
    default:
      return state
  }
}