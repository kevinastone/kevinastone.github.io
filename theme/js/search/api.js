// eslint-disable-next-line import/no-unassigned-import
import 'whatwg-fetch';

import lunr from 'lunr';

const promises = {};

function getIndex(url) {
  if (promises[url]) {
    return promises[url];
  }

  promises[url] = fetch(url)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      const error = new Error(response.statusText);

      error.response = response;
      throw error;
    })
    .then(response => response.json())
    .then(data => lunr.Index.load(data));

  return promises[url];
}

export default class SearchAPI {
  constructor(url) {
    this.indexUrl = url;
  }

  search(query) {
    return getIndex(this.indexUrl).then(index => index.search(query));
  }
}
