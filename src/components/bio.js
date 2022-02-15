import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import authorImage from '../images/ak.jpeg'

function Bio() {
  const {
    author: { name },
  } = useSiteMetadata()

  return (
    <div className="flex justify-center flex-col items-center md:flex-row pb-10">
      <img
        className="h-14 w-14 mb-4 md:mb-auto rounded-full ring-2 ring-jsdYellow"
        src={authorImage}
        alt={name}
      />
      <p className="w-96 pl-4 text-white">
        Personal blog of {name}. You can follow me on{' '}
        <a
          className="font-bold text-jsdYellow underline hover:no-underline"
          href="https://twitter.com/js_designer006"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{' '}
        or get in touch with me through my website at{' '}
        <a
          className="font-bold text-jsdYellow underline hover:no-underline"
          href="https://asifkabani.com"
          target="_blank"
          rel="noreferrer"
        >
          asifkabani.com
        </a>
        .
      </p>
    </div>
  )
}

export default Bio
