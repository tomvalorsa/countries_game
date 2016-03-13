import d3 from 'd3'
import path from '../data/topo_worldMap.json'

export const loadCountries = () => (dispatch, getState) => {
  let { loading, loaded } = getState().countries

  if (!loading && !loaded) {
    dispatch({
      type: 'LOADING_COUNTRIES'
    })

    d3.json(path, data => {
      dispatch({
        type: 'LOADED_COUNTRIES',
        payload: data
      })
    })
  }
}

export const updateRemainingCountries = (guess) => (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_REMAINING_COUNTRIES',
    payload: guess
  })
}