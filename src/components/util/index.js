import React from 'react';
import { DiHtml5, DDiCss3, DiJavascript1 } from 'react-icons/di';

// Color label depending on blog cateogry.
export function createLabel(category) {
  let backgroundColor;
  switch (category) {
    case 'HTML':
      backgroundColor = '#e34c26';
      break;
    case 'CSS':
      backgroundColor = '#006eba';
      break;
    case 'JavaScript':
      backgroundColor = '#d6ba32';
      break;

    default:
      backgroundColor = '#410f32';
      break;
  }

  return backgroundColor;
}

// Render icon depending on blog cateogry.
// export function createIcon(category) {
//   let icon;
//   switch (category) {
//     case 'HTML':
//       icon = <DiHtml5 />;
//       break;
//     case 'CSS':
//       icon = <DDiCss3 />;
//       break;
//     case 'JavaScript':
//       icon = <DiJavascript1 />;
//       break;

//     default:
//       break;
//   }

//   return icon;
// }
