import React from 'react';
import Result from './result';

export default function({results, selection}) {
  return (
    <ul className="search-results">
      {results.map((result, index) => (
        <Result
          key={result.ref}
          selected={index === selection}
          result={result}
        />
      ))}
    </ul>
  );
}
