import React from 'react';
import classNames from 'classnames';

export default function({selected, result}) {
  return (
    <li className={classNames({'is-active': selected})}>
      <a href={result.fields.url}>{result.fields.title}</a>
    </li>
  );
}
