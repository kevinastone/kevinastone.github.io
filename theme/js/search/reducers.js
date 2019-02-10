import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const queryReducer = handleActions(
  {
    SET_QUERY: (state, action) => (action ? action.payload : state),
  },
  '',
);

const resultsReducer = handleActions(
  {
    SET_RESULTS: (state, action) => (action ? action.payload : state),
  },
  [],
);

const selectionReducer = handleActions(
  {
    SET_RESULTS: (state, action) => {
      const max = action ? Math.max(action.payload.length - 1, 0) : 0;

      return {
        ...state,
        max,
        current: Math.min(state.current, max),
      };
    },
    PREVIOUS_SELECTION: state => ({
      ...state,
      current: Math.max(state.current - 1, 0),
    }),
    NEXT_SELECTION: state => ({
      ...state,
      current: Math.min(state.current + 1, state.max),
    }),
  },
  {
    current: 0,
    max: 0,
  },
);

export default combineReducers({
  query: queryReducer,
  results: resultsReducer,
  selection: selectionReducer,
});
