import React from 'react';
import { Category } from '../layouts/basecss';

// Color label depending on blog cateogry.
export function createLabel(category) {
  let backgroundColor = '';
  switch (category) {
    case 'HTML':
      backgroundColor = '#E44D26';
      break;
    case 'CSS':
      backgroundColor = '#0070BA';
      break;
    case 'JavaScript':
      backgroundColor = '#63A715';
      break;

    default:
      break;
  }
  return <Category style={{ backgroundColor }}>{category}</Category>;
}
