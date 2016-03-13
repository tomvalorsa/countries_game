import topojson from 'topojson'

const initialState = {
  data: [],
  loading: false,
  loaded: false,
  remainingCountries: null // array of country names
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
      let remainingCountries = feature.features.map(d => d.properties.name)
      return {
        ...state,
        loaded: true,
        data: feature,
        remainingCountries
      }
    case 'UPDATE_REMAINING_COUNTRIES':
      let guess = action.payload
      let remaining = state.remainingCountries
      let index = remaining.indexOf(guess)
      let leftOver = remaining.slice(0, index).concat(remaining.slice(index + 1))
      return {
        ...state,
        remainingCountries: leftOver
      }
    default:
      return state
  }
}