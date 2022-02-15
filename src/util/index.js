import React from 'react'
import {
  Html5PlainIcon,
  JavascriptPlainIcon,
  Css3PlainIcon,
} from 'react-devicons'

// Color label depending on blog cateogry.
export function createLabel(category) {
  let color
  switch (category) {
    case 'HTML':
      color = 'bg-orange-600'
      break
    case 'CSS':
      color = 'bg-sky-500'
      break
    case 'JavaScript':
      color = 'bg-yellow-400'
      break

    default:
      color = 'bg-jsdPurple'
      break
  }

  return color
}

// Render icon depending on blog cateogry.
export function createIcon(category) {
  let icon
  switch (category) {
    case 'HTML':
      icon = (
        <Html5PlainIcon
          style={{ marginRight: '0.5rem' }}
          color="#FFF"
          size={'1.5em'}
        />
      )
      break
    case 'CSS':
      icon = (
        <Css3PlainIcon
          style={{ marginRight: '0.5rem' }}
          color="#FFF"
          size={'1.5em'}
        />
      )
      break
    case 'JavaScript':
      icon = (
        <JavascriptPlainIcon
          style={{ marginRight: '0.5rem' }}
          color="#000"
          size={'1.5em'}
        />
      )
      break

    default:
      break
  }

  return icon
}
