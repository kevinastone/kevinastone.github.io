import trianglify from 'trianglify';

function trianglifyBackground(el, seed) {
  /* eslint camelcase: "off" */

  const pattern = trianglify({
    width: el.offsetWidth,
    height: el.offsetHeight,
    cell_size: 40,
    x_colors: 'Paired',
    y_colors: 'random',
    seed,
  });

  if (!el.style.backgroundImage.includes('url')) {
    el.style.backgroundImage = 'url("' + pattern.png() + '")';
    el.style.backgroundImage =
      'url("data:image/svg+xml;utf8,' +
      new XMLSerializer().serializeToString(pattern.svg()) +
      '")';
  }
}

document
  .querySelectorAll('.trianglify-background')
  .forEach(root => trianglifyBackground(root, root.dataset.seed));
