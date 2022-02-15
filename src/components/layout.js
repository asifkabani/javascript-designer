import PropTypes from 'prop-types'
import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col text-gray-900">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default Layout
