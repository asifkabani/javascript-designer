import React from 'react';
import colors from '../layouts/colors';
import { DiHtml5, DiCss3, DiJavascript1 } from 'react-icons/di';

// Color label depending on blog cateogry.
export function createLabel(category) {
  let backgroundColor;
  switch (category) {
    case 'HTML':
      backgroundColor = colors.htmlColor;
      break;
    case 'CSS':
      backgroundColor = colors.cssColor;
      break;
    case 'JavaScript':
      backgroundColor = colors.jsColor;
      break;

    default:
      backgroundColor = colors.darkPlum;
      break;
  }

  return backgroundColor;
}

// Render icon depending on blog cateogry.
export function createIcon(category) {
  let icon;
  switch (category) {
    case 'HTML':
      icon = <DiHtml5 />;
      break;
    case 'CSS':
      icon = <DiCss3 />;
      break;
    case 'JavaScript':
      icon = <DiJavascript1 />;
      break;

    default:
      break;
  }

  return icon;
}
