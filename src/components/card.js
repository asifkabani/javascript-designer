import React from 'react'
import PropTypes from 'prop-types'
import { createIcon } from '../util'

function Header({ children }) {
  return <h3 className="mb-5">{children}</h3>
}

function Category({ bgColor, children }) {
  const icon = createIcon(children)
  const textColor = bgColor === 'bg-yellow-400' ? 'text-base' : 'text-white'

  return (
    <span
      className={`${textColor} block flex items-center rounded-t-md p-4 text-sm font-normal font-semibold tracking-wider ${bgColor}`}
    >
      {icon}
      {children.toUpperCase()}
    </span>
  )
}

function Date({ children }) {
  return (
    <span className="mb-5 block text-sm font-semibold uppercase leading-3 tracking-wider text-gray-500">
      {children}
    </span>
  )
}

function Excerpt({ children }) {
  return <p className="mb-10 text-xl text-gray-500">{children}</p>
}

function Card({ children }) {
  return (
    <article className="rounded-md bg-white shadow-lg transition-shadow hover:shadow-2xl">
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
  bgColor: PropTypes.string,
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
