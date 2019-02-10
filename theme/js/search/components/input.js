import React from 'react';
import classNames from 'classnames';

export default function({value, onChange}) {
  const ref = React.useRef(null);

  return (
    <input
      ref={ref}
      type="search"
      name="query"
      placeholder="Search"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      className={classNames({'is-active': Boolean(value)})}
      value={value}
      onChange={event => onChange(event.target.value)}
      onFocus={() => setTimeout(() => ref.current && ref.current.select())}
    />
  );
}
