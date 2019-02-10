import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import SearchForm from './components/form';
import store from './store';
import API from './api';

const root = document.querySelector('#search-form');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <SearchForm api={new API(root.dataset.indexUrl)} />
    </Provider>,
    root,
  );
}
