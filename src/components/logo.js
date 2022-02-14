import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'

function Logo() {
  const { title } = useSiteMetadata()
  const mainText = title.split(' ')[0]
  const secondaryText = title.split(' ')[1]

  return (
    <Link to="/">
      <h1 className="inline-block pt-10 font-josefinSans text-6xl font-medium leading-3 tracking-tighter text-jsdYellow">
        {mainText}
        <br />
        <span className="inline-block pb-10 font-mrDafoe text-6xl text-white">
          {secondaryText}
        </span>
      </h1>
    </Link>
  )
}

export default Logo
