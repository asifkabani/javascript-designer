// Color label depending on blog cateogry.
export function createLabel(category) {
  let backgroundColor = '';
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
