import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const {
    author: { name },
  } = useSiteMetadata()

  const year = new Date().getFullYear()

  return (
    <footer className="bg-jsdPurple text-center">
      <small
        className="inline-block py-20 leading-6 text-white"
        style={{
          display: 'inline-block',
          padding: '20px 0',
          lineHeight: '1.5',
        }}
      >
        Made with <FontAwesomeIcon icon={faBrain} color="#ff3399" alt="Brain" />{' '}
        & <FontAwesomeIcon icon={faHeart} color="red" alt="Love" /> by {name}
        <br />
        JavaScript Designer © Copyright {year}
      </small>
    </footer>
  )
}

export default Footer
