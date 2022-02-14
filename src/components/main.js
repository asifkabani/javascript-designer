import React from 'react'
import PropTypes from 'prop-types'

function Main({ children }) {
  return (
    <section className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:px-8 md:py-16">
      {children}
    </section>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
