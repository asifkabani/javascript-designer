import React from 'react'
import PropTypes from 'prop-types'

function Header({ children }) {
  return <h3>{children}</h3>
}

function Category({ children }) {
  return (
    <span className="text-white text-sm font-normal block rounded-t-md p-4 bg-green-600">
      {children}
    </span>
  )
}

function Date({ children }) {
  return (
    <span className="block mb-5 text-sm font-semibold text-gray-500 uppercase tracking-wider leading-3">
      {children}
    </span>
  )
}

function Excerpt({ children }) {
  return <p className="text-gray-500 mb-10 text-xl">{children}</p>
}

function Card({ children }) {
  return (
    <article className="bg-white rounded-md shadow-lg transition-shadow hover:shadow-2xl">
      {children}
    </article>
  )
}

Card.Header = Header
Card.Category = Category
Card.Date = Date
Card.Excerpt = Excerpt
Header.propTypes = {
  children: PropTypes.node.isRequired,
}
Category.propTypes = {
  children: PropTypes.node.isRequired,
}

Date.propTypes = {
  children: PropTypes.node.isRequired,
}

Excerpt.propTypes = {
  children: PropTypes.node.isRequired,
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
