import {createAction} from 'redux-actions';

export const setResults = createAction('SET_RESULTS');
export const nextSelection = createAction('NEXT_SELECTION');
export const previousSelection = createAction('PREVIOUS_SELECTION');

export function activateSelection() {
  return function(dispatch, getState) {
    const {selection, results} = getState();

    if (!results[selection.current]) {
      return;
    }

    window.location.assign(results[selection.current].fields.url);
  };
}

export function setQuery(api, query) {
  return function(dispatch) {
    dispatch(createAction('SET_QUERY')(query));

    api.search(query).then(results => dispatch(setResults(results)));
  };
}
