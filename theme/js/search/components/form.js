import React from 'react';
import {connect} from 'react-redux';

import {
  setQuery as baseSetQuery,
  activateSelection,
  nextSelection,
  previousSelection,
} from '../actions';

import Input from './input';
import Results from './results';

function curry(fn, ...args) {
  return (...nArgs) => fn.apply(this, [...args, ...nArgs]);
}

function SearchForm({dispatch, query, results, api, selection}) {
  const setQuery = curry(baseSetQuery, api);

  const onSubmit = event => {
    event.preventDefault();
    return false;
  };

  const onKeyUp = event => {
    switch (event.which) {
      case 13:
        event.preventDefault();
        dispatch(activateSelection());
        break;
      case 38:
        event.preventDefault();
        dispatch(previousSelection());
        break;
      case 40:
        event.preventDefault();
        dispatch(nextSelection());
        break;

      default:
      // Do nothing
    }
  };

  return (
    <div onKeyUp={onKeyUp}>
      <form className="search-and-submit" onSubmit={onSubmit}>
        <Input value={query} onChange={value => dispatch(setQuery(value))} />
      </form>
      <Results results={results} selection={selection.current} />
    </div>
  );
}

export default connect(state => state)(SearchForm);
