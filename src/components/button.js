import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="mt-4 rounded-md border border-jsdPurple p-4 font-josefinSans text-base text-jsdPurple transition-all hover:bg-jsdPurple hover:text-white"
    >
      {children}
    </Link>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
