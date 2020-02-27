import React from 'react'
import { navigate } from 'gatsby'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link navigate="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
